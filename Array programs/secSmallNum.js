<<<<<<< HEAD


function secSmallestNum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  console.log(array);
  let size = array.length;
  console.log(`first smallest ele is : ${array[size - 1]}`);
  console.log(`second smallest ele is : ${array[size - 2]}`);
  console.log(`third smallest ele is : ${array[size - 3]}`);
}



let array = [5, 4, 6, 2, 1, 8, 9, 7, 3];
=======


function secSmallestNum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  console.log(array);
  let size = array.length;
  console.log(`first smallest ele is : ${array[size - 1]}`);
  console.log(`second smallest ele is : ${array[size - 2]}`);
  console.log(`third smallest ele is : ${array[size - 3]}`);
}



let array = [5, 4, 6, 2, 1, 8, 9, 7, 3];
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
secSmallestNum(array);