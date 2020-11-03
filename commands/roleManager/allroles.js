const { MessageEmbed } = require('discord.js')
const { getItems } = require('../../utils')
const { addRoleChannelPattern, tdRolePattern } = require('../../config')

/**
 * Use to show how to add roles
 * @param {Client} client
 * @param {Message} message
 */
module.exports.run = (client, message) => {
  // Get all used channels
  const channels = getItems('channels', message.guild, addRoleChannelPattern)
  const roles = getItems('roles', message.guild, tdRolePattern)

  channels.forEach((channel) => {
    const year = channel.name.replace(/.*(?<year>\d.)/gi, '$<year>')
    // Get channels for the wanted role
    const rolesFilter = new RegExp(year + '.+', 'ig')
    // Filtre all roles depending of the year of the channel where the role is asking
    const rolesForChannel = roles.filter((item) => item.name.match(rolesFilter))
    let allRoles = ''
    rolesForChannel.forEach((role, index) => {
      allRoles += `${index + 1} - ${message.guild.roles.cache
        .get(role.id)
        .toString()}\n`
    })

    // Create the message
    const embed = new MessageEmbed()
      .setTitle(`Rôles pour les ${year.toUpperCase()}`)
      .setDescription(
        `Écrivez dans ce channel "__Yui role @${year.toUpperCase()}-XX__" pour avoir votre TD !`
      )
      .setColor('#dc143c')
      .addField('Les rôles disponibles:', allRoles)
      .setFooter(
        'En remplaçant XX par un des rôles listés au dessus bien sûr...'
      )
    message.guild.channels.cache
      .get(channel.id)
      .send(embed)
      .catch((err) => console.log(err))
  })
}

module.exports.help = {
  name: 'allroles',
  description:
    'Créer des messages dans les bons channels pour expliquer le fonctionne des rôles',
  args: false,
  admin: true,
}
