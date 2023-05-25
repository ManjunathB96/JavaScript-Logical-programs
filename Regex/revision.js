// const animals = ["🐈", "🐎", "🦢", "🐎", "🦜", "🐈"];

// let counts = {};

// for (const item of animals) {
//     if (counts[item]) {
//         counts[item]++
//     } else {
//          counts[item]=1
//     }
// }
// console.log(counts);

// const company=[
//     {name:'Google'},
//     {name:'Apple'},
//     {name:'Tata'},
//     {name:'Infosys'},
//     {name:'Toyota'}
// ]

// console.table(company)

// console.group('new group');
// console.log('item1');
// console.log('item2');
// console.log('item3');
// console.log('item4');
// console.log('item5');
// console.groupEnd;

// //merge two array

// const arr1=[1,2,3]
// const arr2=[4,5,6]

// //concat
// const r1=arr1.concat(arr2)
// console.log(r1);

// //spread operator
// const r2=[...arr1,...arr2]
// console.log(r2);

// //flat
// const arr3=[arr1,arr2]
// console.log(arr3.flat(1));

//reverse ,sort and splice method mutate the original array
// const arr = [1, 5, 4, 2, 3, 6];
// console.log(arr.reverse());
// console.log(arr);
// console.log(arr.sort());
// console.log(arr);
// console.log(arr.splice(1, 3));
// console.log(arr);

//swap two value using XOR

// let val1 = 15;
// let val2 = 25;

// val1 = val1 ^ val2;
// val2 = val1 ^ val2;
// val1 = val1 ^ val2;

// console.log(`val1 ==>${val1} and val2 ==>${val2}`);

//how to check if two array are equal or not
// const cars1 = ["Tata", "Volvo", "Toyota", "Baleno", "Fiat"];
// const cars2 = ["Tata", "Infosys", "Toyota", "Baleno", "Fiat"];
// const cars3 = ["Tata", "Volvo", "Toyota", "Baleno", "Fiat"];

// function areArrayEqual(arr1, arr2) {
//   return JSON.stringify(arr1) == JSON.stringify(arr2);
// }

// console.log(areArrayEqual(cars1, cars2));
// console.log(areArrayEqual(cars1, cars3));

//How to access the object properties

// const brucelee = {
//   name: "Bruce",
//   surname: "Lee",
//   born: "1940",
//   spouse: "linda",
//   children: ["Brandom", "Shannon"],
//   parents: {
//     father: "Lee Hoi",
//     mother: "Grace Ho",
//   },
//   height: 173,
// };

// //console.log(brucelee);
// console.log(brucelee.born);
// const arr = brucelee.children;
// console.log(arr);
// const innerObj = brucelee.parents;
// console.log(innerObj);

// //Class instantiation meaning :generating an object from a class is called class instantiation

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const manju=new person("Manju",28)
// const banu=new person("Banu",20)
// const tanu=new person("Tanu",35)

// //storing value inside an array
// var readLine=require('readline-sync')

// let numArr=[]
// let len=readLine.question("Enter the length of an array ==>")
// for (let i = 0; i <len; i++) {
//  numArr[i]=readLine.question("Enter array elements due u want to store==>")
// }
// console.log(numArr);
// const sub=numArr.reduce((acc,currVal)=>{
//     return acc-currVal      //string coercion  when we use -ve it will convert str num to num and then substraction takeplace
// })
// console.log(sub);
// const add=numArr.reduce((acc,currVal)=>{
//     return Number(acc)+Number(currVal)    //here it will not convert we need to convert string num to number using Number function
// })
// console.log(add);
// const addtion=numArr.reduce((acc,currVal)=>{
//     return parseInt(acc)+parseInt(currVal)    //here it will not convert we need to convert string num to number
// })
// console.log(addtion);

//intersection of two array

const arr1 = [1, 2, 3, 4, 8];
const arr2 = [2, 3, 4,5,9];

function intersectionOfTwoarr(arr1, arr2) {
  const arr = arr1.filter((ele) => arr2.includes(ele));
  console.log(arr);
//   const set = new Set(arr);
//   console.log(set);
}

intersectionOfTwoarr(arr1, arr2);
