console.log("hiiiiii");
// var is variable declaration 
var a=5;
console.log(a);

var b;
console.log(b)

//var vs let vs const

// var can be redeclare
var c=5
 var c =10
console.log(c);

// let can not be redeclare but reasign
let d=5
d =15
console.log(d);


//const can be fix 
const e =20;
console.log(e);

// = sign to asign value
console.log(a=5);
// == sign is use for compare value
console.log(6=="6");
console.log(6=="7");

//=== sign is use for compare data types and value both 
console.log("7"==="7");
console.log(7==="7");

// undefined vs null 
// null is neither declare nor assigned
//undefined is declare only but not assigned

let x =100
let to=x==100
console.log(to);

let username="Anjali"
let lastname="patel"
console.log(username,lastname);
console.log(username+"     "+lastname);
console.log(username+lastname);
console.log(`${username}       ${lastname}`);

// let u=true
// if(u){
//     console.log("hello");
    
// }else{
//     console.log("hiii");
    
// }

// let w=5
// if(w=true){
//     console.log("hello");
    
// }else{
//     console.log("hiii");
    
// }

//ternary operaor
let y=false
y?console.log("hiii"):console.log("byeee");

