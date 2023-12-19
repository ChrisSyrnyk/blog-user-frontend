import React, {Component} from 'react';
import BlogCard from './BlogCard';

class BlogCardContainer extends Component{
    constructor(props){
        super(props)
    }


    render(){
            if(this.props.Blogs){
            return(
                <>
                    <div className='blog-card-container center'>
                        {/* Blog card component */}
                        <BlogCard 
                        cardtype = {this.props.cardtype}
                        blogs = {this.props.Blogs}
                        />
                    </div>
                </>
                            
            )
            }
    }
}

export default BlogCardContainer