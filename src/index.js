import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import { AppContainer } from "react-hot-loader";
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from "./app";

const render = Component => {
  ReactDOM.render(
  <AppContainer>
  <Component />
  </AppContainer>,
    document.getElementById("app")
);
};

render(App);
