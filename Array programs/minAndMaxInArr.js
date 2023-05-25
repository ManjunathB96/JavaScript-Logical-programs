function findSmallestAndLar(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return `min ==> ${min} , max ==>  ${max}`;
}

const arr = [8, 5, 1, 2, 3, 4, 16, 9];
let res = findSmallestAndLar(arr);
console.log(res);
