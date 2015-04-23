module.exports = function(http) {
    //1 입
    //2 머리
    //3 손1
    //4 손2
    //5 발1
    //6 발2

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
            console.log('data received: ' + data);
            io.emit('chat message', data);
            
            switch (data) {
                case '1':
                    io.emit('chat message', '나에게 입을 맞추다니! 난 사랑받는 곰이네요');
                    break;
                case '2':
                    io.emit('chat message', '머리 쓰담쓰담 해줘서 기분이 좋아졌어요');
                    break;
                case '3':
                    io.emit('chat message', '나랑 손잡고 밖에 놀러가요~~');
                    break;
                case '4':
                    io.emit('chat message', '수업들으러 같이 갈래요?');
                    break;
                case '5':
                    io.emit('chat message', '나 발냄새 난다구요 만자지 마요');
                    break;
                case '6':
                    io.emit('chat message', '아이쿠 간지러워요');
                    break;
                default:
            }
        });


    });
}