import React, {Component} from 'react';
import BlogCardContainer from './blogCardContainer';

class Top extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className='top-blogs'>
                    <div className='center'>
                        <div className='top-blogs-container'>
                            <div className='center blogs-title'>Top Blogs</div>
                            <div className='line'/>
                            <BlogCardContainer cardtype = {'topcard'}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Top