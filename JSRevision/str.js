
//*********convert str to num
let a = "13";
console.log(typeof a);

a = +13;
console.log(Number(a));
console.log(typeof a);

//*************substring
const str = "Hello Manjunath ll S Belagavi ll";
const sub = "o";

//exists where
console.log(str.indexOf(sub));
//exists or not
console.log(str.includes(sub));
//substring exists how many times //find the frequency or count of char in string
console.log(str.split(sub).length - 1);

//count char inside  str array
const myArr = ["manju", "ramu", "banu", "tanu"];
const freq = myArr.join("").split("u").length - 1;
console.log(" freq:", freq);