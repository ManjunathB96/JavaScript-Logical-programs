//Encapsulation using class
class Person {
  #name = "Rajesh";

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

let person = new Person();

console.log(person.getName());
// person.name; // undefined
// person.#name; // SyntaxError
person.setName("Tanushree");
console.log(person.getName());


//function
let student = (function () {
  var id = 12;
  var name = "Kallappa";
  var marks = 81;
  var obj = {
    setMarks: function (newMarks) {
      if (isNaN(newMarks)) {
        throw new Error(`${newMarks} is not a number`);
      }
      marks = newMarks;
    },
    getMarks: function () {
      return marks;
    },
    getName: function () {
      return name;
    },
    getId: function () {
      return id;
    },
  };
  return obj;
})();
console.log(student.getMarks()); //81
student.setMarks(98);
console.log(student.getMarks()); //98
console.log(student.getName()); //kallappa
// student.setMarks("Ninty")



// //closure
// function squareArray(){
//     let data = [1,2,3,4,5,6]
//     function square(){
//         for(let i = 0; i<data.length;++i){
//             data[i]=data[i]*2
//         }
//         return data
//     }
//     return square;
// }

// let sq = squareArray()
// let squaredArray=sq()
// console.log(squaredArray)
// // [2,4,6,8,10,12]