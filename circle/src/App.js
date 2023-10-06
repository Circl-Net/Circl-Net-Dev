import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CirclePage from './pages/CirclePage.js';
import Login from './pages/Login.js';
import Nav from './components/Nav.js';
import Signup from './components/Signup.js';
import Message from './components/Message.js';
import CreatePost from './components/CreatePost.js';
import Profile from './components/Profile.js';

function App() {
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
              <Route path='/create_post' element={<CreatePost/>}/>
              <Route path='/profile' element={<Profile/>}/>
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
