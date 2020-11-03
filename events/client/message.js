const { Collection } = require('discord.js')
const { PREFIX, IDADMIN } = require('../../config')

module.exports = (client, message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return

  const args = message.content.slice(PREFIX.length).split(/ +/)
  const commandName = args.shift().toLowerCase()

  if (!client.commands.has(commandName)) return
  const command = client.commands.get(commandName)
  console.log(command)

  if (command.help.args && !args.length) {
    return message.channel.send("Tu as oublié les arguments !")
  }

  if (command.help.admin && !message.member.roles.cache.has(IDADMIN)) {
    return message.channel.send(
      "Vous n'avez pas les droits admin sur ce serveur"
    )
  }

  command.run(client, message, args);
}