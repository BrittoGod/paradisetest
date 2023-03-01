const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'clear',
    usage: '',
    description: 'Clear a specific amount of messages from a target or channel.',
    default_member_permissions: ["ManageGuild"],


    options:[
        {
            name: 'amount',
            description: 'enter amount between 1 to 100.',
            type: 10,
            required: true,
            
            }
                
        ],

  run: async (client, interaction, args, ee) => {
       const {channel} = interaction;

        const amount = interaction.options.getNumber('amount');
        const target = interaction.options.getUser("target");

        const messages = await channel.messages.fetch({
            limit: amount ,
        });

        const res = new EmbedBuilder()
            .setColor(0x5fb041)

        if(target) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) =>{
                if(msg.author.id === target.id && amount > i) {
                    filtered.push(msg);
                    i++;
                }
            });

            await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Succesfully deleted ${messages.size} messages from ${target}.`);
                interaction.reply({embeds: [res]}); // you can use ephemeral if you desire
            });
        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                res.setDescription(`Succesfully deleted ${messages.size} messages from the channel.`);
                interaction.reply({embeds: [res]});
            });
        }
    }
}