import React, {Component} from 'react';
import Top from './Top';
import All from './All';

class Body extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className='body-container'>
                    <Top/>
                    <All/>
                </div>
            </>
        )
    }
}

export default Body