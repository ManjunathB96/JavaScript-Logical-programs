// Concatenate Variable Number of Input Arrays Create a function that concatenates n input arrays, where n is variable.

//way-1
function concatArr(...nNumberOfArray){
    let arr = [];
    for (let i = 0; i < nNumberOfArray.length; i++){
        for (let j = 0; j< nNumberOfArray[i].length; j++){
            arr.push(nNumberOfArray[i][j]);
        }
    }
    return arr;
}

console.log(concatArr([1, 6, 7],[4,6,9,],[1,8]));

//way -2(using flat works on node>11)
const arr1 = [[1, 3], [4, 6], [7, 8 ,9]];
const newArr = arr1.flat();
console.log(newArr);

//////////////////////////////////////////////////////////////
function countDigit(num) {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

num = 7654321;
console.log(countDigit(num));

//OR

let x=123456789
const len=x.toString().length
console.log(len);

/////////////////////////////////////////////////////////////////////////////
const arr = [true, false, true, false, true, true];
const count = arr.filter(Boolean).length;

console.log(`no of true count is ${count}`);

//OR
let flag = true;
let frq = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === flag) {
    frq++;
  }
}
console.log(`no of true count is ${frq}`);

// A function that converts an object into an array, where each element represents a key-value pair in the form of an array.

const obj = {
  name: "Ram",
  city: "koladur",
  age: 28,
};

//way 1
function objToArray(obj) {
  let res = [];
  for (k of Object.keys(obj)) {
    res.push([k, obj[k]]);
  }
  console.log(res);
}
objToArray(obj);

//way 2
console.log(Object.entries(obj));
