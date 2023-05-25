
let p1 ={
    name:"Manju",
    age:28
}

let p2={
    city:"Koladur",
    sal:35000
}

let newPerson={...p1,...p2}
console.log(newPerson);

// OR

let newMan=Object.assign(p1,p2)
console.log(newMan);