import { useState } from 'react'

import headerstyles from './styles/header.css';
import footerstyles from './styles/footer.css';
import bodystyles from './styles/body.css';
import generalstyles from './styles/general.css';
import blogcardstyles from './styles/blogcard.css';
import blogstyles from './styles/blog.css';
import dropdownstyles from './styles/dropdown.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [allBlogs, setallBlogs] = useState(()=>{getBlogPosts()});


  function getBlogPosts(){
    fetch('https://heathered-nasal-cappelletti.glitch.me/blogposts')
    .then((response) => response.json())
    .then((blogpost) => {
      setallBlogs(blogpost);
    })
  }

  if (allBlogs){
  return (
    <>
      <Body allBlogs = {allBlogs}/>
      <Header setLoggedIn = {setLoggedIn}/>
      <Footer/>
    </>
  );
  } else {
    return(
    <>
      <Header setLoggedIn = {setLoggedIn}/>
      <div className='loading'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <div className='loadingtext'>
        <div className='connecting'>Connecting</div>
      </div>
      <Footer/>
    </>
    )
  }
  
}

export default App;
