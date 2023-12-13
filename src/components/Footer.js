import React, {Component} from 'react';

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
                        <div className='name-container'
                        onClick={()=>this.openInNewTab('https://christophersyrnyk.dev')}
                        >Christopher Syrnyk
                        </div>
                        <div className='git-container'>git</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer