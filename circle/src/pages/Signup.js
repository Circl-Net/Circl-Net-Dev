import react from 'react';

function Signup () {
    return (
        <>
        <h2>Join a world wide net of Circlers</h2>
        <div class="circle">
            {/*<form action="/signup" method="POST"  id="signup">
                <legend>Tell us a bit about yourself...</legend>
                <div class="flex-container">
                    <label for="firstname" class="required"> 
                        <input type="text" name="firstname" id="firstname" required pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)" placeholder="First Name " />
                    </label>
                    <label for="lastname" class="required"> 
                        <input type="text" name="lastname" id="lastname" required pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)" placeholder="Last Name " />
                    </label>
                    <label for="username" class="required">User Name: <input type="text" name="username" id="username" required pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)" placeholder="User Name" />
                    </label>
                </div>
                <div class="flex-container">
                    <p>Gender: </p>
                    <input type="radio" name="gender" id="male"/>
                    <label for="male">Male</label>

                    <input type="radio" name="gender" id="female"/>
                    <label for="female">Female</label>
                
                    <input type="radio" name="gender" id="nonbinary"/>
                    
                    <label for="nonbinary">Nonbinary</label>
                </div>
                <div class="flex-container">

                    <label for="dob" className="required"> Date of birth: 
                        <input type="date" name="lastname" id="dob" 
                        required
                        pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"/>
                    </label>
                </div>
                <div class="flex-container">
                    <div class="address">
                        <label for="address" class="required">Address: <input type="textarea" name="address" id="address" 
                    required
                    pattern="(\d.{9})|([A-Za-z\d])|([^ @]+@[^ @]+.[a-z]+)"
                    maxlength="50"
                    placeholder="Address Line 1 " />
                        </label>
                    </div>
            <div><label for="city" class="required city"> 
                    <input type="textarea" name="city" id="city" 
                    required
                    placeholder="City" />
                    </label></div> 
                
                <label for="state" class="required state"> 
                    <input type="textarea" name="state" id="state" 
                    required
                    placeholder="State " />
                    </label>
                    <label for="zip" class="required zip"> 
                        <input type="number" name="zip" id="city" 
                        required
                        maxlength="10"
                        size="5"
                        placeholder="ZIP Code" />
                    </label>

           </div>
        <button type="submit">Done</button>
      
    </form>*/}
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