


module.exports = function(http) {

var SerialPort = require("serialport")
var serialPort = new SerialPort.SerialPort("/dev/tty.usbserial-A601LQZY", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\n')
});

serialPort.on('open', function () {
  console.log("serial port connected");
});




var io = require('socket.io')(http);
    io.on('connection', function(socket) {
        console.log('a user connected');
        
        socket.on('chat message', function(msg) {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });

        serialPort.on('data', function (data) {
          console.log('data received: '+ data);
          io.emit('chat message', data);
        });

        
    });        
}

