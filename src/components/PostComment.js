import React, {useState} from 'react';

const PostComment = (props) =>{   
    
    async function postComment(){
        fetch('http://localhost:4000/comments/comment', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            "content": document.getElementById('createcomment').value,
            "created": new Date(),
            "blogPostId": props.blogPostId,
          })
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
    }


    if(localStorage.getItem("token") !== null){
        return(
            <>
                <div className='comment-card'>
                    <div className='line'/>
                    <div className='postInfo'>Reply to {props.user}</div>
                    <textarea className="commentInput center rounded"id="createcomment" name="createcomment"></textarea>
                    <button
                    className='delete-comment rounded'
                    onClick={()=>postComment()}
                    >Submit Reply</button>
                </div>
            </>        
        )
    } else {
        return(
            <>
                <div className='comment-card'>
                    <div className='line'/>
                    <div className='flexrow'>
                        <div className='postInfo'>Login to reply to {props.user}</div>
                    </div>
                </div>
            </>        
        )
    }
          
}

export default PostComment