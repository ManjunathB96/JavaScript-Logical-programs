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
