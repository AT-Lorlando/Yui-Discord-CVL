module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message
  const member = message.guild.members.cache.get(user.id)
  const emoji = messageReaction.emoji.name
  const channel1A = message.guild.channels.cache.find(
    (c) => c.id === '771872337092018196'
  )
  const channel2A = message.guild.channels.cache.find(
    (c) => c.id === '771872146187223080'
  )
  const channel3A = message.guild.channels.cache.find(
    (c) => c.id === '742668883101614080'
  )
  const channel_log = message.guild.channels.cache.find(
    (c) => c.id === '771869420603310111'
  )

  const Role_1A_TDA1 = message.guild.roles.cache.get('690236332227952709')
  const Role_1A_TDA2 = message.guild.roles.cache.get('690236396316786706')
  const Role_1A_TDA3 = message.guild.roles.cache.get('690236441661407262')
  const Role_1A_TDA4 = message.guild.roles.cache.get('690236491099537474')
  const Role_1A_TDB1 = message.guild.roles.cache.get('690231246739341335')
  const Role_1A_TDB2 = message.guild.roles.cache.get('690231343648604352')
  const Role_1A_TDB3 = message.guild.roles.cache.get('690231436652970049')
  const Role_1A_TDSIB = message.guild.roles.cache.get('690238222520942721')

  const Role_2A_BLOIS_TD1 = message.guild.roles.cache.get('690230039018602678')
  const Role_2A_BLOIS_TD2 = message.guild.roles.cache.get('690230095394242613')
  const Role_2A_BLOIS_TD3 = message.guild.roles.cache.get('690230126247542905')
  const Role_2A_BOURGES_TD1 = message.guild.roles.cache.get(
    '690230131666845717'
  )
  const Role_2A_BOURGES_TD2 = message.guild.roles.cache.get(
    '690230133029732418'
  )
  const Role_2A_BOURGES_TD3 = message.guild.roles.cache.get(
    '690230134195749081'
  )
  const Role_2A_BOURGES_TD4 = message.guild.roles.cache.get(
    '690230139874836482'
  )

  const Role_3A_BLOIS_TD1 = message.guild.roles.cache.get('690237068034834527')
  const Role_3A_BLOIS_TD2 = message.guild.roles.cache.get('690237073122263056')
  const Role_3A_BLOIS_TD3 = message.guild.roles.cache.get('690237064750432256')
  const Role_3A_BLOIS_ALTERNANCE = message.guild.roles.cache.get(
    '690237071138357250'
  )
  const Role_3A_BOURGES_MRI_TD1 = message.guild.roles.cache.get(
    '690237075165151423'
  )
  const Role_3A_BOURGES_MRI_TD2 = message.guild.roles.cache.get(
    '690237652909162602'
  )
  const Role_3A_BOURGES_MRI_TD3 = message.guild.roles.cache.get(
    '690237657590267905'
  )
  const Role_3A_BOURGES_STI_TD1 = message.guild.roles.cache.get(
    '690237678469382203'
  )
  const Role_3A_BOURGES_STI_TD2 = message.guild.roles.cache.get(
    '690237665874149406'
  )
  const Role_3A_BOURGES_STI_TD3 = message.guild.roles.cache.get(
    '690237680151560275'
  )

  console.log(`Reaction ${emoji} removed by ${member.nickname}`)

  if (member.user.bot) return

  if (
    ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣'].includes(emoji) &&
    message.channel.id === channel1A.id
  ) {
    switch (emoji) {
      case '1️⃣':
        member.roles.remove(Role_1A_TDA1)
        channel_log.send(
          `Role ${Role_1A_TDA1.name} remove from ${member.nickname}`
        )
        break
      case '2️⃣':
        member.roles.remove(Role_1A_TDA2)
        channel_log.send(
          `Role ${Role_1A_TDA2.name} remove from ${member.nickname}`
        )
        break
      case '3️⃣':
        member.roles.remove(Role_1A_TDA3)
        channel_log.send(
          `Role ${Role_1A_TDA3.name} remove from ${member.nickname}`
        )
        break
      case '4️⃣':
        member.roles.remove(Role_1A_TDA4)
        channel_log.send(
          `Role ${Role_1A_TDA4.name} remove from ${member.nickname}`
        )
        break
      case '5️⃣':
        member.roles.remove(Role_1A_TDB1)
        channel_log.send(
          `Role ${Role_1A_TDB1.name} remove from ${member.nickname}`
        )
        break
      case '6️⃣':
        member.roles.remove(Role_1A_TDB2)
        channel_log.send(
          `Role ${Role_1A_TDB2.name} remove from ${member.nickname}`
        )
        break
      case '7️⃣':
        member.roles.remove(Role_1A_TDB3)
        channel_log.send(
          `Role ${Role_1A_TDB3.name} remove from ${member.nickname}`
        )
        break
      case '8️⃣':
        member.roles.remove(Role_1A_TDSIB)
        channel_log.send(
          `Role ${Role_1A_TDSIB.name} remove from ${member.nickname}`
        )
        break
    }
  }

  if (
    ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣'].includes(emoji) &&
    message.channel.id === channel2A.id
  ) {
    switch (emoji) {
      case '1️⃣':
        member.roles.remove(Role_2A_BLOIS_TD1)
        channel_log.send(
          `Role ${Role_2A_BLOIS_TD1.name} remove from ${member.nickname}`
        )
        break
      case '2️⃣':
        member.roles.remove(Role_2A_BLOIS_TD2)
        channel_log.send(
          `Role ${Role_2A_BLOIS_TD2.name} remove from ${member.nickname}`
        )
        break
      case '3️⃣':
        member.roles.remove(Role_2A_BLOIS_TD3)
        channel_log.send(
          `Role ${Role_2A_BLOIS_TD3.name} remove from ${member.nickname}`
        )
        break
      case '4️⃣':
        member.roles.remove(Role_2A_BOURGES_TD1)
        channel_log.send(
          `Role ${Role_2A_BOURGES_TD1.name} remove from ${member.nickname}`
        )
        break
      case '5️⃣':
        member.roles.remove(Role_2A_BOURGES_TD2)
        channel_log.send(
          `Role ${Role_2A_BOURGES_TD2.name} remove from ${member.nickname}`
        )
        break
      case '6️⃣':
        member.roles.remove(Role_2A_BOURGES_TD3)
        channel_log.send(
          `Role ${Role_2A_BOURGES_TD3.name} remove from ${member.nickname}`
        )
        break
      case '7️⃣':
        member.roles.remove(Role_2A_BOURGES_TD4)
        channel_log.send(
          `Role ${Role_2A_BOURGES_TD4.name} remove from ${member.nickname}`
        )
        break
    }
  }

  if (
    ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(
      emoji
    ) &&
    message.channel.id === channel3A.id
  ) {
    switch (emoji) {
      case '1️⃣':
        member.roles.remove(Role_3A_BLOIS_TD1)
        channel_log.send(
          `Role ${Role_3A_BLOIS_TD1.name} remove from ${member.nickname}`
        )
        break
      case '2️⃣':
        member.roles.remove(Role_3A_BLOIS_TD2)
        channel_log.send(
          `Role ${Role_3A_BLOIS_TD2.name} remove from ${member.nickname}`
        )
        break
      case '3️⃣':
        member.roles.remove(Role_3A_BLOIS_TD3)
        channel_log.send(
          `Role ${Role_3A_BLOIS_TD3.name} remove from ${member.nickname}`
        )
        break
      case '4️⃣':
        member.roles.remove(Role_3A_BLOIS_ALTERNANCE)
        channel_log.send(
          `Role ${Role_3A_BLOIS_ALTERNANCE.name} remove from ${member.nickname}`
        )
        break
      case '5️⃣':
        member.roles.remove(Role_3A_BOURGES_MRI_TD1)
        channel_log.send(
          `Role ${Role_3A_BOURGES_MRI_TD1.name} remove from ${member.nickname}`
        )
        break
      case '6️⃣':
        member.roles.remove(Role_3A_BOURGES_MRI_TD2)
        channel_log.send(
          `Role ${Role_3A_BOURGES_MRI_TD2.name} remove from ${member.nickname}`
        )
        break
      case '7️⃣':
        member.roles.remove(Role_3A_BOURGES_MRI_TD3)
        channel_log.send(
          `Role ${Role_3A_BOURGES_MRI_TD3.name} remove from ${member.nickname}`
        )
        break
      case '8️⃣':
        member.roles.remove(Role_3A_BOURGES_STI_TD1)
        channel_log.send(
          `Role ${Role_3A_BOURGES_STI_TD1.name} remove from ${member.nickname}`
        )
        break
      case '9️⃣':
        member.roles.remove(Role_3A_BOURGES_STI_TD2)
        channel_log.send(
          `Role ${Role_3A_BOURGES_STI_TD2.name} remove from ${member.nickname}`
        )
        break
      case '🔟':
        member.roles.remove(Role_3A_BOURGES_STI_TD3)
        channel_log.send(
          `Role ${Role_3A_BOURGES_STI_TD3.name} remove from ${member.nickname}`
        )
        break
    }
  }
}
