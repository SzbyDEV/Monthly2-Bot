const Discord = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
var mysql = require('mysql');
const PREFIX = ';;';
var mysqlback = 0;
//Mysql login-----------------------------------------
var db = {
 host: "45.67.156.82",
 user: "root",
 password: "zaitsev"
};
var connection;
//Functions----------------------------------
function DisconnectReconnect() {
 connection = mysql.createConnection(db);


 connection.connect(function(err) {
  if (err) {
   mysqlback = 0;
   console.log('Az adabázis kapcsolodásban hiba van:', err);
   setTimeout(DisconnectReconnect, 2000); //
  } else {
   mysqlback = 1;
  }
 });
 connection.on('error', function(err) {
  console.log('db error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
   DisconnectReconnect();
  } else {
   throw err;
  }
 });
}
//-------------------------------------------
bot.on('message', message => {
 let args = message.content.substring(PREFIX.length).split(" ");
 if (args[0] === 'ping') {
  message.channel.send('Pong! :smile: :ping_pong:');
 }
 if (args[0] === 'info') {
  if (args[1] === 'weboldal') {
   message.reply('http://185.234.181.181/index.php');
  } else if (args[1] === 'help') {
   message.reply('Jelenlegi prefixumok : weboldal,status')
  } else if (args[1] === 'status') {
   DisconnectReconnect();
   if (mysqlback === 0) {
    DisconnectReconnect();
    message.channel.send('Az adatbázis nem fut!')
   } else {
    message.channel.send('Az adatbázis fut!')
   }
  } else {
   message.reply('Nincsen ilyen prefixum ha nem találsz valamit használd az ;;info help parancsot');
  }

 }
})