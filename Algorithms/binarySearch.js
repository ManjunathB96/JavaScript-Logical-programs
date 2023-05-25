// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let key = 1;

// function binarySearch(arr, key) {
//   let low = 0;
//   let high = arr.length - 1;
 
//   let flag = false;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (key === arr[mid]) {
//       console.log(`element found at index ${mid}`);
//       flag = true;
//       break;
     
//     }
//     if (key > arr[mid]) {
//       low = mid + 1;
//     }
//     if (key < arr[mid]) {
//       high = mid - 1;
//     }
//   }
//   if (flag == false) {
//     console.log("element is not found");
//   }
// }
// console.log("start");
// binarySearch(arr, key);
// console.log("end");

function binarySearch(arr, searchEle) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (searchEle === arr[mid]) {
      return mid;
    }
    if (searchEle > arr[mid]) {
      low = mid + 1;
    }
    if (searchEle < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchEle = 
3;
const idx = binarySearch(arr, searchEle);

if (idx == -1) {
  console.log('element not found');
} else {
  console.log(`element found at index ${idx}`);
}
