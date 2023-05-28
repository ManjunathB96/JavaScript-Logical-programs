const row = 2;
let col = 4;

function twoDArray(row, col) {
  let value = 1;
  let arr = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[i] = [];
    }
  }
  console.log(arr);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[i][j] = value;
      value++;
    }
  }
  console.log(arr);
}
twoDArray(row, col);


const rows=3
col=3

const arr=Array.from({length:rows},()=>Array(col).fill(5))
console.log(arr);


//mtd-2
const arr2=Array.from(Array(rows),()=>new Array(col).fill(1))
console.log(arr2);