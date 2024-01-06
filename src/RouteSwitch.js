import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogPost from "./pages/BlogPost";
import Test from "./pages/Test"


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog-post/:postid" element={<BlogPost />} />
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;