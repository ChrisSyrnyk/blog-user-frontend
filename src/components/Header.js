import { useState, useEffect } from "react";
import Login from './Login';

const Header = (props) => {

    const [logintoggle, setLogintoggle] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

    useEffect(() => {
        // This effect uses the `value` variable,
        // so it "depends on" `value`.
        setIsLoggedIn(localStorage.getItem("token"))
      }, [logintoggle])  // pass `value` as a dependency
    
    function logout(){
        localStorage.removeItem("token");
        //remove window reload
        setIsLoggedIn(null);
        props.setLoggedIn(false);
    }
    
    function toggleLogin(){
        if (logintoggle === false){
            setLogintoggle(true)
        } else {
            setLogintoggle(false);
        }
    }

        if(!isLoggedIn){
            return(
                <>
                    <div className='header-container'>
                        <a 
                        href = '/'
                        className='title-container'
                        >
                            Culinary Chronicles
                        </a>
                        <div className='logsign-container rounded'>
                            <div
                            onClick={()=>toggleLogin()}
                            >Login</div>
                        </div>
                    </div>
                    <Login login = {logintoggle} setLogintoggle = {setLogintoggle} isLoggedIn = {isLoggedIn} setLoggedIn = {props.setLoggedIn}/>
                </>
            )
        } else {
            return(
            <>
                <div className='header-container'>
                    <a 
                    href = '/'
                    className='title-container'
                    >
                        Culinary Chronicles
                    </a>
                    <div className='logsign-container rounded'>
                        <div
                        onClick={()=>logout()}
                        >Logout</div>
                    </div>
                </div>
            </>
            )
        }
    
    
}

export default Header