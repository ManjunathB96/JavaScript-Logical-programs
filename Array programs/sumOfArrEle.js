// let array = [1,2,3,4,5];
// function sum(arr) {
//     // console.log(arr);
//     if (arr.length === 0) {
//         return 0
//     } else {
//         const [head,...rest] =arr;
//         return head+sum(rest);
//     }
// }
// let result=sum(array);
// console.log(result);

let array = [1, 2, 3, 4, 5];
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
let result = sum(array);
console.log(result);
