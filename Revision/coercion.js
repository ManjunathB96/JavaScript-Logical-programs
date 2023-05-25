<<<<<<< HEAD
//string corcion

let x=10                             //number to string
let y='10'    
console.log(x+y);  //1010

let a=10
let b='5'                  //string to number     
console.log(a-b);  //5




//equality coercion

let p=20
let q='20'

const r=p==q    //both p and q is converted into same type and then camapred
console.log(r);  //true

console.log(typeof r);   //boolean

console.log(p===q);  //false


console.log(typeof NaN);  //number

//IIFE  -- it runs as soon it is defined
(function () {
    console.log("Hii");
=======
//string corcion

let x=10                             //number to string
let y='10'    
console.log(x+y);  //1010

let a=10
let b='5'                  //string to number     
console.log(a-b);  //5




//equality coercion

let p=20
let q='20'

const r=p==q    //both p and q is converted into same type and then camapred
console.log(r);  //true

console.log(typeof r);   //boolean

console.log(p===q);  //false


console.log(typeof NaN);  //number

//IIFE  -- it runs as soon it is defined
(function () {
    console.log("Hii");
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
})();