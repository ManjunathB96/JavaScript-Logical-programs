<<<<<<< HEAD
// //Object.assign(obj1,.....)
// //  1] merge two or more obj into single obj

// const obj1={a:1}
// const obj2={b:2}
// const obj3={c:3}

// const r1=Object.assign(obj1,obj2,obj3)
// console.log(r1);

// //  Object.assgin(target,sources.......)
// //2] properties in the target obj are overwritten(tagedu) by properties in the sorces if they have the same key
// //target obj danu key yenadru sorces obj yalli same edre adan tagedu sorces obj dagin value
// // add madataiti ellaandre target obj dag aa property ella andre addan add madataiti

// //target
// const obj = {

//     name: "ramu",
//     age: 20,
//   };

//   console.log(obj);  //{name: 'ramu', age: 20 }

//   let newObject = {id:1,name:'raju',age:28,sal:5000}; //source

//   const copy = Object.assign(obj,newObject);

//   console.log(obj);
//   console.log(copy);   //both target and souce objects will change and have same properties

//   /*
// { name: 'raju', age: 28, id: 1, sal: 5000 }
// { name: 'raju', age: 28, id: 1, sal: 5000 }
//   */




// //imp problem
// const obj = { name: "manju", age: 27, location: "Nepal" };

// const body = { name: "ramu", age: 12, location: "pal" };

// console.log(body.age); //manju
// // iterate through key-value pairs of object
// let isPresent = false;
// for (const [key, value] of Object.entries(obj)) {
//   console.log("inside");
//   console.log("manju------>",value);
//   if (value ===  body.age) {
//     isPresent = true;
//     break;
//   }
// }

// if (isPresent) {
//   console.log("manju present");
// }else{
//   console.log("manju absent");
// }


const num=12

const rupee1=num.toLocaleString('in',{style:'currency',currency:'INR'})
console.log(rupee1);
console.log("indian currency-----------------------------------------------------");
const rupee2=num.toLocaleString('en-IN',{style:'currency',currency:'INR'})

console.log(rupee2);

const doller=num.toLocaleString('en-US',{style:'currency',currency:'USD'})
console.log(doller);


const euros=num.toLocaleString('en-EU',{style:"currency",currency:"EUR"})
console.log(euros);



// create a new date object
const date = new Date();
console.log(date);    //2023-04-10T18:58:56.817Z

console.log("***************************");

let date2 = new Date();
console.log(date2.toString());   //Tue Apr 11 2023 00:28:56 GMT+0530 (India Standard Time)
 
console.log("***************************");

// convert the date using ind locale formatting convention 
let dateStr = date2.toLocaleString("en-IN");  //       11/4/2023, 12:28:56 am
console.log(dateStr); 

=======
// //Object.assign(obj1,.....)
// //  1] merge two or more obj into single obj

// const obj1={a:1}
// const obj2={b:2}
// const obj3={c:3}

// const r1=Object.assign(obj1,obj2,obj3)
// console.log(r1);

// //  Object.assgin(target,sources.......)
// //2] properties in the target obj are overwritten(tagedu) by properties in the sorces if they have the same key
// //target obj danu key yenadru sorces obj yalli same edre adan tagedu sorces obj dagin value
// // add madataiti ellaandre target obj dag aa property ella andre addan add madataiti

// //target
// const obj = {

//     name: "ramu",
//     age: 20,
//   };

//   console.log(obj);  //{name: 'ramu', age: 20 }

//   let newObject = {id:1,name:'raju',age:28,sal:5000}; //source

//   const copy = Object.assign(obj,newObject);

//   console.log(obj);
//   console.log(copy);   //both target and souce objects will change and have same properties

//   /*
// { name: 'raju', age: 28, id: 1, sal: 5000 }
// { name: 'raju', age: 28, id: 1, sal: 5000 }
//   */




// //imp problem
// const obj = { name: "manju", age: 27, location: "Nepal" };

// const body = { name: "ramu", age: 12, location: "pal" };

// console.log(body.age); //manju
// // iterate through key-value pairs of object
// let isPresent = false;
// for (const [key, value] of Object.entries(obj)) {
//   console.log("inside");
//   console.log("manju------>",value);
//   if (value ===  body.age) {
//     isPresent = true;
//     break;
//   }
// }

// if (isPresent) {
//   console.log("manju present");
// }else{
//   console.log("manju absent");
// }


const num=12

const rupee1=num.toLocaleString('in',{style:'currency',currency:'INR'})
console.log(rupee1);
console.log("indian currency-----------------------------------------------------");
const rupee2=num.toLocaleString('en-IN',{style:'currency',currency:'INR'})

console.log(rupee2);

const doller=num.toLocaleString('en-US',{style:'currency',currency:'USD'})
console.log(doller);


const euros=num.toLocaleString('en-EU',{style:"currency",currency:"EUR"})
console.log(euros);



// create a new date object
const date = new Date();
console.log(date);    //2023-04-10T18:58:56.817Z

console.log("***************************");

let date2 = new Date();
console.log(date2.toString());   //Tue Apr 11 2023 00:28:56 GMT+0530 (India Standard Time)
 
console.log("***************************");

// convert the date using ind locale formatting convention 
let dateStr = date2.toLocaleString("en-IN");  //       11/4/2023, 12:28:56 am
console.log(dateStr); 

>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
