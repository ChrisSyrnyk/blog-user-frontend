const Signup = (props) => {
    
    async function signup(){
      if(document.getElementById('signup-password').value.length > 0 
      && document.getElementById('signup-username').value.length){
        fetch('https://heathered-nasal-cappelletti.glitch.me/signup', {
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
            document.getElementById('signup-username').placeholder = 'User already exists'
          } else {
            document.getElementById('signup-username').value = null;
            document.getElementById('signup-password').value = null;
            props.toggleSignup();
          }
        })
      } else {
        document.getElementById('signup-username').placeholder = "username empty";
        document.getElementById('signup-password').placeholder = "password empty";
      }
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