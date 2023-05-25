// const str="ABBA"

// let  arrStr=str.split('').reverse().join('');

// if (str == arrStr) {
//     console.log('palindrome');
// } else {
//     console.log('not palindrome');
// }

// function palindrome(str) {

//     let  len=str.length;
//     for (let i = 0; i < len/2; i++) {

//         if (str[i] !== str[len-1-i]) {
//             return 'not pali'
//         }
//     }
//     return 'pali'

// }
// const res=palindrome('abba');
// console.log(res);

let str = "ManjunatH s belagavi";
// const result = reveseword(str);
console.log(reveseword(str));
function reveseword(str) {
  let str2 = "";
  let count=0;
  for (let k = 0; k < str.length; k++) {
    if (str.charAt(k) !== " ") {
      str2 = str2 + str.charAt(k);
      count +=1;
    }
  }

  let newStr = str2.toLowerCase().split("");

  console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[i] < newStr[j]) {
        let temp = newStr[i];
        newStr[i] = newStr[j];
        newStr[j] = temp;
      }
    }
  }
  console.log(newStr);
  console.log(count);
   // console.log(newStr.join(' '));   //aaaabeghijlmnnstuv
}
