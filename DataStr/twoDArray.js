

const rows=3
const col=3

const arr=Array.from({length:rows},()=>Array(col).fill(1))
console.log(arr);


//mtd-2
const arr2=Array.from(Array(rows),()=>new Array(col).fill(1))
console.log(arr2);