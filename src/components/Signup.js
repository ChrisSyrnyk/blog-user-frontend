const Signup = (props) => {
    
    async function signup(){
        fetch('http://localhost:4000/signup', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "username": document.getElementById('signup-username').value,
            "password": document.getElementById('signup-password').value,
            "type": "user",
          })
        })
        .then((response) => response.json())
        .then((response) => {
          if(response.message){
            console.log('User already exists'); 
          } else {
            console.log('account created');
            document.getElementById('signup-username').value = null;
            document.getElementById('signup-password').value = null;
            props.toggleSignup();
          }
        })
    }

    
    if (props.signup){
        return(
            <>
                <div className='login-form rounded'>
                      <div className="logsign-title">Sign Up</div>
                    <div className="logsign-form center">
                        <label className="signup-info" htmlFor="signup-username">Username: </label>
                        <input className="logsign-input rounded" type="text" id="signup-username" name="username"/>
                        <label className= "signup-info" htmlFor="signup-password">Password: </label>
                        <input  className="logsign-input rounded" type="password" id="signup-password" name="password"/> 
                    </div>
                    <button
                    className="form-button rounded"
                    onClick={()=> signup()}
                    >Signup</button>
                    </div>
                
            </>
        )
    }
}

export default Signup