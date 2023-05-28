//Class instantiation meaning :generating an object from a class is called class instantiation

class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const manju=new person("Manju",28)
  console.log(manju);
  const banu=new person("Banu",20)
  const tanu=new person("Tanu",35)