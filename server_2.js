var prompt = require('prompt-sync')();
console.log("Fill the details bellow:");
var file_name = prompt("Enter File Name : ");
var name_col = parseInt(prompt("Enter Name Column No : "))
var phone_col = parseInt(prompt("Enter Phone Column No : "))
var message_col = parseInt(prompt("Enter Message Column No : "))
console.log(typeof(name_col));
if (file_name == "" || name_col == "" || phone_col == "" || message_col == ""){

	console.log("Error | Check your details and try again");

}
 else if (typeof(file_name) != "string" || typeof(name_col) != "number" || typeof(phone_col) != "number" || typeof(message_col) != "number") {

	console.log("Error | All  Column No's should be a number & File Name should be a csv file");

}
else{
	console.log("Success | Please wait");

	const { request } = require('http');
	const qrcode = require('qrcode-terminal');
	
	//request package
	const { Client } = require('whatsapp-web.js');
	const client = new Client();
	
	// generate qr code
	client.on('qr', qr => {
		qrcode.generate(qr, {small: true});
	});
	client.on('ready', () => {

		console.log("Go");
		
		//when the qrcode is scanned
		console.log("A message will be sent to all the contacts in the contact column\n press y to continue \n or \n press x to break");
		var continue_or_break = prompt("Enter : ");


		if (continue_or_break == "y"){

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
				console.log(resultData);
				let persons = resultData['data'];
				if (typeof(persons) != 'object'){
					console.log("Error | Check file name and try again");
				}
				
				else{
					console.log("hello world!");
		
					let resultData = JSON.parse(resultString);
					let persons = resultData['data'];
		
					var person_count = persons.length
					var i = 0
		
					while (i < person_count) {
						console.log("sending");
					
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
		
					console.log(" ## sending... ##");
					console.log(" ################");
				
				}
		
			});





		}else{

			console.log("press (Ctrl + c) Break ");
		
		}

	});

	client.initialize();

}




















































// py.stdout.on('end', function () {

//     let resultData = JSON.parse(resultString);

//     let sum = resultData['sum'];
//     console.log('Sum of array from Python process =', sum);

// });






// const spawn = require('child_process').spawn;

// // Initialise the data
// const data = {
// array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// }


// // We need to stringify the data as
// // python cannot directly read JSON
// // as command line argument.
// let stringifiedData = JSON.stringify(data);

// // Call the python process and pass the
// // data as command line argument.
// const py = spawn('python', ['server.py', stringifiedData]);



// resultString = '';

// // As the stdout data stream is chunked,
// // we need to concat all the chunks.
// py.stdout.on('data', function (stdData) {
// resultString += stdData.toString();
// });

// py.stdout.on('end', function () {

// // Parse the string as JSON when stdout
// // data stream ends
// let resultData = JSON.parse(resultString);

// let sum = resultData['sum'];
// console.log('Sum of array from Python process =', sum);

// });



























































//new code ###############################
// var data = JSON.parse(process.argv[2]);

// var array = data['array']

// console.log(JSON.stringify(array))


//new code ###############################
// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {

// 	console.log('Client is ready!');
	
// 	// Number where you want to send the message.
// 	const number = "+254723116674";

// 	// Your message.
// 	const text = "Hey patrick";

// 	// Getting chatId from the number.
// 	// we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// 	const chatId = number.substring(1) + "@c.us";

// 	// Sending message.
// 	client.sendMessage(chatId, text);
// 	console.log("Sent");

// });

// client.initialize();

















































































// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
// 	console.log('Client is ready!');
// 	const chatId = "254"+ "723116674"+"@c.us";
// 	client.sendMessage(chatId, "message");
// });

// client.initialize();













//     // get the data 
//     var persons = [
// 		['John', 723116674, 'Hello, John!'],
// 		['Tom', 723116674, 'Hello, Tom!'],
// 		['Mary', 723116674, 'Hello, Mary!']
// 	   ]
// function send_text(persons) {

// var person_count = persons.length
// var i = 0

// while (i < person_count) {
// var name = persons[i][0]
// var phone = persons[i][1]
// var message = persons[i][2]

// //code to send the message
// const chatId = "254"+ phone+"@c.us";

// // Sending message.
// client.sendMessage(chatId, message);
// console.log(`Sent to ${name}`);
// i++;
// }
// }
// var run = send_text(persons=persons)





























	// const spawn = require('child_process').spawn;
	// const data = "true"
	// let stringifiedData = JSON.stringify(data);
	// const py = spawn('python', ['server.py', stringifiedData]);

	// resultString = '';
	
	// py.stdout.on('data', function (stdData) {
	// 	resultString += stdData.toString();
	// });
	// py.stdout.on('end', function () {

	// 	let resultData = JSON.parse(resultString);
	// 	let persons = resultData['sum'];

	// 	var person_count = persons.length
    //     var i = 0
		
	// 	while (i < person_count) {
    //         var name = persons[i][0]
    //         var phone = persons[i][1]
    //         var message = persons[i][2]
	// 		console.log(name,phone,message);

	// 		//code to edit the phone numbers
	// 		const chatId = "254"+ phone+"@c.us";
	// 		// Sending message.
    //         // client.sendMessage(chatId, message);
    //         // console.log(`Sent to ${name}`);
	// 		i++;
	// 	}
	// 	console.log("Done");
	// });

















































// var persons = [
// 	['John', 723116674, 'Hello, John!'],
// 	['Tom', 723116674, 'Hello, Tom!'],
// 	['Mary', 723116674, 'Hello, Mary!']
//    ]




















// function send_text(persons) {
        
// 	var person_count = persons.length
// 	var i = 0
	
// 	while (i < person_count) {
// 		var name = persons[i][0]
// 		var phone = persons[i][1]
// 		var message = persons[i][2]

// 		//code to send the message
// 		const chatId = "254"+ phone+"@c.us";

// 		// Sending message.
// 		client.sendMessage(chatId, message);
// 		console.log(`Sent to ${name}`);
// 		i++;
// 	}

// 	var feed = 1
// 	return feed

// }

// var run = send_text(persons=persons)
// console.log(run);


























	// // Number where you want to send the message.
	// const number = "+254723116674";

	// // Your message.
	// const text = "Hey patrick";

	// // Getting chatId from the number.
	// // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
	// const chatId = number.substring(1) + "@c.us";
	// console.log(chatId);
	// // Sending message.
	// // client.sendMessage(chatId, text);
















