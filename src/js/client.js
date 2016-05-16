import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FunPage from "./pages/FunPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Resume from "./pages/Resume";
import Services from "./pages/Services";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="resume" name="resume" component={Resume}></Route>
      <Route path="services" name="services" component={Services}></Route>
      <Route path="about" name="about" component={About}></Route>
      <Route path="funpage" name="funpage" component={FunPage}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
    </Route>
  </Router>,
app);
