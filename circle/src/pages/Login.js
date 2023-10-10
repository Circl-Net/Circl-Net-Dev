import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
 return (
     <>
     <div class="circle">

    <form action="/login" method="POST" id="login">
      
    
        <label for="username" class="reqired"> 
        <input type="text" name="username" id="username" 
        required
        pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"
        placeholder="Username, email or phone number " />
        </label>

        <label for="password" class="required"></label>
        <input type="password" 
        name="password" 
        id="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Password" /> 
        <div class="flex-container" id="not-login">
        <Link to="../signup">Not a Circler? Sign up</Link>
       
       <a href="">Forgot password</a>
       </div>
        <button type="submit">Log in</button>
      
    </form>
  </div>
     </>
 )   
}

export default Login;