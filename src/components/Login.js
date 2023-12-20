import { useState } from "react";
import Signup from "./Signup";

const Login = (props) => {
    
    const [signupToggle, setSignupToggle] = useState(null);

    function toggleSignup(){
      if(signupToggle === false){
        setSignupToggle(true);
      } else {
        setSignupToggle(false);
      }
    }

    async function login(){
        fetch('http://localhost:4000/login', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value,
          })
        })
        .then((response) => response.json())
        .then((response) => {
          if(response.message){
            document.getElementById('username').value = 'Invalid username or password'
          } else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("userId", response.result._id);
            document.getElementById('username').value = null;
            document.getElementById('password').value = null;
            props.setLogintoggle();
            window.location.reload();
          }
        })
    }

    

    
    if (props.login){
        return(
            <>
                <div className='dropdown-container'>
                    <div className='login-form rounded'>
                    <div className="logsign-title">Login to your account</div>
                    <div className="flexrow">
                      <div className="signup-info">Don't have an account?</div>
                      <div 
                      onClick={()=> toggleSignup()}
                      className="signup-info signup-button"
                      >Sign Up</div>
                    </div>
                    <div className="logsign-form center">
                        <label className="signup-info" htmlFor="username">Username </label>
                        <input className="logsign-input rounded" type="text" id="username" name="username"/>
                        <label className= "signup-info" htmlFor="password">Password: </label>
                        <input  className="logsign-input rounded" type="password" id="password" name="password"/> 
                    </div>
                    <button
                    className="form-button rounded"
                    onClick={()=> login()}
                    >Login</button>
                    </div>

                    <Signup signup = {signupToggle} toggleSignup = {toggleSignup}/>

                    <button 
                    onClick={()=>console.log(localStorage.getItem("token"))}
                    className='input'
                    >view token</button>
                    <button
                    onClick={()=>localStorage.removeItem("token")}
                    >remove token</button>

                    
                </div>
            </>
        )
    }
}

export default Login