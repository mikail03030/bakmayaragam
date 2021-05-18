const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const data = new Map();

wasty.on('ready', () => {
        console.log(`hesaplar aktifleştiriliyor`);
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

const wasty = new Discord.Client();



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



wasty.on("ready", async function() {
    const voiceChannel = "hesabın gireceği kanal id"  // botun gireceği kanalın id'si
    wasty.channels.cache.get(voiceChannel).join()
    .catch(err => {
    throw err;
    })
    })
	


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


wasty.login("")

