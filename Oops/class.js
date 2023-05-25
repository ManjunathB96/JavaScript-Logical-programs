/*
class : class is a blueprint or prototype  from which objects are created   it is not a real world entity

object : it is the basic unit of OOPS , object is an instances of class   , it is a real world entity
*/

class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printdetails() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

let details = new MyClass("Manju", 28);
details.printdetails()


