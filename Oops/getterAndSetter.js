// let p=new Person()   Hoisting of class is not allowed in jS   ReferenceError: Cannot access 'Person' before initialization
class Person {
  constructor() {
    console.log("I am Constructor");
  }
  set setName(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
}
 let p=new Person()

p.setName="Manju"
console.log(p.getName);
