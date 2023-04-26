/*
reduce() => this mtd executes reducer function on each ele of the arraay and return single output value
*/

//converting arr str into single string
const strArr = ["Manjunath", "Sadashiv", "Belagavi"];

const result1 = strArr.reduce((acc, currVal) => {
  return acc + " " + currVal;
});
console.log(result1); //Manjunath Sadashiv Belagavi

//calculate sum of array ele

const num = [5, 2, 4, 6, 1, 3];

const sum = num.reduce((acc, currVal) => {
  return acc + currVal;
});
console.log(sum); //21

//substraction  in array  first val  - remaing array eles

const arr = [10, 2, 3, 1];

const substaction = arr.reduce((acc, currVal) => {
  return acc - currVal;
});
console.log(substaction);

//remove duplicates from array

//Note : indexOf()  mtd returns the first index of occurence of an array ele  or -1 if it is not found
const dupArr = ["Manju", "Rohit", "annu", "Rohit", "Manju"];

const unique = dupArr.reduce((acc, currVal) => {

  if (acc.indexOf(currVal) === -1) {    //   -1 if it is not found 
    acc.push(currVal);
  }
 
  return acc;
}, []);

console.log(unique);

/*
acc------> []
currval------> Manju
result---- [ 'Manju' ]


acc------> [ 'Manju' ]
currval------> Rohit
result---- [ 'Manju', 'Rohit' ]


acc------> [ 'Manju', 'Rohit' ]
currval------> annu
result---- [ 'Manju', 'Rohit', 'annu' ]


acc------> [ 'Manju', 'Rohit', 'annu' ]
currval------> Rohit
result---- [ 'Manju', 'Rohit', 'annu' ]


acc------> [ 'Manju', 'Rohit', 'annu' ]
currval------> Manju
result---- [ 'Manju', 'Rohit', 'annu' ]


[ 'Manju', 'Rohit', 'annu' ]
*/

//gruping objects by a property

let people = [
  { name: "raj", age: 25 },
  { name: "manju", age: 22 },
  { name: "kumar", age: 25 },
  { name: "annu", age: 35 },
  { name: "banu", age: 25 },
  { name: "banu", age: 22 },
  { name: "banu", age: 35 },
];

function gropuBy(pObj, property) {
  return pObj.reduce(function (acc, currObj) {
    let key = currObj[property];
    console.log('key---->',key);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(currObj);

    console.log("accc----->",acc);
    return acc;
  },{});
}

let res=gropuBy(people,"age")
console.log(res);

/*
{
  '22': [ { name: 'manju', age: 22 }, { name: 'banu', age: 22 } ],
  '25': [
    { name: 'raj', age: 25 },
    { name: 'kumar', age: 25 },
    { name: 'banu', age: 25 }
  ],
  '35': [ { name: 'annu', age: 35 }, { name: 'banu', age: 35 } ]
}
*/