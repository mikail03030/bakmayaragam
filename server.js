const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "seninidin" &&
      message.content.includes("yazın")
    ) {
      setTimeout(() => {
        message.channel.send("yazınıyazdıktansonratokenlerinyazcagisey");
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    //client.guilds
      //.get(your_server)                  FFMPEG'İN YOKSA BUNLARI AKTİF ETME
      //.channels.get(voice_channel)
      //.join();
  });
});
