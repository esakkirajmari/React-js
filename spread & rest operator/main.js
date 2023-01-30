var spred=[10,20,30,40,50];
 var spred1=[...spred];
 spred1[0]=100;
 console.log(spred);
 console.log(spred1);

 var spred3=[20,40,60,80,100];
 var spred4=[30,60,90,120,150];
 var spred5=[...spred3,...spred4];
 console.log(spred5);

 //rest
 function main3(...a){
    console.log(a)
 };