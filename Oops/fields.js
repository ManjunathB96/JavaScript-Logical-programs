/*
fields : fields nothing but variables ,it is used to store the info/data/value

they are two types of fields
1] instance  a)private ('#' prefix)  b) public
2] static - static keyword used  a)private ('#' prefix)  b) public
*/
//nstance fields

// class Person {
//   #age = 28; //private instance field is not accessible outside class  but through constrctor we can change the value

//   name = "Manju"; //public instance field is accessible outside class
//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }

//   birthAge() {
//     this.#age++;
//   }
//   getDetails() {
//     return `${this.name} Age : ${this.#age}`;
//   }
// }

// let p = new Person("Raju", 30); //upadtes value

// p.birthAge();
// console.log(p.getDetails());
// console.log(p.age); //undefined
// console.log(p.name);

//static

class Main {
  static #Id = 101;
  static name = "Raj";

  static name="Ramu"
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    console.log(`${this.name}`);
  }

  static printDetails() {
    return `${this.#Id++}`;
  }
}

let m = new Main("Manju");

console.log(m.name);
console.log(m.age);   //undefined
m.getDetails();

// console.log(m.printDetails());  //TypeError: m.printDetails is not a function
