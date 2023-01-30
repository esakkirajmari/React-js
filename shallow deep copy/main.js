// shallow copy:
let array=[10,20,30,40];
let array1=array;

array1[0]=50;

console.log(array);
console.log(array1);

// deepcopy:

// method.1

var stud={
    name:"esakki",
    age:"23",
    mark:{
        mark1:70,
        mark2:60
    }
};
 
var stud2=Object.assign({},stud);
stud2.age=50;
console.log(stud);
console.log(stud2);


// method:2

let arr=[11,12,13,14];
let arr1=[...arr];

// spread method

arr1[3]=50;
console.log(arr);
console.log(arr1);

//method:3

let arr2=[1,2,5,10,22];
let arr3=JSON.parse(JSON.stringify(arr2));
arr3[2]=50;
console.log(arr2);
console.log(arr3);

