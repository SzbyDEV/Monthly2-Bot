const Discord  = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
const PREFIX = ';;';
bot.on('ready', () => {
    console.log('Sikeres login');
})
//Functions----------------------------------
//-------------------------------------------
bot.on('message', message => { 
    if(message.content === ";;Szia"){
        message.reply('Szevasz!');
    }
    
});

bot.on('message',message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    if(args[0] === 'ping')
    {
        message.channel.send('Pong! :smile: :ping_pong:');
    }
    if(args[0] === 'info') {
        if (args[1] === 'weboldal'){
            message.reply('http://185.234.181.181/index.php');
        }else if(args[1] === 'help'){
            message.reply('Jelenlegi prefixumok : weboldal,status')
        }else if (args[1] === 'status'){
            message.channel.send('Jelenleg Státusz: ')
            message.channel.send('Login státusz: Online')
            message.channel.send('Szerver státusz: Online')
        }
        else{
            message.reply('Nincsen ilyen prefixum ha nem találsz valamit használd az ;;info help parancsot');
        }
        
    }
})

