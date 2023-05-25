<<<<<<< HEAD
const array = [1, 2, 3, 10, 4, 5];

let ele = 10;
const result = removeEle(array, ele);
console.log(result);

function removeEle(array, ele) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ele) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
=======
const array = [1, 2, 3, 10, 4, 5];

let ele = 10;
const result = removeEle(array, ele);
console.log(result);

function removeEle(array, ele) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ele) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
