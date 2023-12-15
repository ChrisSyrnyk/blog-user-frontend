import React, {Component} from 'react';
import BlogCardContainer from './blogCardContainer';

class Top extends Component{
    constructor(props){
        super(props)
    }


    getTopBlogs(allBlogs){
        //this is where i will filter blogs by most comments and return top 3
        /*
        const topBlogs= null;
        allBlogs.forEach(blog => {
            console.log(blog);
        });
        */
       console.log(allBlogs)
        return allBlogs;
    }
    

    render(){
        return(
            <>
                <div className='top-blogs'>
                    <div className='center'>
                        <div className='top-blogs-container'>
                            <div className='center blogs-title'>Top Blogs</div>
                            <div className='line'/>
                            <BlogCardContainer cardtype = {'topcard'} Blogs = {this.props.allBlogs}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Top