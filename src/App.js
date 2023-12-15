import { useState } from 'react'

import headerstyles from './styles/header.css'
import footerstyles from './styles/footer.css'
import bodystyles from './styles/body.css'
import generalstyles from './styles/general.css'
import blogcardstyles from './styles/blogcard.css'
//import { Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';



function App() {

  
  const [allBlogs, setallBlogs] = useState(()=>{getBlogPosts()});
  
  /*
  function retrieveBlogs(){
    fetch('http://localhost:4000/blogposts/6578db1a9806964e4058d02a')
    .then((response) => response.json())
    .then((blogpost) => {
      setTopBlogs(blogpost);
    })
  }
  */

  function getBlogPosts(){
    fetch('http://localhost:4000/blogposts')
    .then((response) => response.json())
    .then((blogpost) => {
      setallBlogs(blogpost);
    })
  }

  
  return (
    <>
      <Body allBlogs = {allBlogs}/>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
