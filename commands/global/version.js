module.exports.run = (client, message) => {
  message.channel.send(
    `${process.env.npm_package_name} version : ${process.env.npm_package_version}`
  )
}

module.exports.help = {
  name: 'version',
  description:
    'Get the version of the bot\n\nWill return the ot version in the channel \nNo argument\n```sh\n# Get bot version\n$ Yui version\n```',
  args: false,
  admin: true,
}
