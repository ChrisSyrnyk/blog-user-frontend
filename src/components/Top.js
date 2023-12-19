import React, {Component} from 'react';
import BlogCardContainer from './blogCardContainer';

class Top extends Component{
    constructor(props){
        super(props)
    }


    
    

    render(){
        if(this.props.allBlogs){
            return(
                <>
                    <div className='top-blogs'>
                        <div className='center'>
                            <div className='top-blogs-container'>
                                <div className='center blogs-title'>Most Recent Blogs</div>
                                <div className='line'/>
                                <BlogCardContainer cardtype = {'topcard'} Blogs = {
                                    this.props.allBlogs.sort((a, b) => {
                                        if(a.created > b.created){
                                            return -1
                                        }
                                    }).slice(0,3)
                                }/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Top