const schedule = require('node-schedule')
const { MessageEmbed } = require('discord.js')
const puppeteer = require('puppeteer')
const dayjs = require('dayjs')
require('dayjs/locale/fr')
dayjs.locale('fr')
const { discordRu } = require('../../utils')
const { cronRu, urlRu } = require('../../config/index')

function getRu(client) {
  const channelRu = discordRu(client)

  return async function () {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(urlRu)
    const results = await page.evaluate(() => {
      const name = []
      const dishes = {}
      /* eslint-disable-next-line no-undef */
      const elements = document.querySelector(
        '#menu-repas > div > ul > li.flex-active-slide > div > div:nth-child(2) > div > div'
      ).children

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        if (element.tagName === 'SPAN')
          name.push(element.innerText.toLowerCase())
        else if (element.tagName === 'UL') {
          dishes[name[name.length - 1]] = []
          for (let y = 0; y < element.children.length; y++) {
            const childElement = element.children[y]
            dishes[name[name.length - 1]].push(childElement.innerText)
          }
          dishes[name[name.length - 1]] = dishes[name[name.length - 1]].filter(
            Boolean
          )
        }
      }

      return {
        dishes,
      }
    })
    await browser.close()

    let text = ''
    Object.entries(results.dishes).forEach((entry) => {
      const [key, values] = entry
      text += `**${key.toUpperCase()}**\n`
      values.forEach((value) => {
        text += '  - ' + value + '\n'
      })
      text += '\n'
    })

    // Create the message
    const embed = new MessageEmbed()
      .setTitle(`${dayjs().format('dddd DD MMMM YYYY')}`)
      .setDescription(`Découvrez le repas du RU LAHITOLLE !`)
      .setColor('#dc143c')
      .addField('Le repas du jour :', text)
      .setFooter('En vous souhaitant bonne appétit !')

    channelRu.send(embed).catch((err) => console.error(err))
  }
}

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`)

  schedule.scheduleJob(cronRu, getRu(client))
}
