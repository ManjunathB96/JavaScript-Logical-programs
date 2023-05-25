const arr = [1,2,3,4,5,6,7,8,9];

function oddNumAtBegining(arr) {
    const odds = arr.filter((num) => num % 2 === 1);
    const even = arr.filter((num) => num % 2 === 0);
    const result=[...odds,...even]
    console.log(result);
}
oddNumAtBegining(arr)



console.log('*************************************************************');
function OddFirst(arr) {
    const arr1=[]
    const arr2=[]
   for (const val of arr) {
    if (val % 2 === 0) {
        arr1.push(val)
    } else {
        arr2.push(val) 
    }
   }
   const result=[...arr2,...arr1]
   console.log(result);
}

OddFirst(arr)





