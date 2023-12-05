import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameOrEmailOrPhone, setUsernameOrEmailOrPhone] = useState("");

    const navigate = useNavigate();

    
    const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456"
    };

    const onButtonClick = () => {
        
        if ("" === usernameOrEmailOrPhone) {
            setEmailError("Please enter your email or username or phone number.")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(usernameOrEmailOrPhone)) {
            setEmailError("Please enter a valid email")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

    }

    return (
        <div className="circle">
            <div className="login-title">
                <div>Login</div>
            </div>
            <br />
            <form action="/login" method="POST" id="login">
                <div className='inputContainer'><p className="errorLabel">{emailError}</p>
                <label htmlFor="usernameOrEmailOrPhone" className="required"></label>
                <input
                    type="text"
                    name="usernameOrEmailOrPhone"
                    id="usernameOrEmailOrPhone"
                    value={usernameOrEmailOrPhone}
                    onChange={(e) => setUsernameOrEmailOrPhone(e.target.value)}
                    required
                    pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+\.[a-z]+)"
                    placeholder="Username, email, or phone number"
                /></div>
                
                <div className='inputContainer'><p className="errorLabel">{passwordError}</p>
                <label htmlFor="password" className="required"></label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="Password"
                /></div>
                

                <div className="flex-container" id="not-login">
                    <Link to="../signup">Not a Circler? Sign up</Link>
                    <a href="">Forgot password</a>
                </div>

                <input
                    className="submit"
                    type="button"
                    onClick={onButtonClick}
                    value="Log in"
                />
            </form>
        </div>
    );
}

export default Login;
