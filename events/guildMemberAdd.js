//const {EmbedBuilder} = require("@discordjs/builders");

const {GuildMember, Embed, InteractionCollector, EmbedBuilder} = require("discord.js");

const Schema = require("../schema/Welcome");
const client = require('..');

client.on("guildMemberAdd", (member)  => {

      
         Schema.findOne({Guild: member.guild.id}, async (err, data) => {

            if (!data) return;

            let channel = data.Channel;

            let Msg = data.Msg || "Welcome TO PARADISE";

            //let Role = data.Role;

            const {user, guild} = member;

            const welcomeChannel = member.guild.channels.cache.get(data.Channel);

            const welcomeEmbed = new EmbedBuilder()

            .setTitle("**New member!**")

            .setDescription(data.Msg)

            .setColor(0x037821)

            .addFields({name: 'Total members', value: `${guild.memberCount}`})

            .setTimestamp();

            welcomeChannel.send({embeds: [welcomeEmbed]});

            //member.roles.add(data.Role);

        
            
           

    })
          
})
