// setTimeout
setTimeout(function (){
    console.log("esakki");

},10000);

// setInterval
const myInterval =setInterval(startTime,5000);

function startTime(){
    console.log("raj");
}

function stopInterval(){
    clearInterval(myInterval)
}