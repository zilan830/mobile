import React from "react";
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';
import "./web_modules/style/style.less";
import "normalize.css";
import Template from "./template";
import Home from "./home";
import Page1 from "./page1";
import Page2 from "./page2";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Template>
          <Home>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </Home>
        </Template>
      </BrowserRouter>
    );
  }
}