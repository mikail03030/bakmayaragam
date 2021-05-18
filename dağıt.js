const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission(8)) return;
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))

    let pubID = "831304788695318539"

    let pubatılcaklar = message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === message.member.voice.channel.id).filter(x => x.voice.selfDeaf === false)
    let sleep = message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === message.member.voice.channel.id).filter(x => x.voice.selfDeaf === true)

    let kanallar = message.guild.channels.cache.filter(s => s.parentID === pubID)
    let sleepID = "831211053139492866"
    sleep.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(sleepID)
        }, index * 2000)
    })
    pubatılcaklar.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(kanallar.random())
        }, index * 2000)
    })
    embed.setDescription(`${sleep.size} Adet kullanıcı sleep odalara taşındı. 
    ${pubatılcaklar.size} Adet kullanıcı public odalara dağıtıldı.`)
    message.channel.send(embed)

}
exports.config = {
    name: "dağıt",
    guildOnly: true,
    aliases: [],
    cooldown: 0
}
