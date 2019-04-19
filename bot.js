const Discord  = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
var mysql = require('mysql');
const PREFIX = ';;';
const mysqlback = -1;
//Mysql test-----------------------------------------
var con = mysql.createConnection({
  host: "45.67.156.82",
  user: "root",
  password: "zaitsev"
});

con.connect(function(err) {
  if (err) {
      mysqlback = 0;
  }
  else
  mysqlback = 1;
});
//Functions----------------------------------
//-------------------------------------------
bot.on('message', message => { 
    if(message.content === ";;Szia"){
        message.reply('Szia neked is!');
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
            if (mysqlback === 1){
                message.channel.send('Az adatbázis fut!')
            }else{
                message.channel.send('Az adatbázis nem fut!')
            }
        }
        else{
            message.reply('Nincsen ilyen prefixum ha nem találsz valamit használd az ;;info help parancsot');
        }
        
    }
})

