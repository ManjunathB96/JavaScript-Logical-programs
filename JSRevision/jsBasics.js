/*

npm i -g express-api-cli  ==> install the express globally in our computer

exp-api create projectName  ==> cretae new project



npm i bcrypt     ==>bcrypt lib help us to hash password 

npm i jsonwebtoken  ===>help us to generate token  in authorization 🗝 of user

npm i googleapi nodemailer  ===>sending mail


//command to run test::  npm run test
npm i --save-dev mocha chai supertest superagent   ==>tesing 
npm i nyc --save-dev     //instanbul/nyc is a code coverage tool which works well with mocha

npm i swagger-ui-express  ==> API documentation

npm i redis       ==> redis is open source in-memory  key-value pair  data str used as storage for database cache message broker and streaming engine


npm install --save amqplib   ==>rabbitmq  message broker


npm install express multer   ==> this lib help us in file uploading
npm install path
*/
/*

datatype :datatype specify the type of values that are stored in variables

variable : name of memory location where we store the values

types of datatypes
1)primitive datatypes : 1] store only single value   2] does not have inbuilt mtd
2)non-primitive datatypes : 1] store multiple values    2] have inbuilt mtd


they are 7 datatypes in javascript

String ==>sequence of characters written with single quote or double quotes

Number 

BigInt

Boolean

null  ==>represents non existence or invalid value

undefined ==> when variable is declzared but not assigned

symbol ==> symbol  is a new Datatype intr in ES6
       ==> symbol represents a unique identifier.  symbols are immutable(can not changed) and are unique
*/
// /*
// Hoisting
// irrespective of where the var and fun declared they moved on the top of the scope
// the scope can be both local and global

// 1) var initialization are not hoisted only variable declaration are hoisted
// 2) to avoid hoisting are use 'use strict' on the top of the code
// 3) fun exp and class is not hoisted
// */

////var
num=20
console.log("Output ===> num:", num);
var num

var num1
console.log("Output ===> num1:", num1);
num1=56

myFun()
function myFun() {
    console.log("Hello manjunath");
}

function hoistFun() {
    x=10
    console.log("Output ===> hoistFun ===> x:", x);
    var x
}
hoistFun()
console.log(x);

////let
 n=10
console.log("Output ===> n:", n);
let n

//  ==  check the content   |||||     ===  check both content and datatype
/*
Both are comparison operation
*/

let p = 15;
let q = "15";
console.log(p == q);
console.log(p === q);



//*********JS abstract and strick equality */
//abstract(loose) equality
console.log(1 == "1");
console.log(null == undefined);
console.log(0 == false);

//strict equality
console.log(1 === "1");
console.log(null === undefined);
console.log(0 === false);

let surname = null;
if (surname == undefined) {
  console.log(surname);
}

let playerName;
if (playerName == null) {
  console.log(playerName);
}



// var 1] var has a function scope 2] it can be updated or declared
// let 1] let has a block scope 2] it can be updated but not declared
//const 1] const has a block scope 2] it can be can't updated but not declared

function fun() {
  if ([]) {
    var x = 10;

    let y = 20;
    

    const z = 30;
   
  }
  console.log("Output ===> fun ===> x:", x);
  console.log("Output ===> fun ===> y:", y);
  console.log("Output ===> fun ===> z:", z);
}
fun()
console.log("Output ===> fun ===> x:", x);
console.log("Output ===> fun ===> y:", y);
console.log("Output ===> fun ===> z:", z);

//isNaN()  ==> fun converts the given value to a num type and then equates

const str1="Manju"
console.log(isNaN(str1));

const str2=123
console.log(isNaN(str2));

const str3=undefined
console.log(isNaN(str3));

//***** Functions in Javascript */
function fun1() {
    console.log('Regular fun');
}

const expFun=function() {  //Anonymous fun
    console.log("function expression");
}

const arrowFun=()=>{
    console.log("Arrow function");
}

((a)=>{
    console.log(a);
    console.log("IIFE Fun");
})(10)

function higherOrderFun(fun1) {
    console.log('Higher order function');
    fun1()
    return function () {
        console.log('I am also Higher order fun bcz it returning fun');
    }
}
const result1=higherOrderFun(fun1)
result1();



//when we need to use arrow fun

/*
arrow fun we should not use in
1)constructor
2)Object methods
3)event handlers
4)prototypes

*/
class DelayLogger {
       constructor() {
         this.message = "Hello World";
       }
       log() {
         setTimeout(function () {
           //() => {
           //function(){
           console.log(this.message);
         }, 1000);
       }
     }
     const logger = new DelayLogger();
     logger.log();
////**************** this keyword */

////this keyword refers to object

////implicit binding
const myObj = {
  name: "Manju",
  age: 28,
  detials: function () {
    console.log(`${this.name} and ${this.age}`);
  },
  innerObj: {
    city: "Belagavi",
    detials: function () {
      console.log(`${this.name} and ${this.age}`);
    },
  },
};

myObj.detials();

myObj.innerObj.detials();

//// ********  explicit binding
//// call() - call mtd invoke the fun by specifying the owner obj
//// apply() -similar to call
//// bind()- bind creates a copy of a fun with a new value to the this present inside a calling fun
const user={
    firstName:'Tanushree',
    lastName:'Belagavi',

}
const printdetails=function (state,country) {
    console.log(`fullName ${this.firstName} ${this.lastName}`);
    console.log("state : "+state+", country : "+country);
}

//printdetails.call(user,'Karnataka','India')

// printdetails.apply(user,['Karnataka','India'])

const clone=printdetails.bind(user,'Karnataka','India')
clone()

//******* Currying */
/*currying is an adv tech to transform/convert more args fun to lesser args fun
Uses:
1] it can be used to trigger event listeners
2] currying help us to avoid passing the same variable again and again
3] it help us to create a higher order function
*/
function sendRequest(greet) {
  return function (name) {
    return function (msg) {
      return `${greet} ${name} ,${msg}`;
    };
  };
}

const result3 = sendRequest("Hello")("Manju")("How are you");
console.log("Output ===> result:", result3);

/**ES6 feature */
const request = (greet) => (name) => (msg) => `${greet} ${name} ,${msg}`;
const result4 = sendRequest("Hey")("Banu")("How can I help you");
console.log("Output ===> result:", result4);

const sum = (a) => (b) => (c) => `${a + b + c}`;
console.log(sum(1)(2)(3));


//**  Closure  */
//closure is the ability of a function to store a variable for further refernce even after it is executed

const add=function (a,b) {
    const c=5
    return {
        getAddtwo:function () {
            return a+b
        },
        getAddThree:function () {
            return a+b+c
        }
    }
}

const closure=add(2,3)
console.log(closure.getAddtwo());
console.log(closure.getAddThree());



const square=function (a) {
    return function () {
        return  a**a
    }
}

const r=square(2)
console.log("Output ===> r:", r());


let count = 0;
const counter = () => {
  return count++;
};
console.log(counter());
console.log(counter());
console.log(counter());


const makeCounter=()=>{
    let count=0
    return ()=>{
        return count++
    }
}
const  counter1=makeCounter()
console.log("Output ===> counter1:", counter1());
const  counter2=makeCounter()
console.log("Output ===> counter2:", counter2());


