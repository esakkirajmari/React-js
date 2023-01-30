var newArr =[1,2,3,4].map(function(val,index){
    return val * 2;
});
console.log("newArr", newArr);


var fil =[1,2,3,4].filter(function(val,index){
    return val > 2;
});
console.log("fil", fil);


var ever =[1,2,3,4].every(function(val,index){
    return val > 1;
});
console.log("ever", ever);


var somee =[1,2,3,4].some(function(val,index){
    return val > 0;
});
console.log("somee", somee);


var findd =[1,2,3,4].find(function(val,index){
    return val > 0;
});
console.log("findd", findd);


const m=[34,4,65,12,78] 
let n=m.reduce((acc,value)=> { return acc + value; });
 console.log(n);

 const array1=['a','b','c',1,2,3];
 array1.forEach(element=>console.log(element));