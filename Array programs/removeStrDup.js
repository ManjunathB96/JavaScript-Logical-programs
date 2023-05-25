<<<<<<< HEAD


function removeStrDup(arr) {
  let count = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isPresent = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] == newArr[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      newArr[count] =arr[i]
      count += 1;
    }
  }
  for (let index = 0; index < newArr.length; index++) {
   console.log(newArr[index]);
  }
}

let arr = ["manju", "manju", "rohan", "manju"];
removeStrDup(arr);
=======


function removeStrDup(arr) {
  let count = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isPresent = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] == newArr[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      newArr[count] =arr[i]
      count += 1;
    }
  }
  for (let index = 0; index < newArr.length; index++) {
   console.log(newArr[index]);
  }
}

let arr = ["manju", "manju", "rohan", "manju"];
removeStrDup(arr);
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
