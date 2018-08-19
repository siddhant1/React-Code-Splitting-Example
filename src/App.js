import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { LoadAsync } from "./LoadableUtil";

const AsyncHome = LoadAsync("Home");
const AsyncDashboard = LoadAsync("Dashboard");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={AsyncHome} />
          <Route path="/dash" component={AsyncDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
