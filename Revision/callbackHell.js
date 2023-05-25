<<<<<<< HEAD
console.log("start");

function loginUserServer(email, callback) {
  setTimeout(() => {
    console.log("we have the data");
    callback({ userEmail: email });
  }, 3000);
}

function getUserId(email, callback) {
  setTimeout(() => {
    callback(["10", "20", "2", "25"]);
  }, 2000);
}

function getUserName(Id, callback) {
  setTimeout(() => {
    callback(`id ${Id} name`);
  }, 2000);
}

const user = loginUserServer("bbelagavi@hmail.com", (userInfo) => {
  console.log(userInfo);
  getUserId(userInfo.userEmail, (userId) => {
    console.log(userId);
    getUserName(userId[2], (IdName) => {
      console.log(IdName);
    });
  });
});

user;
console.log("end");
=======
console.log("start");

function loginUserServer(email, callback) {
  setTimeout(() => {
    console.log("we have the data");
    callback({ userEmail: email });
  }, 3000);
}

function getUserId(email, callback) {
  setTimeout(() => {
    callback(["10", "20", "2", "25"]);
  }, 2000);
}

function getUserName(Id, callback) {
  setTimeout(() => {
    callback(`id ${Id} name`);
  }, 2000);
}

const user = loginUserServer("bbelagavi@hmail.com", (userInfo) => {
  console.log(userInfo);
  getUserId(userInfo.userEmail, (userId) => {
    console.log(userId);
    getUserName(userId[2], (IdName) => {
      console.log(IdName);
    });
  });
});

user;
console.log("end");
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
