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


*/
function App() {

  randomAssignCircles();

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
