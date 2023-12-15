import React, {useState} from 'react';

const BlogCard = (props) =>{    

    
    console.log('ran')
        //convert date
        
        function convertDate(unformatedDate){
            return Date(unformatedDate).slice(0,15);
        }        

        if (props.cardtype === 'topcard'){
        return(
            
                    <>
                        {props.blogs.map((blog)=>{
                            return(
                            <div 
                            key = {blog._id}
                            className='blog-card'>
                                <div className='center blog-title'
                                onClick={()=>(console.log('clicked ' + blog._id))}
                                >{blog.title}</div>
                                <div className = 'line'/>
                                <div className='center blog-content'>{blog.content}</div>
                                <div className='blog-info'>
                                    <div className='blog-info'>{blog.username}</div>
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
                        <div className='allblogs-card'></div>
                    </>
                                
                )
        }
    
    
}

export default BlogCard