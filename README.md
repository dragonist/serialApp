# serialApp
##Arduino Project

### 주제 선정 배경
```
arduino는 이탈리아어로 best friend
라는 의미이다.
그래서 내 best friend를 인형의 탈을 씌워 움직이는 생명체로 만들고 싶었다.
```

### 사용법
```
인형의 머리를 쓰다듬는다
인형의 왼손을 잡는다
인형의 왼발가락을 간지럼핀다
인형의 오른발가락에 코를 댄다
인형의 오른손목을 잡고 흔든다
인형의 입술에 입맞춘다
```

###필요한 부품
```
Xbee : 아두이노 무선 통신 모듈
mpr121 모듈 : 터치 인식 센서
아두이노 uno
9v 건전지
```

###동작 순서
```
인형에 전류가 흐르는 실이 끼워져 있다.
실을 만지면 손을 저항으로 인식한다
전류의 세기가 변한다
Xbee 가 전류의 세기를 보낸다. 
아두이노가 터치됬을때 않됐을때를 계산해서 node server 에 보낸다
node server 는 원하는 값만 client 에 준다
client 는 그에 맞는 메세지와 이미지를 보여준다.
```
###아두이노 연결
![image](https://raw.githubusercontent.com/dragonist/serialApp/master/ino/arduino.png)
