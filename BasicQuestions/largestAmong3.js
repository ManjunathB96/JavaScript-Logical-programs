function largestAmongThree(num1, num2, num3) {
  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
console.log(`largest among three ele is ${largest}`);
}

const num1 = 20;
const num2 = 5;
const num3 = 10;
largestAmongThree(num1, num2, num3);
