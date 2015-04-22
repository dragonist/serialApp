var express = require('express');
var router = express.Router();

var led1Status = false;
var led2Status = false; 
var msg1data = "";
var msg2data = "";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJs + Arduino', msg1: msg1data, msg2: msg2data });
});

router.post('/1', function(req, res) {
  led1Status = led1Status ? false : true;
  console.log(led1Status);
  if (led1Status) {
  	msg1data = "LED1 turned on";
  } else {
  	msg1data = "LED1 turned off";
  }
  res.render('index', {title: 'NodeJs + Arduino', msg1: msg1data, msg2: msg2data});
});

router.post('/2', function(req, res) {
  led2Status = led2Status ? false : true;
  console.log(led2Status);
  if (led2Status) {
  	msg2data = "LED2 turned on";
  } else {
  	msg2data = "LED2 turned off";
  }
  res.render('index', {title: 'NodeJs + Arduino', msg1: msg1data, msg2: msg2data });
});


var SerialPort = require("serialport")

// Arduino가 /dev/tty-usbserial1 에 연결되었다고 가정합니다.
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodem1421", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\n')
});

serialPort.on('open', function () {
  console.log("serial port connected");
});

serialPort.on('data', function (data) {
  console.log('data received: '+ data);
});


module.exports = router;
