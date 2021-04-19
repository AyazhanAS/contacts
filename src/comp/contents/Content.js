import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./article/Article";
import Review from "./bookreview/Review";
import Lessons from "./ourlessons/Lessons";
import Teachers from "./teachers/Teachers";
import VideoLesson from "./videoLesson/VideoLesson";
import Videomaterial from "./videomaterials/Videomaterial";
import Login from "./login/Login";
import Contacts from "./contacts/Contacts";
import ForgetPass from "./login/forgetPassword/ForgetPass";
import Search from "./search/Search";
import Withoutresults from "./searchWithoutResult/Withoutresults";
import Teacherspage from "./teacherspage/Teacherspage";

function Content() {
  return (
    <div>
      <Switch>
        {/* <Route path="/mainpage">
          <vi
        </Route> */}
        <Route path="/courses">
          <Lessons />
        </Route>
        <Route path="/articles">
          <Article />
        </Route>
        <Route path="/video">
          <VideoLesson />
        </Route>
        <Route path="/bookreview">
          <Review />
        </Route>

        <Route path="/teachers">
          <Teachers />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/forgetpass">
          <ForgetPass />
        </Route>

        <Route path="/responsive">
          <h3>HIHIHIHIH</h3>
        </Route>

        <Route path="/search">
          <Search/>
        </Route>

        <Route path="/searchWithoutResult">
          <Withoutresults/>
        </Route>

        <Route path="/teacherspage">
          <Teacherspage/>
        </Route>

        <Route path="/">
          <Videomaterial />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
