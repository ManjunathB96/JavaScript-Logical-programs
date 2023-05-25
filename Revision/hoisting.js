//Hoisting : irrespective of where the variable and function declared they moved on the top of the scope the scope can be local or global

//global cope
num = 3;
console.log(num);
var num;

myFn();
function myFn() {
  console.log("hello world!");
}

//local scope
function doSomthing() {
  val = 10;
  console.log(val);
  var val;
}
doSomthing()


// const r=calc(5)
// console.log(r);             //ReferenceError: Cannot access 'calc' before initialization
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  };