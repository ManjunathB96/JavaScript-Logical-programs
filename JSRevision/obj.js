
//How to access the object properties

const brucelee = {
    name: "Bruce",
    surname: "Lee",
    born: "1940",
    spouse: "linda",
    children: ["Brandom", "Shannon"],
    parents: {
      father: "Lee Hoi",
      mother: "Grace Ho",
    },
    height: 173,
  };
  
  //console.log(brucelee);
  console.log(brucelee.born);
  const arr = brucelee.children;
  console.log(arr);
  const innerObj = brucelee.parents;
  console.log(innerObj);





  //object to nested array
  let obj={
    name:"manju",
    age:20
}
console.log("file: test.js:5 => obj:", obj);

console.log(Object.entries(obj));

let r=[]

for (let key of Object.keys(obj)) {
    console.log("key:", key);

  r.push([key,obj[key]])
}
console.log("r:", r);
