<<<<<<< HEAD

let person={
    name:'Rohan',
    sal:35000,
    add:'mumbai',
    lang:'java'
}

let arr=Object.entries(person)
console.log(arr);
/*
[ [ 'name', 'Rohan' ],[ 'sal', 3500 ],[ 'add', 'mumbai' ],[ 'lang', 'java' ] ]
*/


let newArr=[]

let arr2=Object.entries(person)

arr2.forEach(([key,val]) =>{
    newArr.push(key);
    newArr.push(val)
})
console.log(newArr);

/*
['name', 'Rohan','sal',  35000,'add',  'mumbai','lang', 'java']
*/

=======

let person={
    name:'Rohan',
    sal:35000,
    add:'mumbai',
    lang:'java'
}

let arr=Object.entries(person)
console.log(arr);
/*
[ [ 'name', 'Rohan' ],[ 'sal', 3500 ],[ 'add', 'mumbai' ],[ 'lang', 'java' ] ]
*/


let newArr=[]

let arr2=Object.entries(person)

arr2.forEach(([key,val]) =>{
    newArr.push(key);
    newArr.push(val)
})
console.log(newArr);

/*
['name', 'Rohan','sal',  35000,'add',  'mumbai','lang', 'java']
*/

>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
