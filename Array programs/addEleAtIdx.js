<<<<<<< HEAD
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
=======
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
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
console.log(arr2);