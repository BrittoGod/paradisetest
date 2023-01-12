const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  name: 'play',
  description: 'song play',
  
  
  
  run: async (client, message, args)  => {
    const string = args.join(' ')
    if (!string) return message.channel.send(`❌ | Please enter a song url or query to search.`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}