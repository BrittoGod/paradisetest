const { EmbedBuilder, CommandInteraction } = require("discord.js");

//const MusicBot = require("../../structures/Client");

const Sugdb = require("../../schema/Suggest");

module.exports = {

  name: "remove-suggestion",

  description: "Turn Off the Suggestion system.",

  userPrems: ["ManageGuild"],

  owner: false,


run: async (client, interaction) => {
let data = await Sugdb.findOne({ Guild: interaction.guild.id });

    if (data) {

      await data.delete();

      return await interaction

        .reply({

          embeds: [

            new EmbedBuilder()

              .setDescription(`Successfully removed Suggestion channel.`)

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

