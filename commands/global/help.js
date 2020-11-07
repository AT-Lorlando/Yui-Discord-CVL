const { MessageEmbed } = require('discord.js')

/**
 * Create message to display
 * @param {Map | Object} commands
 */
function createMessageEmbed(commands) {
  let embed = new MessageEmbed().setColor('#20bf6b')
  let title = ''
  if (!commands.size) {
    title = `Aide pour l\'utilisation de ${process.env.npm_package_name}, version ${process.env.npm_package_version}`
    embed.setDescription(`Commande \`${commands.help.name}\``)
    embed.addField(commands.help.name, commands.help.description)
  } else {
    title = `Aide pour l\'utilisation de ${process.env.npm_package_name}, version ${process.env.npm_package_version}`
    commands.forEach((command) => {
      embed.addField(command.help.name, command.help.description)
    })
  }
  embed.setTitle(title)

  return embed
}

/**
 * Send embed message in the channel from the message
 * @param {Client} client
 * @param {Message} message
 * @param {String} commandName
 * @returns {Promise<Message>}
 */
function showCmd(client, message, commandName) {
  let embed = undefined
  if (!commandName) {
    embed = createMessageEmbed(client.commands)
  } else {
    const command = client.commands.get(commandName)
    if (!command) embed = `*${commandName}* est introuvable ! 🔎`
    else embed = createMessageEmbed(command)
  }
  return message.channel.send(embed)
}

module.exports.run = async (client, message, args) => {
  const command = args.length === 0 ? null : args[0]
  try {
    await showCmd(client, message, command)
  } catch (err) {
    console.error(err)
  }
}

module.exports.help = {
  name: 'help',
  description:
    'Get help from the bot\n\nWill return all commands with their description\nUse an argument to have the command description\n```sh\n# Get help for all commands\n$ Yui help\n# Get help for one command\n$ Yui help <cmd>\n```',
  args: false,
  admin: true,
}
