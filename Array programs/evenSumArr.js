<<<<<<< HEAD


// function sumOfEvenNum(arr) {
//   let evenSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenSum = evenSum + arr[i];
//     }
//   }
//   return evenSum
// }

// let arr = [2,4,8];
// let result = sumOfEvenNum(arr);
// console.log(result);


function sumOfOddNum(arr) {
    let OddSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        OddSum = OddSum + arr[i];
      }
    }
    return OddSum
  }
  
  let arr = [1,3,2,4,8,9,5,7];
  let result = sumOfOddNum(arr);
=======


// function sumOfEvenNum(arr) {
//   let evenSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenSum = evenSum + arr[i];
//     }
//   }
//   return evenSum
// }

// let arr = [2,4,8];
// let result = sumOfEvenNum(arr);
// console.log(result);


function sumOfOddNum(arr) {
    let OddSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        OddSum = OddSum + arr[i];
      }
    }
    return OddSum
  }
  
  let arr = [1,3,2,4,8,9,5,7];
  let result = sumOfOddNum(arr);
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
  console.log(result);