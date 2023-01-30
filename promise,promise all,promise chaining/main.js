                // promise
const person=true;
const p=new Promise((resolve,reject)=>{
    if (person){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})
p.then((message)=>{
    console.log("Then " +message);
}).catch((message)=>{
    console.log("Catch " +message);
})

                //promise all

const p1=new Promise((resolve,reject)=>{
    resolve(10);
});

const p2=new Promise((resolve,reject)=>{
    resolve(20);
});

const p3=new Promise((resolve,reject)=>{
    resolve(30);
});

const p4=new Promise((resolve,reject)=>{
    reject(null);
});

Promise.all([p1,p2,p3,p4]).then((values)=>{
    const total=values.reduce((a,b)=>{
        return a+b;
    }); 
    console.log(`Total =${total}`);
}).catch((value)=>{
      console.log(`one of the promise gets rejected (value) = ${value}`);
});


            //  Promise Chaining

function main1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success1");
            // reject("error1");
        },3000);
    });
}

function main2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success2");
            // reject("error2");
        },3000);
    });
}

function main3(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success3");
            // reject("error3");
        },3000);
    });
}

main1()
.then(function(res){
    console.log(res);
main2()
 .then(function(res){
     console.log(res);
main3()
     .then(function(res){
        console.log(res);
}).catch(function(err){
     console.log(err);
})
}).catch(function(err){
    console.log(err);
})
}).catch(function(err){
    console.log(err);
})