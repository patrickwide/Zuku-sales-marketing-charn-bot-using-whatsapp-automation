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
	const fs = require('fs');

	const { request } = require('http');
	const qrcode = require('qrcode-terminal');
	
	//request package
	const { Client } = require('whatsapp-web.js');
	
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
	});

	// // generate qr code
	// client.on('qr', qr => {
	// 	qrcode.generate(qr, {small: true});
	// });

	client.on('ready', async () => {

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
				
				let persons = resultData['data'];
				if (typeof(persons) != 'object'){
					console.log("Error | Check file name and try again");
				}
				
				else {
					function sleep(ms) {
					return new Promise(resolve => setTimeout(resolve, ms));
					}

					async function run() {

						let resultData = JSON.parse(resultString);
						let persons = resultData['data'];

						var x = 0
						for (let i = 0; i < persons.length; i++){
							
							
							var name = persons[i][name_col]
							var phone = persons[i][phone_col]
							var message = persons[i][message_col]
							
							const chatId = "254" + phone + "@c.us";
							// Sending message.
							client.sendMessage(chatId, message);
							console.log(i);

							if (x === 10) {

								console.log('sleeping');
								await sleep(10000);
								x = 0

							}

							x++;
						}
	
						console.log(" ## sending... ##");
						console.log(" ################");

					};

					run()


						


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



