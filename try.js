const spawn = require('child_process').spawn;
const pythonProcess = spawn('python',['try.py']);

pythonProcess.stdout.on('data',(data) => {
    var data = `${data}`
    console.log(data);
});
