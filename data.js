//Citation Scope: Node.js and database connection set up on flip and each CRUD operation.
//Date: 08/12/2023
//Originality: Adapted
//Source: https://github.com/osu-cs340-ecampus/nodejs-starter-app/

var express = require("express");
var app = express();

const PORT = process.env.PORT || 3003;

// Database
var db = require("./database/db-connector");

const { query } = require("express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const csvParser = require("csv-parser");
const fs = require("fs");
const { get } = require("http");
const { join } = require("path");

let allUsers = [];
let allLocations = [];
 let allCircles = [];
function readAllUsers() {
  fs.createReadStream("./circle/src/data/user.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      if (data) {
        
        allUsers.push(data);
      }
    });
}
function readAllCircles() {
  fs.createReadStream("./circle/src/data/circle.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      if (data) {
        allCircles.push({data});
      }
    });
}

//const app = express();

readAllUsers();
readAllCircles();

const init = setTimeout(() => {
  randomAssignCircles();
  
  insertAllUsers();
  
  insertAllCircles();

  insertAllCirclers();

  insertRandomFriendships();
}, 1000);

function insertAllUsers() {
  truncateTable("Users");
  for (let user of allUsers) {
    let addUserQuery = `INSERT INTO Users (username, email, password) VALUES ('${user.user_name}', '${user.name}', '${user.password}');`;
    db.pool.query(addUserQuery, function (error, row, fields) {
      if (error) {
      }
    });
  }
}

function truncateTable(tablename) {
  let truncateQuery = `SET FOREIGN_KEY_CHECKS=0;truncate table ${tablename};SET FOREIGN_KEY_CHECKS=1;`;
  db.pool.query(truncateQuery, function (error, row, fields) {
    if (error);
    else if (row) {
      console.log(`truncated ${tablename}`);
    }
  });
}
function insertAllCircles() {
  truncateTable("Circles");
  for (let obj of allCircles) {
    let addQuery = `INSERT INTO Circles (name) VALUES ("${obj.name}");`;
    db.pool.query(addQuery, function (error, row, fields) {
      if (error) {
        console.log(error.sql);
      }
    });
  };
}

function insertAllCirclers() {
  truncateTable("Circlers");
  let index = 0;
  allCircles.forEach((obj) => {
    let circlers = obj["circlers"];
    circlers.forEach((user_id) => {
      
      let addCircler = `INSERT INTO Circlers (user_id, circle_id) VALUES (${user_id}, ${index});`;
      db.pool.query(addCircler, function (error, row, fields) {
        if (error) {
         // console.log(error.sqlMessage);
        }
        else{
         // console.log(index, user_id);
        }
      });
    });
    index++;
  });
}

// const CAPACITY=10;

let circleObj = [];
function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}
function getRandomUsers(num) {
  let list = [];
  let currId = 1;
  for (let p = 0; p < num; p++) {
    currId = random(0, allUsers.length);
    list.push(currId);
  }
  return list;
}
function randomAssignCircles() {
  const CAPACITY = 10;
  allCircles.forEach((obj) => {
  
    const numOfCirclers = random(0, CAPACITY);

    const circlers = getRandomUsers(numOfCirclers);
    obj["circlers"] = circlers;
  });
}
function insertRandomFriendships() {
  truncateTable("Friendships");
  const CAPACITY = 10;
  while (allUsers.length > 0){
    let currUser = allUsers.pop();
    let friends = getRandomUsers(CAPACITY);
    let selectUserById = `SELECT * from Users WHERE username = ${JSON.stringify(currUser.user_name)};`;
    db.pool.query(selectUserById, function(error, row, field){
      //if (error) console.log(error.sql);
      
      if (row[0]){
        console.log(currUser.user_name);
        let user_id = row[0].user_id;

        friends.forEach(friend_id =>{
          let addFriendship = `INSERT INTO Friendships (user_id2, user_id1) VALUES (${user_id}, ${friend_id});`;
          db.pool.query(addFriendship, function(error, row, field){
            if (error) console.log(error);
            //else console.log(currUser, friend_id);
          })
        })
        

        }
      
    })
    


  }

}


