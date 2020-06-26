import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePageComponent from "./views/home-page/home-page.component";
import TestPageComponent from "./views/test-page/test-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePageComponent} />
        <Route path="/test" component={TestPageComponent} />
      </Router>
    </div>
  );
}

export default App;
