const spawn = require('child_process').spawn;

// Initialise the data
const data = {
array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

// We need to stringify the data as
// python cannot directly read JSON
// as command line argument.
let stringifiedData = JSON.stringify(data);

//send #########################

// Call the python process and pass the
// data as command line argument.
const py = spawn('python', ['try_2.py', stringifiedData]);

//receive ######################

resultString = '';

// As the stdout data stream is chunked,
// we need to concat all the chunks.
py.stdout.on('data', function (stdData) {
resultString += stdData.toString();
});

py.stdout.on('end', function () {

// Parse the string as JSON when stdout
// data stream ends
let resultData = JSON.parse(resultString);

let sum = resultData['sum'];
console.log('Sum of array from Python process =', sum);
});















// // thist is the function that makes us call this file

// function sum(data_1,data_2){

//     sum = parseInt(data_1) + parseInt(data_2)

//     return sum

// }


// var data_1 = process.argv[2]
// var data_2 = process.argv[3]
// var sum = sum(data_1,data_2);
// // var sum = parseInt(data_1) + parseInt(data_2)
// console.log(sum);



// Function to calculate sum of array
function arraysum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
        continue;
        }
        sum += arr[i];
    }
    return sum;
    }
    
    // Get the command line arguments and
    // parse it to json
    var data = JSON.parse(process.argv[2]);
    
    // Get the required field form the data.
    array = data['array'];
    
    // Calculate the result.
    var sum = arraysum(array);
    
    // Print the data in stringified json
    // format so that we can easily parse
    // it in Python
    const newData = { sum }
    console.log(JSON.stringify(newData));
