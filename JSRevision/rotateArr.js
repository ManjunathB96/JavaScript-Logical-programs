

// function rotateArrayElem(arr,numOfShifts) {

//   for (let i = 0; i < numOfShifts; i++) {
//    arr.push(arr.shift())
//   }
//   console.log(arr);
// }
// const arr=[1,2,3,4,5]
// const numOfShifts=2
// rotateArrayElem(arr,numOfShifts)

function rotateArrayElem(arr, numOfShifts) {
    let delatedArr = arr.splice(arr.length - numOfShifts);
    for (let i = 0; i < delatedArr.length; i++) {
      arr.splice(i, 0, delatedArr[i]);
    }
    console.log(arr);
  }
  const arr = [1, 2, 3, 4, 5];
  const numOfShifts = 1;
  rotateArrayElem(arr, numOfShifts);
  //arr.splice(  i,         0,            delatedArr[i])
  //         positionIdx    numtodeleteidx,      addelem
  