
// creating symbol
const x = Symbol()
console.log(typeof x);


//we can pass symbol description
let id1 = Symbol("1");
let id2 = Symbol("1");

console.log(id1.description);

console.log(id1 ===id2);

//let id = Symbol("id");
// console.log(id);

// console.log(id.toString());
// 

/*
The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.
*/

// let id = Symbol("id");

// let person1 = {
//     name: "Ramu",
//     [id]: 123  // adding symbol as a key
// };

// console.log(person1);


// let id = Symbol("id");
// let user = {
//   name: "Manju",
//   age: 30,
//   [id]: 123,
// };
//The for...in loop does not iterate over Symbolic properties
// for (let key in user) console.log(key);

// // the direct access by the symbol works
// console.log("Direct access: " + user[id]);

// let clone = Object.assign({}, user);  //Object.assign copies both string and symbol properties

// console.log(clone[id]); 
//  //when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).


//  /* Global symbols
// global symbol registry. We can create symbols in it and access them later, 
// and it guarantees that repeated accesses by the same name return exactly the same symbol.
// In order to read (create if absent) a symbol from the registry, use Symbol.for(key)
//  */


// let idOne= Symbol.for("id"); 

// let idAgain = Symbol.for("id");

// // the same symbol
// console.log( idOne === idAgain ); 



let person = {
    name: "Tanushree"
};

// using string as key
person.id = 12;
console.log(person.id); // 12

// Another program overwrites value
//even if the same name is used to store values, the Symbol data type will have a unique value
person.id = 'Another value';
console.log(person.id);

//****Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('javascript');

// get name by symbol
console.log( Symbol.keyFor(sym) ); 
console.log( Symbol.keyFor(sym1) ); 