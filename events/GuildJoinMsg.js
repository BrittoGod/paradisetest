const { EmbedBuilder } = require("discord.js");

const client = require('..');
const config = require("../config.json");

  client.on('guildCreate',
async (guild, channel) => {
   
        try {
        const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    let msgembed = new EmbedBuilder()

        .setTitle(`Thanks For Adding Me!$`)

        .setColor(0x303236)                      

        .setDescription/*("Hi Im Britto BoT")*/(`**My Prefix for this server is** \`${config.prefix}\`\n **For HelpTo Show All Commands** \`${config.prefix}help\` **For More**\n**[Invite Me](${config.invite}) and Join [support server](${config.support})**\n`)

    if (!channel) return;

    await channel.send({

        embeds: [msgembed]

    })
     } catch(e) {
          console.log(e);
}
      });  
     
      

   

    

    

    

