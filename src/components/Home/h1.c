int main(void){
 DDRA=0xf0;
 DDRC=0x03;
 while(1){
 if(!PINA) PORTC=0; 
 else if((PINA&0x01)==(PINA&0x02))PORTC=0; 
 
 else if((PINA&0x01)&&(PINA&0x08))PORTC=0;
 else if((PINA&0x02)&&(PINA&0x04))PORTC=0;
 else if(PINA&0x01)PORTC=0x02; 
 else if(PINA&0x02) PORTC=0x01;
 }
 return 0;