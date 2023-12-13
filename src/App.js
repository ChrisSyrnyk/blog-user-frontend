import headerstyles from './styles/header.css'
import footerstyles from './styles/footer.css'
import bodystyles from './styles/body.css'
import generalstyles from './styles/general.css'
//import { Link } from "react-router-dom";

function openInNewTab(url){
  window.open(url, '_blank').focus();
};

function App() {
  return (
    <>
      

      <div className='body-container'>
        <div className='top-blogs'>
          <div className='center'>
            <div className='top-blogs-container'>
              <div className='center top-blogs-title'>Top Blogs</div>
              <div className='line'></div>
              <div className='blog-card-container'>
                <div className='blog-card'></div>
                <div className='blog-card'></div>
                <div className='blog-card'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='all-blogs'></div>
      </div>

      {/*Header section*/}
      <div className='header-container'>
        <div className='title-container'>
          The Best Blogs
        </div>
        <div className='logsign-container rounded'>
          <div>Login</div>
        </div>
      </div>

      {/*Footer section*/}
      <div className='footer-container'>
        <div className='center'>
          <div className='name-container'
           onClick={()=>openInNewTab('https://christophersyrnyk.dev')}
          >Christopher Syrnyk</div>
          <div className='git-container'>git</div>
        </div>
      </div>
    </>
  );
}

export default App;
