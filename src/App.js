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
  return (
    <>
      <Body/>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
