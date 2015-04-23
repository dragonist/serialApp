module.exports = function(http) {

    var SerialPort = require("serialport")
    var serialPort = new SerialPort.SerialPort("/dev/tty.usbserial-A601LQZY", {
        baudrate: 9600,
        parser: SerialPort.parsers.readline('\n')
    });

    serialPort.on('open', function() {
        console.log("serial port connected");
    });

    var io = require('socket.io')(http);
    io.on('connection', function(socket) {
        console.log('a user connected');

        socket.on('chat message', function(msg) {
            console.log('message: ' + msg);
            io.emit('chat message', msg +"이게 무슨 말인지 모르겠어요  (from 포비)");
        });

        serialPort.on('data', function(data) {
            var num = data*1;
            console.log('data received: ' +num);
            // io.emit('chat message', num);

            switch (num) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    io.emit('chat message', num);
                    break;
                default:
            }
        });


    });
}