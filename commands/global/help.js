module.exports.run = (client, message) => {
  client.commands.forEach((command) => {
    console.log(command.help.name)
  })
}

module.exports.help = {
  name: 'help',
  description: 'Get help from the bot',
  args: false,
  admin: true,
}
