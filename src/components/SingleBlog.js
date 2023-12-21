import React, {Component, useState} from 'react';
import Comment from '../components/Comment';
import PostComment from './PostComment';

const SingleBlog = (props) =>{
    
    
    const [blogPostId, setBlogPostId] = useState(window.location.href.split('/')[4]);
    const [blogPost, setBlogPost] = useState(getBlogPost);
    const [Comments, setComments] = useState(null);

    function getBlogPost(){
        fetch('http://localhost:4000/blogposts/' + blogPostId)
        .then((response) => response.json())
        .then((blogpost) => {
          setBlogPost(blogpost.blog_post);
          setComments(blogpost.comments);
        })
      }

    function convertDate(unformatedDate){
        return Date(unformatedDate).slice(0,15);
    } 
    
    if(blogPost && Comments){
        return(
            
                <>
                    <div className='body-container'>
                        <div className='post-container'>
                            <div className='blogs-title center'>{blogPost.title}</div>
                            <div className='line'/>
                            <div className='postContent'>{blogPost.content}</div>
                            <div className='postInfo'>{blogPost.user.username}</div>
                            <div className='postInfo'>{convertDate(blogPost.created)}</div>
                        </div>
                        
                        <div className='comments-container'>
                            <Comment comments = {Comments}/>
                            <PostComment user = {blogPost.user.username} blogPostId = {blogPostId}/>
                        </div>
                        
                    </div>
                </>
            
        )
    }
}

export default SingleBlog