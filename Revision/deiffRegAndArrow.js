/***************************************************
regular : duplicate named arguments allowed but not in strict mode

arrow: dup named args not allowed
*/
//'use strict'     //SyntaxError: Duplicate parameter name not allowed in this context
function printNum(a, a, a) {
  console.log(a);
}
printNum(1, 2, 3); // 3

// let printDetails=(a,a,a)=>{
//     console.log(a);
// }
//printDetails(1,2,3)  //SyntaxError: Duplicate parameter name not allowed in this context



/********************************************************* 
regular : regular function has it's own 'this' binding

arrow : arrow function does not have 'this' binding
*/
let user1 = {
  name: "Manju",
  getName: function () {
    return this.name;
  },
};
console.log(user1.getName()); //Manju

let user2 = {
  name: "Rohan",
  getName: () => {
    return this.name;
  },
};
console.log(user2.getName()); //undefined


/* *********************************************************************************************************
regular : arguments object is available

arrow : arguments object NOT is available
*/
let show=function(){
    console.log(...arguments);   //1 2 3
}
show(1,2,3)

// let display=()=>{
//     console.log(...arguments);   ///error
// }
// display(1,2,3)


/*
regular : it can be invoked with 'new' keyword

arrow :it CAN NOT bo invoked with 'new'  Keyword
*/
let sayHello=function () {
    console.log("Hello Manjunath");
}
let result =new sayHello()
result


let greet= () => {
    console.log("Hello Manjunath");
}
let result1 =new greet()   //TypeError: greet is not a constructor
result1