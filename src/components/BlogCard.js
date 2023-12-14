import React, {Component} from 'react';

class BlogCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        
        if (this.props.cardtype === 'topcard'){
            return(
                <>
                    <div className='blog-card'>
                        <div className='center blog-title'>title</div>
                        <div className = 'line'/>
                        <div className='center blog-content'>content for the blog testing to see what happens
                        when i fill the blog content section with content and it starts to overflow. looks like i will
                        need more content to make that happen. more content still. going to start copying and pasting content
                        to make it fill the div. </div>
                        <div className='blog-info'>
                            <div className='blog-info'>author:</div>
                            <div className='blog-info'>December 24</div>
                        </div>
                    </div>
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