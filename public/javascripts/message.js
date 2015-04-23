// var socket = io();

var elImgs = document.querySelectorAll('#imgs img');
var elImg = elImgs[0];
var messagesStorage = ['나를 데리고 놀아줘요 뿌잉뿌잉',
              '나에게 입을 맞추다니! 난 사랑받는 곰이네요',
              '머리 쓰담쓰담 해줘서 기분이 좋아졌어요',
              '나랑 손잡고 밖에 놀러가요~~',
              '수업들으러 같이 갈래요?',
              '나 발냄새 난다구요 만자지 마요',
              '아이쿠 간지러워요']

// $('form').submit(function() {
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
// });

// socket.on('chat message', function(num) {
//     getMsg(num);
//     getImg(num);
// });

function getMsg(num) {
    var msg = messagesStorage[num];
    console.log("msg", msg);
    $('#message').html(msg);
}

function getImg(num) {
    elImg.classList.remove('action');
    elImg = elImgs[num];
    elImg.classList.add('action');
}

window.addEventListener("load", function() {
    getMsg(0);
    getImg(0);
});