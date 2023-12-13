import React, {Component} from 'react';
import gitIcon from '../img/github.svg'

class Footer extends Component{
    constructor(props){
        super(props)
    }

    openInNewTab(url){
        window.open(url, '_blank').focus();
      };
    


    render(){
        return(
            <>
                <div className='footer-container'>
                     <div className='center'>
                        <div className='name-container center'
                        onClick={()=>this.openInNewTab('https://christophersyrnyk.dev')}
                        >
                            Christopher Syrnyk
                        </div>
                        <img src = {gitIcon} 
                        className='git-container'
                        onClick={()=>this.openInNewTab('https://github.com/ChrisSyrnyk')}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Footer