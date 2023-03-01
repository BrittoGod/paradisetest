const {Message, Client, SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");
const welcomeSchema = require("../../schema/Welcome");
const {model, Schema} = require("mongoose");

module.exports = {
    name: 'setup-welcome',
    description: 'setup welcome channel',
    options: [
    {
    name: 'channel',
    description: 'channel for welcome members',
    type: 7,
    required: true,
    },
    {
    name: 'welcome-message',
    description: 'message for welcome members',
    type: 3,
    required: true,
    },
    {
    name: 'welcome-role',
    description: 'role for welcome members',
    type: 8,
    required: true,
    },
    ],

    run: async (client, interaction) => {
        //const {channel, options} = interaction;

        const welcomeChannel = interaction.options.getChannel("channel");
        const welcomeMessage = interaction.options.getString("welcome-message");
        const roleId = interaction.options.getRole("welcome-role");

        if(!interaction.guild.members.me.permissions.has(PermissionFlagsBits.SendMessages)) {
            interaction.reply({content: "I don't have permissions for this.", ephemeral: true});
        }

        welcomeSchema.findOne({Guild: interaction.guild.id}, async (err, data) => {
            if(!data) {
                const newWelcome = await welcomeSchema.create({
                    Guild: interaction.guild.id,
                    Channel: welcomeChannel.id,
                    Msg: welcomeMessage,
                    Role: roleId.id
                });
            }
            interaction.reply({content: 'Succesfully created a welcome message', ephemeral: true});
        })
    }
}