



// a = {id : "723116674" , text : "hello" , contactCount : "20"}
// data.push(a)
// data[1]['id'] = "1"


// console.log(data[4]);




// console.log(data[0]['id'],data[0]['text'],data[0]['contactCount']);





// console.log(data[123456789]["text"] = "hello");
// console.log(data[123456789]["contactCount"] = "2");

// help
// 1 : register
// 2 : login
// 3 : supply links
// 4 : link
// 5 : contact count








data = [{ id: "634573647", text: "hello", contactCount: "0" },
        { id: "634573647", text: "hello", contactCount: "1" },
        { id: "634573647", text: "hello", contactCount: "2" },
        { id: "634573647", text: "hello", contactCount: "3" },
        { id: "634573647", text: "hello", contactCount: "4" },
        ]

// data.push({ id: '723116674', text: "Hello pato", contactCount: null })
// console.log(data['5']["contactCount"] = "30");

var message = "+"

if (message == "help") {
    console.log("help : Provides Help information\n$Enter anything : set the link to be sent\n#Enter Number : set the number of contacts the link will be sent to");

} else if (message.includes("$") == true) {

    if (message.indexOf("$") == 0) {
        
        text = message.split('$')[1]
        id = '723116674'
        data.push({ id: id, text: text, contactCount: null })

        // save the link in a list if list is blank
        console.log("Reply | Number of contacts\nExample\n #10");

    }

} else if (message.includes("#") == true) {

    if (message.indexOf("#") == 0) {

        contactCount = message.split('#')[1]
        id = '723116674'
        
        added = false
        i = 0
        while (i < data.length) {
            my_id = data[i]['id'] == "723116674"
            if (my_id == true) {
                data[i]['contactCount'] = '50'
                added = true

            }
        i++    
        }
        if (added == true) {
            // check if list contains a 1 detail
            console.log("please confirm :\n (the text here)\n\nReply | + : to send message\nExample\n +");
            
        }
        else {
            console.log("plese enter a message first\nExamlpe \n$Hello, world!");
        }


    }

} else if (message == "+") {
    id = '723116674'

    idPresent = false
    countPresent = false
    i = 0
    while (i < data.length) {
        my_id = data[i]['id'] == id
        counter = data[i]['contactCount'] !== null

        if (my_id == true) {
            idPresent = true

            if (counter == true) {
                countPresent = true
            }
        }
    i++    
    }

    if (idPresent == true) {
 
        if (countPresent == true) {
            console.log("sending");
            console.log(counter);
        } else {
            console.log("plese enter the Number of contacts you want to send to\nExamlpe \n#20");
        }

    } else {
        console.log("plese enter a message first\nExamlpe \n$Hello, world!");
    }

} else {
    console.log(message);
    console.log("help : Provides Help information");
}



// console.log(data);



// var list = [1, 2]

// console.log(list.length);

// if (list.length === 2) {

//     var message = list[0]
//     var count = list[1]

//     if (typeof (count) === "number") {
        
//     }


// };




// const fs = require('fs');
// // start import the packages
// const { request } = require('http');
// const qrcode = require('qrcode-terminal');
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
//     session: sessionData
// });

// // generate qr code
// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// // Save session values to the file upon successful auth
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
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
//     // session: sessionData
//         session: null,
// 		qrTimeoutMs: 90000,
// 		restartOnAuthFail:true,
// 		puppeteer:{headless:true}

// });
// // generate qr code
// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// client.on('ready', async () => {
//     console.log("hello");
//     // Save session values to the file upon successful auth
//     client.on('authenticated', (session) => {
//         sessionData = session;
//         fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//             if (err) {
//                 console.error(err);
//             }
//             console.log('hello');
//         });
//     });

// });




// i = 0
// contactList = []
// while (i < 2) {
//     key = runFunction(7, 7, 2, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9)
//     if (typeof (key) == "string") {
//         contactList.push(`254${key}`);
//         console.log(`254${key}`);
//     i++;
//     };
// };
// console.log(contactList);




// function randomnumber(countryCode,min1, max1, min2, max2, min3, max3, min4, max4, min5, max5, min7, max7, min8, max8, min9, max9)
// {
//     var num1 = Math.floor(Math.random() * (max1 - min1) + min1)
//     var num2 = Math.floor(Math.random() * (max2 - min2) + min2)
//     var num3 = Math.floor(Math.random() * (max3 - min3) + min3)
//     var num4 = Math.floor(Math.random() * (max4 - min4) + min4)
//     var num5 = Math.floor(Math.random() * (max5 - min5) + min5)
//     var num6 = Math.floor(Math.random() * (max6 - min6) + min6)
//     var num7 = Math.floor(Math.random() * (max7 - min7) + min7)
//     var num8 = Math.floor(Math.random() * (max8 - min8) + min8)
//     var num9 = Math.floor(Math.random() * (max9 - min9) + min9)

//     var output = countryCode + num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9

//     return output 





// }

// var countryCode = 254//prompt("countryCode : ");
// var min1, max1 = (7, 7);
// var min2, max2 = (2, 9);
// var min3, max3 = (1, 9);
// var min4, max4 = (1, 9);
// var min5, max5 = (1, 9);
// var min6, max6 = (1, 9);
// var min7, max7 = (1, 9);
// var min8, max8 = (1, 9);
// var min9, max9 = (1, 9);
// var feedbackLoop = (countryCode, (min1, max1), (min2, max2), (min3, max3), (min4, max4), (min5, max5), (min7, max7), (min8, max8), (min9, max9))
// var run = randomnumber()
