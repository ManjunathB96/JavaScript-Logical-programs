

// let arr = ["DCBA", "DCBA", "DCBA", "DCBA"];

// function reverseStrArr(arr) {
//   var count = 0;
//  let newArr = [];
//   let revStr;

//  for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//  for (let j = str.length - 1; j >= 0; j--) {
//       revStr = revStr + str[j];
    
//       }
//    }
   
// //  console.log(revStr.split());
// //  let strsplit=revStr.split('');

// // console.log(strsplit.join());
// return newArr[count++]=revStr;
// }
// let result=reverseStrArr(arr);

// console.log(result);


/*
let arr = ["DCBA", "DCBA", "DCBA", "DCBA"];

function reverseStrArr(arr) {
if (arr.length == 4) {
    return 0;

}
return  arr.sort()+reverseStrArr(arr.length-1)
}
let result=reverseStrArr(arr);

console.log(result);
*/


let arr = ["DCBA", "DCBA", "DCBA", "DCBA"];

function reverseStrArr(arr) {
  if (arr.length ) {
   return 0
  }
   

return reverseStrArr(arr.reverse());
}
let result=reverseStrArr(arr);

console.log(result);

// arr.reverse();
// console.log(arr);