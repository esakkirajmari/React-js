        // Callback function 
//  function f(num1,num2,Callback){
//     var result=num1+num2;
//     Callback(result);
//  }
//  function showresult(r){
//     console.log("RESULT=" +r);
//  }
// f(10,20,showresult)

 //  Callback hell:
function s(num1,num2){
   return num1*num2;
}
function u(Callback,num1,num2){
   return Callback(num1,num2);
}
console.log(u(s,10,20));



