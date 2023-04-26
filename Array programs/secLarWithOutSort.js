function secargestwithoutSort(arr) {
  let largest = arr[0];
  let secLargest = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] < largest) {
      secLargest = arr[i];
    }
  }
  console.log(`largest element in array is ${largest}`);
  console.log(`sec largest element in array is ${secLargest}`);

}

const arr = [10, 5, 41, 6, 15, 7, 21, 12, 16];
secargestwithoutSort(arr);

console.log(
  arr.sort((a, b) => {
    return a - b;
  })
);

// function secsmallestEle(arr) {
//   let smallest = arr[0];
//   let secSmallest = arr[1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secSmallest && arr[i] > smallest) {
//       secSmallest = arr[i];
//     }
//   }
//   console.log(`smallest element in array is ${smallest}`);
//   console.log(`sec smallest element in array is ${secSmallest}`);
// }

// const arr = [10, 12, 9, 14, 7, 4, -1];

// secsmallestEle(arr);

// console.log(
//   arr.sort((a, b) => {
//     return a - b;
//   })
// );
