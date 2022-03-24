function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  // Sleep in loop
    x = 0
  for (let i = 0; i < 1000; i++) {

      console.log(i);
     
      if (x === 10) {

          console.log('sleep');
          await sleep(5000);
          x = 0
      }
      
      x++;
  }
    
}

demo();


















// const matches = 'aBC'.match(/[A-Z]/g);
// // Output: Array [B, C]

// // const index = '/message:'.search(/(\/message:)/g);
// // // Output: 1

// const next = 'aBC'.replace(/a/, 'A');
// // Output: ABC

// var message = "/message:hello world from pato" 
// var index = message.search(/(\/message:)/);
// // Output: 1
// var index = message.replace(/(\/message:)/,'');


// // console.log(matches);
// console.log(index);
// // console.log(next);



// // the reqirements starts here

// const fs = require('fs');

// // start import the packages
// const { request } = require('http');

// // request qrcode package
// const qrcode = require('qrcode-terminal');

// //request whatsapp package
// const { Client } = require('whatsapp-web.js');

// // the reqirements end here
// // Path where the session data will be stored
// const SESSION_FILE_PATH = './session.json';





// // Load the session data if it has been previously saved
// let sessionData;
// if (fs.existsSync(SESSION_FILE_PATH)) {

//     sessionData = require(SESSION_FILE_PATH);
//     console.log("No scanning needed");
//     // start the app
//     const client = new Client({
//         session: null,
//         qrTimeoutMs: 90000,
//         restartOnAuthFail:true,
//         puppeteer:{headless:false}
//     })

    
//     client.on('ready', () => {

//         console.log('Client is ready!');

//         // run the message listener
//         client.on('message', message => {

//             // run function
//             if(message.body === '!ping') {
//             message.reply('pong');
//             }            

//         });



//         // run body function
//         bodyFunction()

//     });


//     client.initialize();
// } else {
//     console.log("Prepare to scan");

//     const client = new Client({
//         session: sessionData,
//         qrTimeoutMs: 90000,
//         restartOnAuthFail:true,
//         puppeteer:{headless:true}
//     })

//     // client.on('qr', qr => {
//     //     qrcode.generate(qr, {small: true});
//     // });
    
//     client.on('ready', () => {
//         console.log('Client is ready!');
//         // run the body functions here

//         // run the message listener
//         client.on('message', message => {

//             // run function
//             if(message.body === '!ping') {
//             message.reply('pong');
//             }            

//         });

//     });

//     client.initialize();
// }








