import React, {Component} from 'react';
import BlogCardContainer from './blogCardContainer';

class Top extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className='all-blogs'>
                    <div className='center'>
                        <div className='all-blogs-container'>
                            <div className='center blogs-title'>All Blogs</div>
                            <div className='line'/>
                            <div className='blog-card-container center'>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                            </div>
                            <div className='blog-card-container center'>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                            </div>
                            <div className='blog-card-container center'>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                                <div className='allblogs-card'></div>
                            </div>
                            
                            <BlogCardContainer/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Top