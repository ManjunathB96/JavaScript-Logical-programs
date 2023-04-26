
// //if duplicate elements present remove dup first then find out the sec largest ele

// let arr = [5,4,8,6,3,2,1,9,10,-1,-5,12,7];
// secondlargestEle(arr);

// function secondlargestEle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   let size = arr.length;
//   console.log(`first largest element in array is :  ${arr[size - 1]}`);
//   console.log(`second largest element in array is :  ${arr[size - 2]}`);
//   console.log(`Third largest element in array is :  ${arr[size - 3]}`);
// }

// let arr = [5,4,8,6,3,2,1,9,10,-1,-5,12,7];
const arr = [7, 5, 4, -1, 8, -2, -3, 9,6,1,3,2,11,15,10,19,16,12];
bubbleSorting(arr);

function bubbleSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
