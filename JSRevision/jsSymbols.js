//symbols are immutable (can't change) and are unique
// creating symbol
const x = Symbol();
console.log(typeof x);

//we can pass symbol description
let id1 = Symbol("Hello");
let id2 = Symbol("Hello");
console.log(id1.description);
console.log(id1 === id2);

let id8 = Symbol("id");
console.log(id8);

console.log(id8.toString());

/*
The third-party code won’t be aware of newly defined symbols,
 so it’s safe to add symbols to the user objects.
*/

let id = Symbol("id");
let user = {
  name: "Manju",
  age: 30,
  [id]: 123, // adding symbol as a key
};
user[id]=369
//**********Symbol not accessible when we use for..in loop */
////The for...in loop does not iterate over Symbolic properties
for (let key in user) console.log(key);

const keyarr=Object.keys(user)
console.log("Output ===> keyarr:", keyarr);

//******  Accessible */
// 1) the direct access by the symbol works
console.log("Direct access: " + user[id]);

//2) when we clone an object or merge objects,
//we usually want all properties to be copied (including symbols like id).
//Object.assign copies both string and symbol properties
let clone = Object.assign({}, user);
console.log(clone[id]);


 /* Global symbols
global symbol registry. We can create symbols in it and access them later,
and it guarantees that repeated accesses by the same name return exactly the same symbol.
In order to read (create if absent) a symbol from the registry, use Symbol.for(key)
 */

let idOne= Symbol.for("empId");
let idAgain = Symbol.for("empId");  // the same symbol                              
console.log( idOne === idAgain );


//Example
let person = {
  name: "Tanushree",
};
person.id = 12;  // using string as key
console.log(person.id)

// Another program overwrites value
//even if the same name is used to store values, the Symbol data type will have a unique value
person.id = "Another value";
console.log(person.id);

//****Symbol Methods
// get symbol by name
let sym = Symbol.for("hello");
let sym1 = Symbol.for("javascript");

// get name by symbol
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym1));
