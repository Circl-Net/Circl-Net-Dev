import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {

    const history = useNavigate();

    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();


        try{

            await axios.post("http://localhost:3000/signup",{
                loginInput, password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/", {state:{id: loginInput}})
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })

        }
        catch(e){

            console.log(e);

        }


    }
    return (
        <div className="circle">
            <div className="login-title">
                <div>Signup</div>
            </div>
            <br />
            <form action="/auth" method="POST" id="login">
                {/*<div className='inputContainer'><p className="errorLabel">{emailError}</p>*/}
                <p>
                    <label htmlFor="loginInput" className="required">
                        <input
                            type="text"
                            name="loginInput"
                            id="loginInput"
                            value={loginInput}
                            onChange={(e) => setLoginInput(e.target.value)}
                            required
                            pattern= "^(\d{10})|([A-Za-z\d]+)|([^@]+@[^@]+\.[a-z]+)$"
                            placeholder="Username, email, or phone number"
                        />
                    </label>
                </p>
                
                {/*<div className='inputContainer'><p className="errorLabel">{passwordError}</p>*/}
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
                />
                

                <div className="flex-container" id="not-login">
                    <Link to="./login">Log in</Link>
                    <a href="">Forgot password</a>
                </div>

                <input
                    className="submit"
                    type="button"
                    value="Log in"
                    onClick={submit}
                />
            </form>
</div>
    );
}

export default Signup;
