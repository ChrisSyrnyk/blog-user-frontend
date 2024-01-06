import React, {useState} from 'react';

const BlogCard = (props) =>{    
        //convert date
        function convertDate(unformatedDate){
            return unformatedDate.slice(0,10)
        }        
        if (props.blogs){
            if (props.cardtype === 'topcard'){
            return(
                        <>
                            {props.blogs.map((blog)=>{
                                return(
                                <div 
                                key = {blog._id}
                                className='blog-card'>
                                    <a className='center blog-title'
                                    href = {"/blog-post/" + blog._id}
                                    >{blog.title}</a>
                                    <div className = 'line'/>
                                    <div className='center blog-content'>{blog.content}</div>
                                    <div className='blog-info-container'>
                                         <div className='blog-info'>{blog.user.username}</div>
                                        <div className='blog-info'>{convertDate(blog.created)}</div>
                                    </div>
                                </div>
                                )
                            })}
                        </>        
                    )
                } else {
                    return(
                        <>
                            {props.blogs.map((blog)=>{
                                return(
                                <div 
                                key = {blog._id}
                                className='allblogs-card'>
                                    <a className='center blog-title'
                                    href = {"/blog-post/" + blog._id}
                                    >{blog.title}</a>
                                    <div className = 'line'/>
                                    <div className='center blog-content'>{blog.content}</div>
                                    <div className='blog-info-container'>
                                        <div className='blog-info'>{blog.user.username}</div>
                                        <div className='blog-info'>{convertDate(blog.created)}</div>
                                    </div>
                                </div>
                                )
                            })}
                        </>           
                    )
            }
        }
    
    
}

export default BlogCard