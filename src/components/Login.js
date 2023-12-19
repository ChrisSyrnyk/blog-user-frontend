
const Login = (props) => {
    

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
            console.log('invalid username or password');
          } else {
            console.log(response);
            localStorage.setItem("token", response.token);
            document.getElementById('username').value = null;
            document.getElementById('password').value = null;
            props.setLogintoggle();
            window.location.reload();
          }
        })
    }

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
          }
        })
    }

    
    if (props.login){
        return(
            <>
                <div className='dropdown-container'>
                    <div className='login-form rounded'>
                    <div className="logsign-title">Login to your account</div>
                    <div className="signup-info">Don't have an account? Signup</div>
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
                    <div className='login-form rounded'>
                      <div className="logsign-title">Signup</div>
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