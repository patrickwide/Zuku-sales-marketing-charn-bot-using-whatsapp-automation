// the reqirements starts here

const fs = require('fs');

// start import the packages
const { request } = require('http');

// request qrcode package
const qrcode = require('qrcode-terminal');

//request whatsapp package
const { Client } = require('whatsapp-web.js');

// the reqirements end here
// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';


// Load the session data if it has been previously saved
let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
    session: sessionData,
    qrTimeoutMs: 90000,
    restartOnAuthFail:true,
    puppeteer:{headless:false}
})

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });


// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
        console.log('Session updated');
    });
});


client.on('ready', () => {
    console.log('Client is ready!');
});

// run the message listener
client.on('message', message => {


    if (message.body === '/send') {

         client.sendMessage(message.from, 'sending');
         const phone = "723116674";
         const chatId = "254" + phone + "@c.us";
         let count = 20;
         let index = 0;

         while (index < count) {
            
            // Sending message.
            client.sendMessage(chatId, "Hello from patrick " + index);

        }
         
    }
       

});




client.initialize();

















































