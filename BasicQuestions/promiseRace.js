const PersonOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("PersonOne");
  }, 5000);
});
const PersonTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("PersonTwo ");
  }, 2000);
});
const PersonThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("PersonThree");
  }, 4000);
});

Promise.race([PersonOne, PersonTwo, PersonThree])
  .then((win) => console.log(win,"own the race"))
  .catch((failed) => {
    console.log(failed,"Race failed");
  });
