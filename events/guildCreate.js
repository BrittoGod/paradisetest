const { ChannelType, EmbedBuilder } = require("discord.js");
const config = require("../config.json");
const client = require('..');

//const moment = require("moment");

client.on('guildCreate', async guild => {
      
  try {  
      const joinchannel = client.channels.cache.get(config.logs);
      /*
      const channel1 = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    let msgembed = new EmbedBuilder()

        .setTitle(`Thanks For Adding Me!`)

        .setColor(0x303236)                      

        .setDescription(`**My Prefix for this server is** \`B\`\n **Use** \`Bhelp\` **for more**\n**[invite me](https://discord.com/api/oauth2/authorize?client_id=993112381506986034&permissions=8&scope=bot) and join [support server](https://dsc.gg/pcrpdeveloping)**`)
    
    
    if (!channel) return;

    await channel1.send({

        embeds: [msgembed]

    })
      */
      
    let own = await guild?.fetchOwner();
    let text;
    guild.channels.cache.forEach((c) => {
      if (c.type === ChannelType.GuildText && !text) text = c;
    });
    const invite = await text.createInvite({
      reason: `For ${client.user.tag} Developer(s)`,
      maxAge: 0,
    });
    const embed = new EmbedBuilder()
      .setThumbnail(guild.iconURL({ size: 1024 }))
      .setTitle(`📥 Joined a Guild !!`)
    .setColor(0x303236)
      .addFields([
        { name: "Name", value: `\`${guild.name}\`` },
        { name: "ID", value: `\`${guild.id}\`` },
        {
          name: "Owner",
          value: `\`${
            guild.members.cache.get(own.id)
              ? guild.members.cache.get(own.id).user.tag
              : "Unknown user"
          }\` ${own.id}`,
        },
        { name: "Member Count", value: `\`${guild.memberCount}\` Members` },
        {
          name: "Creation Date",
          value: "Unknown",
        },
        {
          name: "Guild Invite",
          value: `[Here is ${guild.name} invite ](https://discord.gg/${invite.code})`,
        },
        {
          name: `${client.user.username}'s Server Count`,
          value: `\`${client.guilds.cache.size}\` Servers`,
        },
      ])
      .setTimestamp();
      //channel.send({ embeds: [msgembed] });
    joinchannel.send({ embeds: [embed] });
    
         } catch(error){
              console.log(error);
          }
  }); 


