const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "bot_password",
    password: "oauth token"
  },
  channels: [
    "twitch channel on which you want the bot to speach"
  ]
};
const client = new tmi.client(opts);
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  
  const commandName = msg.trim();

  if(commandName === '!commandToUse' ){
    client.say(target, `text to display `);
    console.log(`* Executed ${commandName} command`);
  }
 
  let parameters = msg.split(' ').filter(n => n);
  let command = parameters.shift().slice(1).toLowerCase();
  if (command === 'commandToUse') {
      let msg = `text to display ${parameters[0]}?`;
      client.say(target, msg);
  }
}
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
