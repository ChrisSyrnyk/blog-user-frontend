import { useState } from "react";
import Login from './Login';

const Header = (props) => {

    const [logintoggle, setLogintoggle] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
    
    function logout(){
        localStorage.removeItem("token");
        window.location.reload();
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
                        href = '/blog-user-frontend'
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
                    <Login login = {logintoggle} setLogintoggle = {setLogintoggle} isLoggedIn = {isLoggedIn}/>
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