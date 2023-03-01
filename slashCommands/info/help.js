const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {

	name: 'help',

	description: "Get all   BoT commands",
    ownerOnly: true,
   
run: async (client, interaction, message) => {
    
    const mainmenu = new EmbedBuilder()
    .setTitle(`${client.user.username} Help`)

      .setDescription(

        `Hey, I'm <@${client.user.id}>!\n\nA Discord bot with many awesome features!\n\n*Choose an category below button to see commands.*\n\n`

      )

 .setImage('https://cdn.discordapp.com/attachments/1042966689962262558/1047557449768505354/standard_1.gif')     .setThumbnail(client.user.displayAvatarURL())

      .setColor(client.embedColor)

      .setTimestamp()

      .setFooter({

        text: `Requested by ${message.author.tag}`,

        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      });

      return interaction.reply({
          embed: [mainmenu]
      })
   
    }
}