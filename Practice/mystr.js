//const  code = require('./random_str')

//  const randomStr=require('./random_str')
//import * as say from './random_str';
// import {randomeCode} from './random_str.js';


function randomeCode(str) {
    let randomString = "";
    for (let i = 0; i < str.length; i++) {
      randomString += str.charAt(Math.floor(Math.random() * str.length));
    }
   return randomString
  }; 
  
console.log("this is random string ");
let str = "ManJUnAtH@1234";
const res=randomeCode(str);
console.log(res);


/*
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
*/