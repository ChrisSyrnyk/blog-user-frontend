
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
          }
          console.log(response);
          localStorage.setItem("token", response.token);
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
                    <div className='login-form'>
                    <form>
                        <label className="input" htmlFor="username">Username: </label>
                        <input className="input" type="text" id="username" name="username"/>
                        <label className= "input" htmlFor="password">Password: </label>
                        <input  className="input" type="password" id="password" name="password"/> 
                    </form>
                    <button
                    onClick={()=> login()}
                    >test login</button>
                    </div>
                    <div className='login-form'>
                    <form>
                        <label className="input" htmlFor="signup-username">Username: </label>
                        <input className="input" type="text" id="signup-username" name="username"/>
                        <label className= "input" htmlFor="signup-password">Password: </label>
                        <input  className="input" type="password" id="signup-password" name="password"/> 
                    </form>
                    <button
                    onClick={()=> signup()}
                    >test signup</button>
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