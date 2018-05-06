const Discord = require('discord.js');
const bot = new Discord.Client();

const username

bot.on('message' , (message) => {
    if(message.author.username == username){
        message.channel.sendMessage('Here goes your message', {
            file: "https://i.imgur.com/wqlBTWg.jpg" // image sent within message
        });
    }
});

bot.login('Discord server login token');

