

// function linearSearch(arr, searchEle) {
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (searchEle === arr[i]) {
//       console.log(`search element ${searchEle} is found at index  ${i}`);
//       flag = true;
//       break;
//     }
//   }
//   if (flag == false) {
//     console.log(`search element ${searchEle}  is not found `);
//   }
// }
// const searchEle = 40;
// const arr = [10, 50, 80, 60, 40, 30, 10];
// linearSearch(arr, searchEle);







const searchEle = 10;
const arr = [10, 50, 80, 60, 40, 30];

const result=linearSearch(arr, searchEle);
if (result == -1) {
    console.log(`serach ele is not found`);
} else {
    console.log(`search element ${searchEle} is found at index  ${result}`);
}

function linearSearch(arr, searchEle) {
  for (let i = 0; i < arr.length; i++) {
    if (searchEle === arr[i]) {
      return i;
    }
  }
  return -1
}


// Time complexity  Big-O ==O(n)  means we need to traverse the array n times  till  ele get 