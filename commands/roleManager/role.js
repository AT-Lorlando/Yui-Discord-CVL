const { getItems, discordLog } = require('../../utils')
const {
  addRoleChannelPattern,
  rolePattern,
  tdRolePattern,
} = require('../../config')

/**
 *  Use to set a role to a user
 * @param {Client} client
 * @param {Message} message
 * @param {String} args
 */
exports.run = (client, message, args) => {
  const user = message.author
  const member = message.guild.members.cache.get(user.id)
  const channel = message.channel

  // Check that the arg is a valid role
  if (!args[0].match(rolePattern))
    return channel
      .send("Ce n'est pas un rôle !")
      .catch((err) => console.error(err))
  const arguedRole = args[0].slice(3, 21)

  // Return if the bot parle
  if (member.bot) return

  // Get all used channels
  const channelLogs = discordLog(message.guild)
  const channels = getItems('channels', message.guild, addRoleChannelPattern)

  // Check that this is a correct channel to give a role
  const channelFind = channels.find((item) => item.id === channel.id)
  if (!channelFind) return

  // Get channels for the wanted role
  const rolesFilter = new RegExp(
    channel.name.replace(/.*(?<year>\d.)/gi, '$<year>') + '.+',
    'ig'
  )
  // Filtre all roles depending of the year of the channel where the role is asking
  const rolesForChannel = getItems(
    'roles',
    message.guild,
    tdRolePattern
  ).filter((item) => item.name.match(rolesFilter))

  // Give the role if the wanted role is in the list
  const roleFind = rolesForChannel.find((role) => role.id === arguedRole)
  if (roleFind) {
    member.roles
      .add(arguedRole)
      .then((member) => {
        channelLogs
          .send(`Role ${roleFind.name} add to ${member.displayName}`)
          .catch((err) => console.error(err))
      })
      .catch((err) => {
        console.error(err)
      })
  } else {
    channel
      .send("Ce rôle n'est pas pour toi !")
      .catch((err) => console.error(err))
  }
}

exports.help = {
  name: 'role',
  description: 'Vous attribue les rôles que vous avez demandé !',
  args: true,
  admin: false,
}
