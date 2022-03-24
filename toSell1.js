const fs = require('fs');

// start import the packages
const { request } = require('http');

// request qrcode package
const qrcode = require('qrcode-terminal');

//request whatsapp package
const { Client } = require('whatsapp-web.js');



runFunction = (min1 , max1,min2,max2,min3, max3, min4, max4, min5, max5,min6, max6, min7, max7, min8, max8, min9, max9) => {
    num1 = Math.floor(Math.random() * (max1 - min1) + min1)
    num2 = Math.floor(Math.random() * (max2 - min2) + min2)
    num3 = Math.floor(Math.random() * (max3 - min3) + min3)
    num4 = Math.floor(Math.random() * (max4 - min4) + min4)
    num5 = Math.floor(Math.random() * (max5 - min5) + min5)
    num6 = Math.floor(Math.random() * (max6 - min6) + min6)
    num7 = Math.floor(Math.random() * (max7 - min7) + min7)
    num8 = Math.floor(Math.random() * (max8 - min8) + min8)
    num9 = Math.floor(Math.random() * (max9 - min9) + min9)

    output = `${num1}${num2}${num3}${num4}${num5}${num6}${num7}${num8}${num9}`

    return output
    
};

sendLink = (count_message) => {
    
    console.log('sending');
    var results = '200'


    //     if (typeof (count_message.body == "number")) {
    //         console.log('Bot : Sending!');
            
    //         i = 0
    //         contactList = []

    //         while (i < count_message.body) {
    //             key = runFunction(7, 7, 2, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9)
    //             if (typeof (key) == "string") {
    //                 contactList.push(`254${key}`);    
    //                 // message.reply(`254${key}`);
    //                 const phone = "723116674"
    //                 const chatId = "254" + phone + "@c.us";
    //                 client.sendMessage(chatId,link);
    //                 i++;
    //             };
    //         };

    //         console.log(contactList);
    //         const phone = "723116674"
    //         const chatId = "254" + phone + "@c.us";
    //         var contactList = toString(contactList)
    //         console.log(contactList);
    //         client.sendMessage(chatId, `Sent to\n${contactList}`)
            
    //         var results = '200' 
            
    //     }
    //     else {
    //         console.log("Bot : Sorry i don't understand that!");
    //         link_message.reply("Sorry i don't understand that!\nPlease try again from the start")

    //         var results = '404'

    //     };

    return results

}


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



// when the client is ready
client.on('ready',() => {
    console.log("It's Online");

    client.on('message', message => {
	
        if (message.body === '!ping') {
    		client.sendMessage(message.from, 'pong');
        }
        if (message.body === '!ping') {
    		client.sendMessage(message.from, 'pong');
        }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }
        // if (message.body === '!ping') {
    	// 	client.sendMessage(message.from, 'pong');
        // }


    
    });

});

