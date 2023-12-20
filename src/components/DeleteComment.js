import React, {useState} from 'react';

const DeleteComment = (props) =>{       
    
    async function deleteComment(){
        fetch('http://localhost:4000/comments/' + props.commentId, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
    }
    
    if(props.userId === localStorage.getItem("userId") && localStorage.getItem("token") !== null){
        return(
            <>
                <button className='delete-comment rounded'
                onClick={()=> deleteComment()}
                >Delete Comment</button>
            </>        
        )
    }
          
}

export default DeleteComment