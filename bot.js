const Discord  = require('discord.js')
const bot = new Discord.Client();
const token = 'NTY4NTMwMDE5MzY2NzMxNzg4.XLjdbA.rgNK4BUytYEeXaT_JBTTVeNY-hc';
bot.login(token);
const PREFIX = ';;';
const DEVID = '308634171948138506';
bot.on('ready', () => {
    console.log('Fent vagyok geci');
})
//Functions----------------------------------
function stopBot(channel) {
    channel.send('Le lettem állítva')
    .then(msg => bot.destroy())
}
function resetBot(channel) {
    channel.send('Újra lettem indítva')
    .then(msg => bot.destroy())
    .then(() => bot.login(token));
}
//-------------------------------------------
bot.on('message', message => {
        if(message.content === ';;reset'){
            resetBot(message.channel);
        }
    if(message.content === ";;Szia"){
        message.reply('Szevasz te pleb');
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

