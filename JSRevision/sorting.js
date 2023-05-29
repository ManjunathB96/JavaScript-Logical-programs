
//*****Sort string array elements */
const names = ["manju", "banu", "tanu", "rohan"];
const num = [1, 5, 7, 8, 9, 3, 2];
console.log(
  num.sort((a, b) => {
    return b - a;
  })
);
const result1 = names.sort((a, b) => a.localeCompare(b));
console.log("file: => result1:", result1);
const result2 = names.sort((a, b) => b.localeCompare(a));
console.log("file: => result2:", result2);



//***************  sorting array of object */

const cities = [
    { name: "Belagavi", pincode: 12 },
    { name: "Solapur", pincode: 12345 },
    { name: "Kolapur", pincode: 1234 },
    { name: "Delhi", pincode: 123 },
  ];
  
  cities.sort((city1, city2) => {
    city1 = city1.name.toLowerCase();
    city2 = city2.name.toLowerCase();
  
    if (city1 < city2) {
      return -1;
    }
    if (city1 > city2) {
      return 1;
    }
    return 0;
  });
  console.log(cities);