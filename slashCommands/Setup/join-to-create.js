const { ApplicationCommandOptionType, Client, CommandInteraction } = require("discord.js");
const schema = require("../../schema/join-to-create")

module.exports = {
    name: "jointocreate",
    description: "setup join to create channel",
    userPermissions: ["ManageGuild", "Connect"],
    botPermissions: ["ManageGuild", "ManageChannels"],
    options: [

    {

      name: "set",

      description: "Setup the voicechannel.",

      type: ApplicationCommandOptionType.Subcommand,

    },

    {

      name: "delete",

      description: "Delete the voicechannel.",

      type: ApplicationCommandOptionType.Subcommand,

    },

  ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        
        let data = await schema.findOne({ Guild: interaction.guild.id })
        if (interaction.options.getSubcommand() === "set") {
        const channel = interaction.member.voice.channelId
        if (!channel) return interaction.reply(`**${interaction.member}** Join the voice channel you wanna convert to **join to create** vc`);

        
        if (!data) {
            data = new schema({
                Guild: interaction.guild.id,
                Channel: channel
            }).save()
        } else {
            data.Channel = channel
            data.save()
        }

        interaction.reply({
            content: `<#${channel}> has been set as join to create vc`
        })
    }
        if (interaction.options.getSubcommand() === "delete") {
            if (!data)

        return await interaction.reply(

`This server doesn't have join to create voicechannel setup to use this sub command.`

        );

      await data.delete();

      return await interaction.reply(

        `Successfully deleted all the setup data.`

      );
            
            }
        }
}