const { EmbedBuilder, CommandInteraction } = require("discord.js");
//const MusicBot = require("../../structures/Client");
const Weldb = require("../../schema/Welcome");

module.exports = {
  name: "remove-welcome",
  description: "Turn Off the welcome system.",
  userPrems: ["ManageGuild"],
 // owner: false,
run: async (client, interaction) => {
let data = await Weldb.findOne({ Guild: interaction.guild.id });
    if (data) {
      await data.delete();
      return await interaction
        .reply({
          embeds: [
            new EmbedBuilder()
              .setDescription(`Successfully removed Welcome channel.`)
              .setColor(client.embedColor),
         ],
        })
        .catch((err) => console.error("Promise Rejected At", err));
    } else
      return await interaction
        .reply({
          embeds: [
            new EmbedBuilder()
              .setDescription(
                `You don't have any Suggestions setup in this guild!`
              )
              .setColor(client.embedColor),
          ],
        })
        .catch((err) => console.error("Promise Rejected At", err));
  },
};