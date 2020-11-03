const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message) => {
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
  const Role_3A_BLOIS_TD4 = message.guild.roles.cache.get('772032586074685461')
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

  const Role_4A_STI_TD1 = message.guild.roles.cache.get('691716364771000321')
  const Role_4A_STI_TD2 = message.guild.roles.cache.get('691716758641311775')
  const Role_4A_STI_TD3 = message.guild.roles.cache.get('691716514419834900')
  const Role_4A_GSI_TD1 = message.guild.roles.cache.get('691718228308787250')
  const Role_4A_GSI_TD2 = message.guild.roles.cache.get('691718323888455730')
  const Role_4A_GSI_TD3 = message.guild.roles.cache.get('691718426808418344')
  const Role_4A_GSI_TD4 = message.guild.roles.cache.get('691718515207569525')
  const Role_4A_GSI_TD5 = message.guild.roles.cache.get('692009425036116021')
  const Role_4A_MRI_TD1 = message.guild.roles.cache.get('691717776305291358')
  const Role_4A_MRI_TD2 = message.guild.roles.cache.get('691717900108562483')
  const Role_4A_MRI_TD3 = message.guild.roles.cache.get('691718035186122802')
  const Role_4A_MRI_TD4 = message.guild.roles.cache.get('692030280869085306')
  const Role_4A_ERE_TD1 = message.guild.roles.cache.get('691926883880665099')
  const Role_4A_ERE_TD2 = message.guild.roles.cache.get('691926999261904907')

  const embed1A = new MessageEmbed()
    .setTitle('Rôles pour les 1A')
    .setDescription(
      'Ecrivez dans ce channel "__Yui role @1A-XX__" pour avoir votre TD !'
    )
    .setColor('#dc143c')
    .addField(
      'Les rôles disponibles:',
      `
            1️ - ${Role_1A_TDA1.toString()}
            2️ - ${Role_1A_TDA2.toString()}
            3️ - ${Role_1A_TDA3.toString()}
            4️ - ${Role_1A_TDA4.toString()}
            5️ - ${Role_1A_TDB1.toString()}
            6️ - ${Role_1A_TDB2.toString()}
            7️ - ${Role_1A_TDB3.toString()}
            8️ - ${Role_1A_TDSIB.toString()}
            `
    )
    .setFooter('En remplaçant XX par un des rôles listés au dessus biensûr...')

  const embed2A = new MessageEmbed()
    .setTitle('Rôles pour les 2A')
    .setDescription(
      'Ecrivez dans ce channel "__Yui role @2A-XX__" pour avoir votre TD !'
    )
    .setColor('#dc143c')
    .addField(
      'Les rôles disponibles:',
      `
            1️ - ${Role_2A_BLOIS_TD1.toString()}
            2️ - ${Role_2A_BLOIS_TD2.toString()}
            3️ - ${Role_2A_BLOIS_TD3.toString()}
            4️ - ${Role_2A_BOURGES_TD1.toString()}
            5️ - ${Role_2A_BOURGES_TD2.toString()}
            6️ - ${Role_2A_BOURGES_TD3.toString()}
            7️ - ${Role_2A_BOURGES_TD4.toString()}
            `
    )
    .setFooter('En remplaçant XX par un des rôles listés au dessus biensûr...')

  const embed3A = new MessageEmbed()
    .setTitle('Rôles pour les 3A')
    .setDescription(
      'Ecrivez dans ce channel "__Yui role @3A-XX__" pour avoir votre TD !'
    )
    .setColor('#dc143c')
    .addField(
      'Les rôles disponibles:',
      `
            1️ - ${Role_3A_BLOIS_TD1.toString()}
            2️ - ${Role_3A_BLOIS_TD2.toString()}
            3️ - ${Role_3A_BLOIS_TD3.toString()}
            4 - ${Role_3A_BLOIS_TD4.toString()}
            5 - ${Role_3A_BLOIS_ALTERNANCE.toString()}
            6 - ${Role_3A_BOURGES_MRI_TD1.toString()}
            7 - ${Role_3A_BOURGES_MRI_TD2.toString()}
            8 - ${Role_3A_BOURGES_MRI_TD3.toString()}
            9 - ${Role_3A_BOURGES_STI_TD1.toString()}
            10 - ${Role_3A_BOURGES_STI_TD2.toString()}
            11 - ${Role_3A_BOURGES_STI_TD3.toString()}
            `
    )
    .setFooter('En remplaçant XX par un des rôles listés au dessus biensûr...')

  const embed4A = new MessageEmbed()
    .setTitle('Rôles pour les 4A')
    .setDescription(
      'Ecrivez dans ce channel "__Yui role @4A-XX__" pour avoir votre TD !'
    )
    .setColor('#dc143c')
    .addField(
      'Les rôles disponibles:',
      `
            1️ - ${Role_4A_STI_TD1.toString()}
            2️ - ${Role_4A_STI_TD2.toString()}
            3️ - ${Role_4A_STI_TD3.toString()}
            4️ - ${Role_4A_GSI_TD1.toString()}
            5️ - ${Role_4A_GSI_TD2.toString()}
            6️ - ${Role_4A_GSI_TD3.toString()}
            7️ - ${Role_4A_GSI_TD4.toString()}
            8️ - ${Role_4A_GSI_TD5.toString()}
            9️ - ${Role_4A_MRI_TD1.toString()}
            10 - ${Role_4A_MRI_TD2.toString()}
            11 - ${Role_4A_MRI_TD3.toString()}
            12 - ${Role_4A_MRI_TD4.toString()}
            13 - ${Role_4A_ERE_TD1.toString()}
            14 - ${Role_4A_ERE_TD2.toString()}
                `
    )
    .setFooter('En remplaçant XX par un des rôles listés au dessus biensûr...')

  client.channels.cache.get('772021354944790550').send(embed1A)
  client.channels.cache.get('772024026414448673').send(embed2A)
  client.channels.cache.get('772024054135128064').send(embed3A)
  client.channels.cache.get('772024086636527636').send(embed4A)
}

module.exports.help = {
  name: 'allroles',
  description: 'Renvoie pong!',
  args: false,
  admin: true,
}
