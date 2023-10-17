import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//https://www.educative.io/answers/how-to-implement-a-server-for-reactjs-and-mysql-application

//IMPORT COMPONENT
import Nav from './components/Nav.js';

//IMPORT PAGES
import Message from './pages/Message.js';
import Profile from './pages/Profile.js';
import HomePage from './pages/HomePage.js';
import CirclePage from './pages/CirclePage.js';
import Papa from 'papaparse';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
//import * as fs from 'node:fs';
/*const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('./data/user.csv');
var count = 0; // cache the running count
let allUsers;
papa.parse(file, {
    worker: true, // Don't bog down the main thread if its a big file
    step: function(result) {
        // do stuff with result
    },
    complete: function(results, file) {

        allUsers=results.data;
    }
});

const CAPACITY=10;

console.log(allUsers);
const allLocations = Papa.parse("./data/location.csv", {header: true}).data;
const circleObj = [];
function random(min, max){
  return Math.floor(Math.random()) * max + min;
}
function getRandomUsers(num){
  let list = [];
  let currId = 1;
  for (let p = 0; p < num; p++){
    currId = random(currId, num);
    list.push(allUsers[currId]);
  }
  return list;
}
function randomAssignCircles(){
  const numOfCircles = random(10);
  
  
  for (let i = 0; i < numOfCircles; i++){
    const numOfCirclers = random(CAPACITY);
    let listOfCirclers = getRandomUsers(numOfCirclers);
    const locationId = random(allLocations.length());
    circleObj.push({
      location: locationId,
      circlers: listOfCirclers

    })
  }
  

}

*/
function App() {

  //randomAssignCircles();

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Circl Net</h1>

          <Nav/>

        </header>
        
        <main>
          <section>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/circle' element={<CirclePage />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='/message' element={<Message/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/signup' element={<Signup/>}/>
            </Routes>
          </section>
        </main>
        
        <footer>
          <p>&copy; 2023 Tran Tran & Tongxin Sun</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
