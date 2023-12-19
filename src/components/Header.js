import { useState } from "react";
import Login from './Login';

const Header = (props) => {

    const [logintoggle, setLogintoggle] = useState(false);
    
    function toggleLogin(){
        if (logintoggle === false){
            setLogintoggle(true)
        } else {
            setLogintoggle(false);
        }
    }

    
    return(
        <>
            <div className='header-container'>
                <a 
                href = '/home-feed'
                className='title-container'
                >
                    The Best Blogs
                </a>
                <div className='logsign-container rounded'>
                    <div
                    onClick={()=>toggleLogin()}
                    >Login</div>
                </div>
            </div>
            <Login login = {logintoggle} setLogintoggle = {setLogintoggle}/>
        </>
    )
    
}

export default Header