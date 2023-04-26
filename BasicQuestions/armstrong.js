/*
an armstrong number is one whoose sum of digits raised to the power three( that is length) is equal to number itself


153    len =3
1^3  +  5^3  +  3^3
1  +  125 +  27 

== 153
*/

function armstrong(num) {
  let len = num.toString().length;
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let rem = temp % 10;
    sum = sum + rem ** len;
    temp = parseInt(temp / 10);
  }
  if (sum == num) {
    console.log("armstrong");
  } else {
    console.log("not armstrong");
  }
}

let num = 153;
armstrong(num)