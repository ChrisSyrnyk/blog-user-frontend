import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogPost from "./pages/BlogPost";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog-post/:postid" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;