import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>Baseball Scoreboard</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
