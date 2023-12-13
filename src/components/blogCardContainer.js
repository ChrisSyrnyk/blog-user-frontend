import React, {Component} from 'react';
import BlogCard from './BlogCard';

class BlogCardContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className='blog-card-container center'>
                    {/* Blog card component */}
                    <BlogCard cardtype = {this.props.cardtype}/>
                    <BlogCard cardtype = {this.props.cardtype}/>
                    <BlogCard cardtype = {this.props.cardtype}/>
                </div>
            </>
                        
        )
    }
}

export default BlogCardContainer