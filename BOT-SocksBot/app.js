const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.com/22r3rxxp', 1, true, join(__dirname, 'socks.txt'));
