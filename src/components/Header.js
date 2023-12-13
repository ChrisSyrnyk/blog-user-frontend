import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='header-container'>
                    <div className='title-container'>
                        The Best Blogs
                    </div>
                    <div className='logsign-container rounded'>
                        <div>Login</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header