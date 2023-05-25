//NOTE 📓
//XOR  :  if bits aare different it gives 1 else it show 0


///Example swap two numbers 
let n1=11;
let n2=15

n1=n1^n2
n2=n1^n2
n1=n1^n2

console.log(`after swapping ${n1}  and  ${n2}`);


//Example : 2  check two numbers are equal or not  // string and numbers

const num1="manju"

const num2="manju"

if ((num1 ^ num2) === 0) {
    console.log("Both are equal");
} else {
    console.log("Both are not equal");
}


