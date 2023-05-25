function factorsOfNum(num) {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}
let num = 10;
factorsOfNum(num);

// Factors of a Positive number  :=> the factore number should exactly divide  the number (with 0 remainder)
/*
num =10

output :
1
2
5
10
*/
