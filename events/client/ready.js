const schedule = require('node-schedule')
const { MessageEmbed } = require('discord.js')
const puppeteer = require('puppeteer')
const dayjs = require('dayjs')
require('dayjs/locale/fr')
dayjs.locale('fr')
const { discordRu } = require('../../utils')
const { cronRu, ruUrlBourges, ruUrlBlois } = require('../../config/index')

const rus = [
  {
    name: 'bourges',
    url: ruUrlBourges,
  },
  {
    name: 'blois',
    url: ruUrlBlois,
  },
]

function getRu(client, name, url) {
  const channelRu = discordRu(client, name)

  return async function () {
    // Remove previous messages
    await channelRu.bulkDelete(10)

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url, {timeout: 0})

    const allDays = await page.evaluate(() => {
      const menus = {}
      /* eslint-disable-next-line no-undef */
      const elements = document.querySelector('#menu-repas > div > ul').children

      for (let i = 2; i < elements.length - 1; i++) {
        const name = []
        const element = elements[i]

        const title = element.children[0].innerText.toLowerCase()
        const day = element.children[1].children[1].children[0].innerText.toLowerCase()
        const menu =
          element.children[1].children[1].children[1].children[0].children
        menus[title] = {}
        menus[title][day] = {}

        for (let i = 0; i < menu.length; i++) {
          const item = menu[i]
          // Create a menu
          if (item.tagName === 'SPAN') name.push(item.innerText.toLowerCase())
          else if (item.tagName === 'UL') {
            menus[title][day][name[name.length - 1]] = []
            for (let y = 0; y < item.children.length; y++) {
              const childElement = item.children[y]
              menus[title][day][name[name.length - 1]].push(
                childElement.innerText
              )
            }
            menus[title][day][name[name.length - 1]] = menus[title][day][
              name[name.length - 1]
            ].filter(Boolean)
          }
        }
      }
      return menus
    })

    await browser.close()

    // Send message for all menu of the week
    Object.entries(allDays).forEach((entry) => {
      const [key] = entry
      const date = key
      let text = ''
      // Create text for one day
      Object.entries(allDays[key]['déjeuner']).forEach((entryMenu) => {
        const [key, menu] = entryMenu
        text += `**${key.toUpperCase()}**\n`
        menu.forEach((value) => {
          text += '  - ' + value + '\n'
        })
        text += '\n'
      })

      channelRu
        .send(createEmbedMenu('lahitolle'.toUpperCase(), date, text))
        .catch((err) => console.error(err))
    })

    // console.log(allDays)
  }
}

function createEmbedMenu(pos, date, text) {
  return new MessageEmbed()
    .setTitle(`${date.toUpperCase()}`)
    .setDescription(`Découvrez le repas du RU ${pos} !`)
    .setColor('#dc143c')
    .addField('Le repas du jour :', text)
    .setFooter('En vous souhaitant un bon appétit !')
}

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`)

  if (process.env.CRON === 'production') {
    rus.forEach((ru) => {
      schedule.scheduleJob(cronRu, getRu(client, ru.name, ru.url))
    })
  }
}
