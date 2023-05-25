<<<<<<< HEAD
/*
var   : it has function scope , it can be upadated and redeclared,  it is hoiisted and initialized undefined
*/

//1
function myFn() {
    var num=10
    console.log("num====",num);
}
myFn()
//console.log(num);       //ReferenceError: num is not defined

//2
var x=10
x=20
var x=200
console.log(x);

//3

console.log(name); //undefined
var name="Manju"


/*
let  : blockscope, it can be upated but not re-declared, it is hoisted but not initialized

const  : block scope, it can not be updated or re-declared, it can be hoisted but not be initialized
*/

//1
function show() {
    if (true) {
      let name="Ramu"
      const id=101  
    }
   // console.log(name);
   // console.log(id);  //ReferenceError: id is not defined
}
show() 




//2
let z=10
z=20
//let z=200               //SyntaxError: Identifier 'z' has already been declared
console.log(z);


const y=10
//y=20           //TypeError: Assignment to constant variable.
console.log(y);



//*******  3 */
//console.log(myName);  //ReferenceError: Cannot access 'myName' before initialization
let myName="manju"

//console.log(lastName); // ReferenceError: Cannot access 'lastName' before initialization
=======
/*
var   : it has function scope , it can be upadated and redeclared,  it is hoiisted and initialized undefined
*/

//1
function myFn() {
    var num=10
    console.log("num====",num);
}
myFn()
//console.log(num);       //ReferenceError: num is not defined

//2
var x=10
x=20
var x=200
console.log(x);

//3

console.log(name); //undefined
var name="Manju"


/*
let  : blockscope, it can be upated but not re-declared, it is hoisted but not initialized

const  : block scope, it can not be updated or re-declared, it can be hoisted but not be initialized
*/

//1
function show() {
    if (true) {
      let name="Ramu"
      const id=101  
    }
   // console.log(name);
   // console.log(id);  //ReferenceError: id is not defined
}
show() 




//2
let z=10
z=20
//let z=200               //SyntaxError: Identifier 'z' has already been declared
console.log(z);


const y=10
//y=20           //TypeError: Assignment to constant variable.
console.log(y);



//*******  3 */
//console.log(myName);  //ReferenceError: Cannot access 'myName' before initialization
let myName="manju"

//console.log(lastName); // ReferenceError: Cannot access 'lastName' before initialization
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
let lastName="belagavi"