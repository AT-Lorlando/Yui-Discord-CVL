const values = ['user']

module.exports.run = async (client, message, args) => {
  // Remove all message without args
  if (!args[0] || args[0] === 'all') {
    let messages = []
    do {
      try {
        messages = await message.channel.messages.fetch()
        await message.channel.bulkDelete(messages, true)
      } catch (err) {
        console.error(err)
      }
    } while (messages.size >= 2)
  }
  // Remove more than 100 messages
  else if (Number.isInteger(Number(args[0])) && Number(args[0]) > 100) {
    message.channel.send(
      'Impossible de supprimer plus de 100 messages pour un utilisateur !'
    )
  }
  // Remove less than 100 messages
  else if (Number.isInteger(Number(args[0])) && Number(args[0]) < 100) {
    let messages = []
    try {
      messages = await message.channel.messages.fetch()
      const iterator = messages.values()
      const toDelete = []
      for (let index = 0; index < Number(args[0]); index++) {
        const data = iterator.next().value
        if (!data) break
        toDelete.push(data)
      }
      await message.channel.bulkDelete(toDelete, true)
    } catch (err) {
      console.error(err)
    }
    // Remove message using settings
  } else if (values.includes(args[0])) {
    const type = args[0]
    let param = args[1]
    const value = args[2]
    if (type === 'user') {
      let messages = {}
      param = args[1].replace(/<@!(?<id>\d.*)>/gi, '$<id>')
      // Remove all messages from a user
      if (!value || value === 'all') {
        let messages = []
        do {
          try {
            messages = await message.channel.messages.fetch()
            messages = messages.filter((msg) => msg.author.id === param)
            await message.channel.bulkDelete(messages, true)
          } catch (err) {
            console.error(err)
          }
        } while (messages.size >= 2)
        // Remove more than 100 messages from a user
      } else if (Number.isInteger(Number(value)) && Number(value) > 100) {
        message.channel.send(
          'Impossible de supprimer plus de 100 messages pour un utilisateur !'
        )
        // Remove less than 100 message from a user
      } else if (Number.isInteger(Number(value)) && Number(value) < 100) {
        try {
          messages = await message.channel.messages.fetch()
          messages = messages.filter((msg) => msg.author.id === param)
          const iterator = messages.values()
          const toDelete = []
          for (let index = 0; index < Number(value); index++) {
            const data = iterator.next().value
            if (!data) break
            toDelete.push(data)
          }
          await message.channel.bulkDelete(toDelete, true)
        } catch (err) {
          console.error(err)
        }
      }
      // Value is not valid
      else {
        try {
          message.channel.send(`*${value}* n'est pas un argument valide !`)
        } catch (err) {
          console.error(err)
        }
      }
    }
  } else {
    try {
      message.channel.send(`*${args[0]}* n'est pas une commande reconnue !`)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports.help = {
  name: 'clean',
  description:
    'Used to remove messages\n\n```sh\n# Clean a channel\n$ Yui clean [all]\n# Clean x messages, less than 100\n$ Yui clean x\n# Clean all messages for a user in a channel\n$ Yui clean user <User> [all]\n# Clean x messages, less than 100, for a user in a channel\n$ Yui clean user <User> x\n```',
  args: false,
  admin: true,
}
