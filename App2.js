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

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


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

    // run function
    if (message.body === '/help') {
        
        // send the help
        message.reply('help');

    }

    else if (message.body.search(/(\/message:)/) === 0)  {
        
        // Add message to session
        message.reply(message.body.replace(/(\/message:)/,''));

    }
        
    else if(message.body.search(/(\/number:)/) === 0) {

        // Add count to session if messege is available
        message.reply(message.body.replace(/(\/number:)/,''));

    }
        
    else if(message.body === '/send') {

        // send message to random numbers if message and an number exist 
        message.reply('Send');
    }

    else if(message.body === '/delete/message') {

        // delete the message in the session 
        message.reply('Delete message');

    }


    else if(message.body === '/delete/number') {

        // delete the number in the session 
        message.reply('Delete number');

    }


    else if(message.body === '/clear') {

        // delete every thing in session
        message.reply('Delete number');
        
    }



    else if(message.body === '/read') {

        // send every thing in session
        message.reply('Read everything in session');
        
    }


        
    else{
        message.reply("Sorry I don't understand that\n/help => To get help");
    }            

});


client.initialize();






















// const fs = require('fs');
// const { Client } = require('whatsapp-web.js');

// // Path where the session data will be stored
// const SESSION_FILE_PATH = './session.json';

// // Load the session data if it has been previously saved
// let sessionData;
// if(fs.existsSync(SESSION_FILE_PATH)) {
//     sessionData = require(SESSION_FILE_PATH);
// }

// // Use the saved values
// const client = new Client({
//     qrTimeoutMs: 90000,
//     restartOnAuthFail:true,
//     session: sessionData
// });


// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
//     // run the body functions here


//     // Save session values to the file upon successful auth
//     client.on('authenticated', (session) => {
//         sessionData = session;
//         fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//             if (err) {
//                 console.error(err);
//             }
//         });
//     });


//     // run the message listener
//     client.on('message', message => {

//         // run function
//         if(message.body === '!ping') {
//         message.reply('pong');
//         }            

//     });

// });
