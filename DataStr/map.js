<<<<<<< HEAD
let motorCycle=new Map()

motorCycle.set("TVS","Black")
motorCycle.set("Hero","Red")
motorCycle.set("Pulsur","Blue")
motorCycle.set("Shine","White")

//console.log(motorCycle);

for (const [k,v] of motorCycle) {
    console.log(`${k}:${v}`);
}

console.log(motorCycle.size)
console.log(motorCycle.has('Hero'))
console.log(motorCycle.get('Hero'))
console.log(motorCycle.delete('Hero'))
console.log(motorCycle.get('Hero'))


motorCycle.clear()

console.log(motorCycle);

/*

console.log('****************************************************************************');
// console.log(motorCycle.get('Shine'));

// const r1=motorCycle.keys()
// console.log(r1);
// const r2=motorCycle.values()
// console.log(r2);
// const r3=motorCycle.entries()
// console.log(r3);

// motorCycle.forEach((v,k,m)=>{
//     console.log(v);
//     console.log(k);
//     console.log(m);
// })

// convert  obj --into --map
console.log('\n**************************  obj into map **************************************************');
let obj={
    name:"manju",
    age:28
}
let m=new Map(Object.entries(obj))
console.log(m);

//convert map  into obj
console.log('\n****************************map into obj************************************************');
let newObj=Object.fromEntries(motorCycle.entries())
console.log(newObj);

// convert map into an array
console.log('\n*************************** Map into array key ************************************************');
let arrKey=[...motorCycle.keys()]
console.log(arrKey);

console.log('\n**************************Map into array value***************************************************');

let arrVal=[...motorCycle.values()]

console.log(arrVal);
*/

=======
let motorCycle=new Map()

motorCycle.set("TVS","Black")
motorCycle.set("Hero","Red")
motorCycle.set("Pulsur","Blue")
motorCycle.set("Shine","White")

//console.log(motorCycle);

for (const [k,v] of motorCycle) {
    console.log(`${k}:${v}`);
}

console.log(motorCycle.size)
console.log(motorCycle.has('Hero'))
console.log(motorCycle.get('Hero'))
console.log(motorCycle.delete('Hero'))
console.log(motorCycle.get('Hero'))


motorCycle.clear()

console.log(motorCycle);

/*

console.log('****************************************************************************');
// console.log(motorCycle.get('Shine'));

// const r1=motorCycle.keys()
// console.log(r1);
// const r2=motorCycle.values()
// console.log(r2);
// const r3=motorCycle.entries()
// console.log(r3);

// motorCycle.forEach((v,k,m)=>{
//     console.log(v);
//     console.log(k);
//     console.log(m);
// })

// convert  obj --into --map
console.log('\n**************************  obj into map **************************************************');
let obj={
    name:"manju",
    age:28
}
let m=new Map(Object.entries(obj))
console.log(m);

//convert map  into obj
console.log('\n****************************map into obj************************************************');
let newObj=Object.fromEntries(motorCycle.entries())
console.log(newObj);

// convert map into an array
console.log('\n*************************** Map into array key ************************************************');
let arrKey=[...motorCycle.keys()]
console.log(arrKey);

console.log('\n**************************Map into array value***************************************************');

let arrVal=[...motorCycle.values()]

console.log(arrVal);
*/

>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
