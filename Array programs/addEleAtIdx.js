let arr = [1, 2, 3, 4];

let idx = 3;
let ele = 100;
addEle(arr, idx, ele);
function addEle(arr, idx, ele) {
  for (let i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];    //shift the elements that are greater than idx
  }
  arr[idx] = ele;           // insert element at given index

  console.log(arr);
}


let arr2=[1,2,4,5,6]

arr2.splice(2,0,3)
console.log(arr2);