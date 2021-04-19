import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Content from "./comp/contents/Content";

import Lessons from "./comp/contents/ourlessons/Lessons";
import VideoLesson from "./comp/contents/videoLesson/VideoLesson";
import Footer from "./comp/footer/Footer";
import Nav from "./comp/nav/Nav";
// import Navbar from "./comp/nav/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        {/* <Navbar /> */}
        {/* <VideoLesson /> */}
        {/* <Lessons/> */}
        <Content />
        {/* <Login /> */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
