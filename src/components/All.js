import React, {Component} from 'react';
import BlogCard from './BlogCard';


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
                            <div className='all-blogs-card-container center'>
                                <BlogCard blogs = {this.props.allBlogs}/>
                            </div>
                        
                            
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Top