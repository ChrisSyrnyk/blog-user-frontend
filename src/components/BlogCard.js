import React, {Component} from 'react';

class BlogCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        
        if (this.props.cardtype === 'topcard'){
            return(
                <>
                    <div className='blog-card'></div>
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
}

export default BlogCard