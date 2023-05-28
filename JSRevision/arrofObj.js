const test = {
  a: 1,
  b: [2, 3],
};
const { b } = test;
console.log(b);

const book = {
  description: "Covers eight types of Design Patterns",
  bookImage: "Design Patterns",
  bookName: "Design Patterns",
  price: 250,
  ratings: [
    {
      userId: "645a8b3b367b9c12586b6041",
      description: "Best Book",
      ratings: 4.5,
    },
    {
      userId: "645a8b3b367b9c12586b6045",
      description: "Good Book",
      ratings: 3.8,
    },
    {
      userId: "645a8b3b367b9c12586b6050",
      description: "Very good Book",
      ratings: 4,
    },
    {
      userId: "645a8b3b367b9c12586b6065",
      description: "Very good Book",
      ratings: 4.5,
    },
  ],
};

const { ratings } = book;
console.log(ratings);

// we want to find a userId that is given. We can use the function Array.find.
// The Array.find function returns only one object. If we want to get all ratings, we need to use Array.filter.

let userId1 = "645a8b3b367b9c12586b6041";
const isPresent1 = ratings.find((obj) => obj.userId === userId1);

console.log(isPresent1);

let isPresent = false;
let rate1 = 4;
let rate = ratings.find((rate) => {
  if (rate.ratings === rate1) {
    isPresent = true;
  }
});
console.log(isPresent);
console.log(rate);

let rate4 = 4.5;
let newrate = ratings.filter((user) => user.ratings === rate4);

console.log(newrate);

let ratingIdx = ratings.findIndex((book) => book.ratings === 3.8);
console.log(ratingIdx);

const newRating = {
  userId: "645a8b3b367b9c12586b6075",
  description: "Nice book",
  ratings: 4.35,
};

if (ratingIdx >= 0) {
  ratings.splice(ratingIdx, 1, newRating);
} else {
  ratings.push(newRating);
}

console.log(ratings);

//SORT AN ARRAY OF OBJ BY STRING PROPERTY VALUE

const persons = [
  {
    name: "Manju",
    age: 28,
  },
  {
    name: "Tanu",
    age: 8,
  },
  {
    name: "Banu",
    age: 20,
  },
  {
    name: "Janu",
    age: 15,
  },
];

const result = persons.sort((a, b) => a.name.localeCompare(b.name));
//const result = persons.sort((a, b) => a.age - b.age);
console.log("file: arrofObj.js:106 => result:", result);


//****Array Methods */

const animals=['Tiger','lion']

animals.push('cow')
animals.pop()


animals.splice(0,0,'whale')
animals.splice(2,0,'Zebra')
console.log(animals);
animals.splice(0,1)
animals.splice(2,1)
console.log(animals);

animals.shift()
animals.unshift("Bear")
console.log(animals);

animals.push("Ant")
animals.sort()
animals.reverse()
console.log(animals);
