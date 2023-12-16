import React, {useState} from 'react';

const Comment = (props) =>{    
 
    function convertDate(unformatedDate){
        return Date(unformatedDate).slice(0,15);
    }        
 
    return(
        <>
            {props.comments.map((comment)=>{
                return(
                <div 
                key = {comment._id}
                className='comment-card'
                >
                    <div className='line'/>
                    <div className='commentContent'>{comment.content}</div>
                    <div className='commentInfo'>{comment.user.username}</div>
                    <div className='commentInfo'>{convertDate(comment.created)}</div>
                </div>
                )
            })}
        </>        
    )
          
}

export default Comment