client.initialize();



































































    // client.on('message', message => {
    //     var message = message.body
    //     var id = message.from

    //         if (message == "help") {
    //             console.log("Hey () how can i help you\n\nhelp : Provides Help information\n$Enter Text : Enter your text\n#Enter Number : Enter the number of users to recieve your text");
    //             client.sendMessage(id, 'Hey () how can i help you\n\nhelp : Provides Help information\n$Enter Text : Enter your text\n#Enter Number : Enter the number of users to recieve your text');
    //         } else if (message.includes("$") == true) {

    //             if (message.indexOf("$") == 0) {
                    
    //                 text = message.split('$')[1]
    //                 id = message.from
    //                 data.push({ id: id, text: text, contactCount: null })
    //                 client.searchMessages(id,"Reply | Number of contacts\nExample\n #10")

    //                 // save the link in a list if list is blank
    //                 console.log("Reply | Number of contacts\nExample\n #10");
                    

    //             }

    //         } else if (message.includes("#") == true) {

    //             if (message.indexOf("#") == 0) {

    //                 contactCount = message.split('#')[1]
    //                 id = message.from
                    
    //                 added = false
    //                 i = 0
    //                 while (i < data.length) {
    //                     my_id = data[i]['id'] == id
    //                     if (my_id == true) {
    //                         data[i]['contactCount'] = contactCount
    //                         added = true

    //                     }
    //                 i++    
    //                 }
    //                 if (added == true) {
    //                     // check if list contains a 1 detail
    //                     console.log("please confirm :\n (the text here)\n\nReply | + : to send message\nExample\n +");
    //                     client.sendMessage(id, 'please confirm :\n (the text here)\n\nReply | + : to send message\nExample\n +');
    //                 }
    //                 else {
    //                     console.log("plese enter a message first\nExamlpe \n$Hello, world!");
    //                     client.sendMessage(id, 'plese enter a message first\nExamlpe \n$Hello, world!');

    //                 }


    //             }

    //         } else if (message == "+") {
    //             id = message.from

    //             idPresent = false
    //             countPresent = false
    //             i = 0
    //             while (i < data.length) {
    //                 my_id = data[i]['id'] == id
    //                 counter = data[i]['contactCount'] !== null

    //                 if (my_id == true) {
    //                     idPresent = true

    //                     if (counter == true) {

    //                         var a = data[i]['contactCount']
    //                         var b = data[i]['contactCount']

    //                         countPresent = true
    //                     }
    //                 }
    //             i++    
    //             }

    //             if (idPresent == true) {
            
    //                 if (countPresent == true) {
    //                     console.log("sending");
    //                     client.sendMessage(id, a + '\n' + b);
                        

    //                 } else {
    //                     console.log("plese enter the Number of contacts you want to send to\nExamlpe \n#20");
    //                     client.sendMessage(id, 'plese enter the Number of contacts you want to send to\nExamlpe \n#20');
    //                 }

    //             } else {
    //                 console.log("plese enter a message first\nExamlpe \n$Hello, world!");
    //                     client.sendMessage(id, 'plese enter a message first\nExamlpe \n$Hello, world!');
    //             }

    //         } else {
    //             console.log(message);
    //             console.log("help : Provides Help information");
    //             client.sendMessage(id, 'help : Provides Help information');
    //         }

    
    
    
    // });






































































































// // generate qr code
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });


// // Save session values to the file upon successful auth
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//         console.log('hello');
//     });
// });






    // // when the run command is sent sent,gess rundom numbers and send the link  
    // client.on('message', link_message => {

    //     if (link_message.body) {
    //         link = link_message.body
    //         console.log(`From : ${link_message.from}`);
    //         console.log(`link : ${link_message.body}`);
    //     };

    // });




















// runFunction = (min1 , max1,min2,max2,min3, max3, min4, max4, min5, max5,min6, max6, min7, max7, min8, max8, min9, max9) => {
//     num1 = Math.floor(Math.random() * (max1 - min1) + min1)
//     num2 = Math.floor(Math.random() * (max2 - min2) + min2)
//     num3 = Math.floor(Math.random() * (max3 - min3) + min3)
//     num4 = Math.floor(Math.random() * (max4 - min4) + min4)
//     num5 = Math.floor(Math.random() * (max5 - min5) + min5)
//     num6 = Math.floor(Math.random() * (max6 - min6) + min6)
//     num7 = Math.floor(Math.random() * (max7 - min7) + min7)
//     num8 = Math.floor(Math.random() * (max8 - min8) + min8)
//     num9 = Math.floor(Math.random() * (max9 - min9) + min9)

//     output = `${num1}${num2}${num3}${num4}${num5}${num6}${num7}${num8}${num9}`

//     return output
    
// };
// while (5 > 1) {
//     key = runFunction(7,7,2,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9)
//     console.log(`254${key}`);
// }


















































// start the whatsapp web messages for a Key --Run



// start to ges phone numbers ans sending messages


// give s alist of success messages




// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     session: null,
//     qrTimeoutMs: 90000,
//     restartOnAuthFail:true,
//     puppeteer:{headless:true}
// });

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });


// client.on('ready', () => {



//     console.log('ready ');

//     client.on('message', message => {

//         if (message.body === '!ping') {
//             message.reply('pong');
//         }
//     });
//     // console.log('Client is ready!');
//     // const phone = "723116674"
//     // const chatId = "254"+phone+"@c.us";
//     // await client.sendMessage(chatId, "message");

// });

// client.initialize();





