module.exports.run = (client, message) => {
  message.channel.send(
    `${process.env.npm_package_name} version : ${process.env.npm_package_version}`
  )
}

module.exports.help = {
  name: 'version',
  description: 'Get the version of the bot',
  args: false,
  admin: true,
}
