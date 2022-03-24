var prompt = require('prompt-sync')();
console.log("Fill the details bellow:");
var file_name = prompt("Enter File Name : ");
var name_col = parseInt(prompt("Enter Name Column No : "))
var phone_col = parseInt(prompt("Enter Phone Column No : "))
var message_col = parseInt(prompt("Enter Message Column No : "))

//get data from the python data server
const spawn = require('child_process').spawn;
const data = file_name
let stringifiedData = JSON.stringify(data);
const py = spawn('python', ['server.py', stringifiedData]);

resultString = '';

py.stdout.on('data', function (stdData) {
    resultString += stdData.toString();
});

py.stdout.on('end', function () {

    let resultData = JSON.parse(resultString);
    let persons = resultData['data'];
    if (typeof(persons) != 'object'){
        console.log("Error | Check file name and try again");
    }
    
    else{

		let resultData = JSON.parse(resultString);
		let persons = resultData['data'];

		var person_count = persons.length
        var i = 0

		while (i < person_count) {
         
            var name = persons[i][name_col]
            var phone = persons[i][phone_col]
            var message = persons[i][message_col]
			var admin = "Admin"
			var max = 150
			//code to edit the phone numbers
			const chatId = "254"+ phone+"@c.us";

			// Sending message.
            // client.sendMessage(chatId, message);
			console.log(` ##############${"#".repeat(150)}#`);
			console.log(` ## From #### Admin ${"#".repeat(max - admin.length)}#`);
			console.log(` ## Name #### ${name} ${"#".repeat(max - name.length)}#`);
			console.log(` ## Phone ### 0${phone} ${"#".repeat(max - phone.length - 1)}#`);
			console.log(` ## Message # ${message} ${"#".repeat(max - message.length)}#`);
			console.log(` ##############${"#".repeat(max)}#`);
			i++;

        }

		console.log(" ## sending... #######################################################################################################################################################");
        console.log(" #####################################################################################################################################################################");
    
    }
});














































		// let resultData = JSON.parse(resultString);
		// let persons = resultData['data'];

		// var person_count = persons.length
        // var i = 0

		// while (i < person_count) {
        //     var name = persons[i][3]
        //     var phone = persons[i][4]
        //     var message = persons[i][5]
		// 	var admin = "Admin"
		// 	var max = 150
		// 	//code to edit the phone numbers
		// 	const chatId = "254"+ phone+"@c.us";

		// 	// Sending message.
        //     // client.sendMessage(chatId, message);
		// 	console.log(` ##############${"#".repeat(150)}#`);
		// 	console.log(` ## From #### Admin ${"#".repeat(max - admin.length)}#`);
		// 	console.log(` ## Name #### ${name} ${"#".repeat(max - name.length)}#`);
		// 	console.log(` ## Phone ### 0${phone} ${"#".repeat(max - phone.length - 1)}#`);
		// 	console.log(` ## Message # ${message} ${"#".repeat(max - message.length)}#`);
		// 	console.log(` ##############${"#".repeat(max)}#`);
		// 	i++;
		// }

		// console.log("sending...");





























// var message = "Dear FRANCIS We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"
// var admin = "Admin"
// var name = "FRANCIS"
// var phone = "0703486995"
// var max = 150
// console.log(`${max}`);

// //length of the long message
// console.log(message.length);

// //length of the short message
// console.log(admin.length);

// //get the diff of the 2 lengths
// console.log(message.length - admin.length)

// console.log("#".repeat(message.length));
// console.log("#".repeat(message.length - admin.length));

// console.log(` ##############${"#".repeat(150)}#`);
// console.log(` ## From #### Admin ${"#".repeat(max - admin.length)}#`);
// console.log(` ## Name #### ${name} ${"#".repeat(max - name.length)}#`);
// console.log(` ## Phone ### 0${phone} ${"#".repeat(max - phone.length - 1)}#`);
// console.log(` ## Message # ${message} ${"#".repeat(max - message.length)}#`);
// console.log(` ##############${"#".repeat(max)}#`);


































































// const spawn = require('child_process').spawn;
// const data = "true"
// let stringifiedData = JSON.stringify(data);
// const py = spawn('python', ['server.py', stringifiedData]);

// resultString = '';

// py.stdout.on('data', function (stdData) {
//     resultString += stdData.toString();
//     resultString = resultData['data'];
//     console.log(resultString);
// });

// py.stdout.on('end', function () {

//     let resultData = JSON.parse(resultString);
//     let persons = resultData['data'];
//     console.log(persons);

//     console.log("Done");
// });
























    // var person_count = persons.length
    // var i = 0
    
    // while (i < person_count) {
    //     var name = persons[i][0]
    //     var phone = persons[i][1]
    //     var message = persons[i][2]
    //     console.log(name,phone,message);

    //     //code to edit the phone numbers
    //     const chatId = "254"+ phone+"@c.us";
    //     // Sending message.
    //     // client.sendMessage(chatId, message);
    //     // console.log(`Sent to ${name}`);
    //     i++;
    // }



























// //get data from the python data server
// const spawn = require('child_process').spawn;
// const data = "1"
// let stringifiedData = JSON.stringify(data);
// const py = spawn('python', ['server.py', stringifiedData]);

// resultString = '';

// py.stdout.on('data', function (stdData) {
//     resultString += stdData.toString();
    
// });
// py.stdout.on('end', function () {
//     let resultData = JSON.parse(resultString);
//     let persons = resultData['data'];
//     console.log(persons);
// });






























// const qrcode = require('qrcode-terminal');

// //request package
// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// // generate qr code
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// //when the qrcode is scanned
// client.on('ready', () => {

//     // get the data 
    


//     // try and get data using python
//     // --------------------------------
//     // const spawn = require('child_process').spawn;
//     // const pythonProcess = spawn('python',['server.py']);
    
//     // pythonProcess.stdout.on('data',(data) => {
//     //     var data = `${data}`
//     //     console.log(data);
//     // })
    







//     var persons = [
//                     ['John', 723116674, 'Hello, John!'],
//                     ['Tom', 723116674, 'Hello, Tom!'],
//                     ['Mary', 723116674, 'Hello, Mary!']
//                    ]

//     //function to run the bot
//     function send_text(persons) {
        
//         var person_count = persons.length
//         var i = 0
        
//         while (i < person_count) {
//             var name = persons[i][0]
//             var phone = persons[i][1]
//             var message = persons[i][2]

//             //code to send the message
//             const chatId = "254"+ phone+"@c.us";

//             // Sending message.
//             client.sendMessage(chatId, message);
//             console.log(`Sent to ${name}`);
//             i++;
//         }

//         var feed = 1
//         return feed

//     }
//     //run the bot function
//     var run = send_text(persons=persons)
//     console.log(run);











    
// });

// // And Done
// client.initialize();

// // var a = number.substring(1)












  















