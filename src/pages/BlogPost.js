import { useState } from 'react'

import headerstyles from '../styles/header.css'
import footerstyles from '../styles/footer.css'
import bodystyles from '../styles/body.css'
import generalstyles from '../styles/general.css'
import blogcardstyles from '../styles/blogcard.css'
import blogstyles from '../styles/blog.css';
import dropdownstyles from '../styles/dropdown.css';
//import { Link } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import SingleBlog from '../components/SingleBlog';



const BlogPost = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <>
            <SingleBlog/>
            <Header setLoggedIn = {setLoggedIn}/>
            <Footer/>
        </>
    )

};

export default BlogPost;