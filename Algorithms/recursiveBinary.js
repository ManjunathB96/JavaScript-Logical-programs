function recursiveBinarySearch(arr, searchEle) {
  return search(arr, searchEle, 0, arr.length - 1);
}

function search(arr, searchEle, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);

  if (searchEle === arr[mid]) {
    return mid;
  }
  if (searchEle < arr[mid]) {
    return search(arr, searchEle, low, mid - 1);
  } else {
    return search(arr, searchEle, mid+1, high);
  }
}


// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10));
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3));




const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const searchEle = 3;
const idx = recursiveBinarySearch(arr, searchEle);
if (idx == -1) {
  console.log(`search ele ${searchEle} not found`);
} else {
  console.log(`search ele ${searchEle} found at index ${idx}`);
}
