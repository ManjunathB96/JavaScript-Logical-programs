<<<<<<< HEAD


function concateNArray(...nArray) {
  let newArr = [];

  for (let i = 0; i < nArray.length; i++) {
    for (let j = 0; j < nArray[i].length; j++) {
      newArr.push(nArray[i][j]);
    }
  }
  return newArr;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const result = concateNArray(arr1, arr2, arr3);
console.log(result);

//OR
const arr = [arr1, arr2, arr3];
const res = arr.flat();
console.log(res);

//OR
const value = [...arr1, ...arr2, ...arr3];
console.log(value);
=======


function concateNArray(...nArray) {
  let newArr = [];

  for (let i = 0; i < nArray.length; i++) {
    for (let j = 0; j < nArray[i].length; j++) {
      newArr.push(nArray[i][j]);
    }
  }
  return newArr;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const result = concateNArray(arr1, arr2, arr3);
console.log(result);

//OR
const arr = [arr1, arr2, arr3];
const res = arr.flat();
console.log(res);

//OR
const value = [...arr1, ...arr2, ...arr3];
console.log(value);
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
