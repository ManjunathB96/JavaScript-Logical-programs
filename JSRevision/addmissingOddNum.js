
////** add missing odd numbers */

const input = [3, 5, 7, 9, 11, 13, 17];

for (let i = 0; i < input.length; i++) {
  const curr = input[i];
  let next = curr + 2;
  if (input[i + 1] !== next) {
    console.log(i);
    let pos = i + 1;
    input.splice(pos, 0, next);
    console.log(next);
    break;
  }
}
console.log(input);
//****************************** */

// //printing 100 odd numbers
// const input = [];
// for (let i = 0; i <=100; i++) {
//   input[0]=1
//   for (let i = 0; i < input.length; i++) {
//     const curr = input[i];
//     let next = curr + 2;
//     if (input[i + 1] !== next) {
//     //  console.log(i);
//       let pos = i + 1;
//       input.splice(pos, 0, next);
//      // console.log(next);
//       break;
//     }
//   }
// }
// console.log(input);

////******************Hoisting */
