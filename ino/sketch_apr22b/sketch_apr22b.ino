// Pin 13 has an LED connected on most Arduino boards. // give it a name:
int led1 = 9;
int led2 = 13;
// the setup routine runs once when you press reset: 
void setup() {
	Serial.begin(9600);
	// initialize the digital pin as an output.
	pinMode(led1, OUTPUT);  
	pinMode(led2, OUTPUT);
}

void loop() {
	int incomingValue = 0; // 보낸값을 저장하기 위한 변수 선언
	if ( Serial.available() > 0 ) { 
		// 뭔가 입력값이 있다면 
		incomingValue = Serial.read(); 
		Serial.write(incomingValue);
	}

	if(incomingValue == 49){
	    digitalWrite(led1, HIGH);
	}
	if(incomingValue == 48){
	    digitalWrite(led1, LOW);
	}
	if(incomingValue == 51){
	    digitalWrite(led2, HIGH);
	}
	if(incomingValue == 50){
	    digitalWrite(led2, LOW);
	}
}
