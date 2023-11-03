import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Signup () {
    const redirect = useNavigate();
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const addUser = async () => {
        const newUser = { username, gender };
        const response = await fetch('/add-user', {
            method: 'post',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/");
        }
    };
    return (
        <>
        <h1>Join a world wide net of Circlers</h1>
<div class="circle">
    <form action="/signup" method="POST"  id="signup">
        <legend>Tell us a bit about yourself...</legend>
        <div class="flex-container">
        <label for="username" class="required"> 
         <input type="text" name="username" id="username" 
         onChange={e => setUsername(e.target.value)}
        required
        /*pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"*/
        placeholder="User Name" />
        </label>
        <label for="lastname" class="required"> 
            <input type="text" name="lastname" id="lastname" 
            pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"
            placeholder="Last Name " />
            </label>
            </div>
            <div class="flex-container">
                <input type="radio" name="gender" id="male" value='male' onChange={e => {setGender(e.target.value); console.log(e.target.value)}}/>
                <label for="male">Male</label>

                <input type="radio" name="gender" id="female" value='female' onChange={e => {setGender(e.target.value); console.log(e.target.value)}}/>
                <label for="female">Female</label>
            
                <input type="radio" name="gender" id="nonbinary" value='nonbinary' onChange={e => {setGender(e.target.value); console.log(e.target.value)}}/>
                
                <label for="nonbinary">Nonbinary</label>
            </div>
            <div class="flex-container">

                <label for="dob" className="required"> Date of birth: 
                    <input type="date" name="lastname" id="dob" 
                    
                    pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"/>
                    </label>
</div>
           <div class="flex-container">
            <div class="address"><label for="address" class="required"> 
                <input type="textarea" name="address" id="address" 
                
                pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"
                maxlength="50"
                placeholder="Address Line 1 " />
                </label></div>
            <div><label for="city" class="required city"> 
                    <input type="textarea" name="city" id="city" 
                    
                    placeholder="City" />
                    </label></div> 
                
                <label for="state" class="required state"> 
                    <input type="textarea" name="state" id="state" 
                    
                    placeholder="State " />
                    </label>
                    <label for="zip" class="required zip"> 
                        <input type="number" name="zip" id="city" 
                        
                        maxlength="10"
                        size="5"
                        placeholder="ZIP Code" />
                    </label>

           </div>
        <button type="submit" id="submit" onSubmit={addUser}>Done</button>
      
    </form>
</div>
<div class="circle">
    <form action="/signup" method="POST"  id="login">
        <legend>Account</legend>
      
        <label for="username" class="required"> 
        <input type="text" name="username" id="username" 
        required
        placeholder="User Name " />
        </label>
        
        <label for="password" class="required"></label>
        <input type="password" 
        name="password" 
        id="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Password"/> 

        <label for="password" class="required"></label>
        <input type="password" 
        name="password" 
        id="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Confirm your password"/> 
    
        <button type="submit">Done</button>
    </form>
</div>

    <label for="location" class="required"> 
        Search for your circles...
        <input type="text" name="location" id="locaion" 
        required
        placeholder="San Diego"/ >
        </label>

<div>
    <div class="flex-container">
        <div class="circle">
            San Diego 
        </div>
        <div>

        </div>
    </div>

</div>
        </>
    )    
}

export default Signup;