//const fs = require("fs");

// function readTodelist(fileName, callback) {
//   fs.readFile("./customer.json", "utf8", (err, data) => {
//     if (err) {
//       console.log("File read failed:", err);
//       return callback(err);
//     }

//     try {
//       const todoList = JSON.parse(data);
//       callback(null, todoList);
//     } catch (error) {
//       callback(error);
//     }
//   });
// }
// readTodelist('manju', callback)


const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(customer.address); // => "Infinity Loop Drive"
});

//const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(customer)
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

// const customer = {
//     name: "Newbie Corp.",
//     order_count: 0,
//     address: "Po Box City"
//   };
//   const jsonString = JSON.stringify(customer);
//   console.log(jsonString);
//   // => "{"name":"Newbie Co.","address":"Po Box City","order_count":0}"

/*

raisedBy
"642f01aad7974f84b4f6aee6"
Ticket_Id
"TIK-ID-65685523"
CIC_Id
"CIC-ID-16562641"
engineerName
"Hanumant Biradar"
ticketName
"Not regular to class"
issueType
"Health Issue"
description
"suffering from headache and fever"
additionInfo
"No"
status
"Open"
assignedTo
"Admin"
file
"http://localhost:3000/file/undefined_1680945320225.jpg"

followUp
Array

0
Object
_id
64313648698f178df8fb1d08
followupBy
"642f00c5d7974f84b4f6aede"
description
"attend class"
date
"10-April-2023"
*/