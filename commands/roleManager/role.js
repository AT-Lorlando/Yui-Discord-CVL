module.exports.run = (client, message, args) => {

    const user = message.author;
    const member = message.guild.members.cache.get(user.id);
    const channel = message.channel;
    const argued_role = args[0];

    if (member.bot) return;

    const channel1A = message.guild.channels.cache.find(c => c.id === '772021354944790550');
    const channel2A = message.guild.channels.cache.find(c => c.id === '772024026414448673');
    const channel3A = message.guild.channels.cache.find(c => c.id === '772024054135128064');
    const channel4A = message.guild.channels.cache.find(c => c.id === '772024086636527636');
    const channel_log = message.guild.channels.cache.find(c => c.id === '771869420603310111');

    const Role_1A_TDA1 = message.guild.roles.cache.get("690236332227952709");
    const Role_1A_TDA2 = message.guild.roles.cache.get("690236396316786706");
    const Role_1A_TDA3 = message.guild.roles.cache.get("690236441661407262");
    const Role_1A_TDA4 = message.guild.roles.cache.get("690236491099537474");
    const Role_1A_TDB1 = message.guild.roles.cache.get("690231246739341335");
    const Role_1A_TDB2 = message.guild.roles.cache.get("690231343648604352");
    const Role_1A_TDB3 = message.guild.roles.cache.get("690231436652970049");
    const Role_1A_TDSIB = message.guild.roles.cache.get("690238222520942721");

    const Role_2A_BLOIS_TD1 = message.guild.roles.cache.get("690230039018602678");
    const Role_2A_BLOIS_TD2 = message.guild.roles.cache.get("690230095394242613");
    const Role_2A_BLOIS_TD3 = message.guild.roles.cache.get("690230126247542905");
    const Role_2A_BOURGES_TD1 = message.guild.roles.cache.get("690230131666845717");
    const Role_2A_BOURGES_TD2 = message.guild.roles.cache.get("690230133029732418");
    const Role_2A_BOURGES_TD3 = message.guild.roles.cache.get("690230134195749081");
    const Role_2A_BOURGES_TD4 = message.guild.roles.cache.get("690230139874836482");

    const Role_3A_BLOIS_TD1 = message.guild.roles.cache.get("690237068034834527");
    const Role_3A_BLOIS_TD2 = message.guild.roles.cache.get("690237073122263056");
    const Role_3A_BLOIS_TD3 = message.guild.roles.cache.get("690237064750432256");
    const Role_3A_BLOIS_TD4 = message.guild.roles.cache.get("772032586074685461");
    const Role_3A_BLOIS_ALTERNANCE = message.guild.roles.cache.get("690237071138357250");
    const Role_3A_BOURGES_MRI_TD1 = message.guild.roles.cache.get("690237075165151423");
    const Role_3A_BOURGES_MRI_TD2 = message.guild.roles.cache.get("690237652909162602");
    const Role_3A_BOURGES_MRI_TD3 = message.guild.roles.cache.get("690237657590267905");
    const Role_3A_BOURGES_STI_TD1 = message.guild.roles.cache.get("690237678469382203");
    const Role_3A_BOURGES_STI_TD2 = message.guild.roles.cache.get("690237665874149406");
    const Role_3A_BOURGES_STI_TD3 = message.guild.roles.cache.get("690237680151560275");

    const Role_4A_STI_TD1 = message.guild.roles.cache.get("691716364771000321");
    const Role_4A_STI_TD2 = message.guild.roles.cache.get("691716758641311775");
    const Role_4A_STI_TD3 = message.guild.roles.cache.get("691716514419834900");
    const Role_4A_GSI_TD1 = message.guild.roles.cache.get("691718228308787250");
    const Role_4A_GSI_TD2 = message.guild.roles.cache.get("691718323888455730");
    const Role_4A_GSI_TD3 = message.guild.roles.cache.get("691718426808418344");
    const Role_4A_GSI_TD4 = message.guild.roles.cache.get("691718515207569525");
    const Role_4A_GSI_TD5 = message.guild.roles.cache.get("692009425036116021");
    const Role_4A_MRI_TD1 = message.guild.roles.cache.get("691717776305291358");
    const Role_4A_MRI_TD2 = message.guild.roles.cache.get("691717900108562483");
    const Role_4A_MRI_TD3 = message.guild.roles.cache.get("691718035186122802");
    const Role_4A_MRI_TD4 = message.guild.roles.cache.get("692030280869085306");
    const Role_4A_ERE_TD1 = message.guild.roles.cache.get("691926883880665099");
    const Role_4A_ERE_TD2 = message.guild.roles.cache.get("691926999261904907");

    console.log(`Role ${argued_role} wanted by ${member.displayName}`);
    const wanted_role = message.guild.roles.cache.get(argued_role.replace('<@&', '').replace('>',''));
    console.log(`Role ${wanted_role} wanted by ${member.displayName}`);

    switch (channel) {
        case channel1A:
            console.log('Channel 1A');
            switch (wanted_role) {
                case Role_1A_TDA1:
                    member.roles.add(Role_1A_TDA1);
                    channel_log.send(`Role ${Role_1A_TDA1.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDA2:
                    member.roles.add(Role_1A_TDA2);
                    channel_log.send(`Role ${Role_1A_TDA2.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDA3:
                    member.roles.add(Role_1A_TDA3);
                    channel_log.send(`Role ${Role_1A_TDA3.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDA4:
                    member.roles.add(Role_1A_TDA4);
                    channel_log.send(`Role ${Role_1A_TDA4.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDB1:
                    member.roles.add(Role_1A_TDB1);
                    channel_log.send(`Role ${Role_1A_TDB1.name} add to ${member.displayName}`);
                    break;
                 case Role_1A_TDB2:
                    member.roles.add(Role_1A_TDB2);
                    channel_log.send(`Role ${Role_1A_TDB2.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDB3:
                    member.roles.add(Role_1A_TDB3);
                    channel_log.send(`Role ${Role_1A_TDB3.name} add to ${member.displayName}`);
                    break;
                case Role_1A_TDSIB:
                    member.roles.add(Role_1A_TDSIB);
                    channel_log.send(`Role ${Role_1A_TDSIB.name} add to ${member.displayName}`);
                    break;
            }
            break;
        case channel2A:
            console.log('Channel 2A');
            switch (wanted_role) {
                case Role_2A_BLOIS_TD1:
                    member.roles.add(Role_2A_BLOIS_TD1);
                    channel_log.send(`Role ${Role_2A_BLOIS_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_2A_BLOIS_TD2:
                    member.roles.add(Role_2A_BLOIS_TD2);
                    channel_log.send(`Role ${Role_2A_BLOIS_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_2A_BLOIS_TD3:
                    member.roles.add(Role_2A_BLOIS_TD3);
                    channel_log.send(`Role ${Role_2A_BLOIS_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_2A_BOURGES_TD1:
                    member.roles.add(Role_2A_BOURGES_TD1);
                    channel_log.send(`Role ${Role_2A_BOURGES_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_2A_BOURGES_TD2:
                    member.roles.add(Role_2A_BOURGES_TD2);
                    channel_log.send(`Role ${Role_2A_BOURGES_TD2.name} add to ${member.displayName}`);
                    break;
                 case Role_2A_BOURGES_TD3:
                    member.roles.add(Role_2A_BOURGES_TD3);
                    channel_log.send(`Role ${Role_2A_BOURGES_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_2A_BOURGES_TD4:
                    member.roles.add(Role_2A_BOURGES_TD4);
                    channel_log.send(`Role ${Role_2A_BOURGES_TD4.name} add to ${member.displayName}`);
                    break;
            }
            break;
        case channel3A:
            console.log('Channel 3A');
            switch (wanted_role) {
                case Role_3A_BLOIS_TD1:
                    member.roles.add(Role_3A_BLOIS_TD1);
                    channel_log.send(`Role ${Role_3A_BLOIS_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BLOIS_TD2:
                    member.roles.add(Role_3A_BLOIS_TD2);
                    channel_log.send(`Role ${Role_3A_BLOIS_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BLOIS_TD3:
                    member.roles.add(Role_3A_BLOIS_TD3);
                    channel_log.send(`Role ${Role_3A_BLOIS_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BLOIS_TD4:
                    member.roles.add(Role_3A_BLOIS_TD4);
                    channel_log.send(`Role ${Role_3A_BLOIS_TD4.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BLOIS_ALTERNANCE:
                    member.roles.add(Role_3A_BLOIS_ALTERNANCE);
                    channel_log.send(`Role ${Role_3A_BLOIS_ALTERNANCE.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BOURGES_MRI_TD1:
                    member.roles.add(Role_3A_BOURGES_MRI_TD1);
                    channel_log.send(`Role ${Role_3A_BOURGES_MRI_TD1.name} add to ${member.displayName}`);
                    break;
                 case Role_3A_BOURGES_MRI_TD2:
                    member.roles.add(Role_3A_BOURGES_MRI_TD2);
                    channel_log.send(`Role ${Role_3A_BOURGES_MRI_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BOURGES_MRI_TD3:
                    member.roles.add(Role_3A_BOURGES_MRI_TD3);
                    channel_log.send(`Role ${Role_3A_BOURGES_MRI_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BOURGES_STI_TD1:
                    member.roles.add(Role_3A_BOURGES_STI_TD1);
                    channel_log.send(`Role ${Role_3A_BOURGES_STI_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BOURGES_STI_TD2:
                    member.roles.add(Role_3A_BOURGES_STI_TD2);
                    channel_log.send(`Role ${Role_3A_BOURGES_STI_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_3A_BOURGES_STI_TD3:
                    member.roles.add(Role_3A_BOURGES_STI_TD3);
                    channel_log.send(`Role ${Role_3A_BOURGES_STI_TD3.name} add to ${member.displayName}`);
                    break;
            }
            break;
        case channel4A:
            console.log('Channel 4A');
            switch (wanted_role) {
                case Role_4A_GSI_TD1:
                    member.roles.add(Role_4A_GSI_TD1);
                    channel_log.send(`Role ${Role_4A_GSI_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_4A_GSI_TD2:
                    member.roles.add(Role_4A_GSI_TD2);
                    channel_log.send(`Role ${Role_4A_GSI_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_4A_GSI_TD3:
                    member.roles.add(Role_4A_GSI_TD3);
                    channel_log.send(`Role ${Role_4A_GSI_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_4A_GSI_TD4:
                    member.roles.add(Role_4A_GSI_TD4);
                   channel_log.send(`Role ${Role_4A_GSI_TD4.name} add to ${member.displayName}`);
                    break;
                case Role_4A_GSI_TD5:
                    member.roles.add(Role_4A_GSI_TD5);
                    channel_log.send(`Role ${Role_4A_GSI_TD5.name} add to ${member.displayName}`);
                    break;
                 case Role_4A_MRI_TD1:
                    member.roles.add(Role_4A_MRI_TD1);
                    channel_log.send(`Role ${Role_4A_MRI_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_4A_MRI_TD2:
                    member.roles.add(Role_4A_MRI_TD2);
                    channel_log.send(`Role ${Role_4A_MRI_TD2.name} add to ${member.displayName}`);
                    break;
                case Role_4A_MRI_TD3:
                    member.roles.add(Role_4A_MRI_TD3);
                    channel_log.send(`Role ${Role_4A_MRI_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_4A_MRI_TD4:
                    member.roles.add(Role_4A_MRI_TD4);
                    channel_log.send(`Role ${Role_4A_MRI_TD4.name} add to ${member.displayName}`);
                    break;
                case Role_4A_STI_TD1:
                    member.roles.add(Role_4A_STI_TD1);
                    channel_log.send(`Role ${Role_4A_STI_TD1.name} add to ${member.displayName}`);
                    break;
                case Role_4A_STI_TD2:
                    member.roles.add(Role_4A_STI_TD2);
                    channel_log.send(`Role ${Role_4A_STI_TD2.name} add to ${member.displayName}`);
                    break;                
                case Role_4A_STI_TD3:
                    member.roles.add(Role_4A_STI_TD3);
                    channel_log.send(`Role ${Role_4A_STI_TD3.name} add to ${member.displayName}`);
                    break;
                case Role_4A_ERE_TD1:
                    member.roles.add(Role_4A_ERE_TD1);
                    channel_log.send(`Role ${Role_4A_ERE_TD1.name} add to ${member.displayName}`);    
                    break;
                case Role_4A_ERE_TD2:
                    member.roles.add(Role_4A_ERE_TD2);
                    channel_log.send(`Role ${Role_4A_ERE_TD2.name} add to ${member.displayName}`);
                    break;
            }
            break;
    };
    };
  
  module.exports.help = {
    name: 'role',
    description: 'Vous attribue les rôles que vous avez demandé !',
    args: true,
    admin: false,
  }
  