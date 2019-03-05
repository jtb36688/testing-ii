import React, { Component } from "react";
import "./App.css";
import Display from "./Display.js";
import Dashboard from "./Dashboard.js";

class App extends Component {
    state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      singles: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      fouls: 0
    }
  strike = () => {
    if (this.state.strikes < 2) {
      this.setState(currentState => ({
        strikes: ++currentState.strikes
      }));
    } else {
      this.setState(currentState => ({
        balls: 0,
        strikes: 0,
        outs: ++currentState.outs
      }));
    }
  }
  ball = () => {
    if (this.state.balls < 3) {
      this.setState(currentState => ({
        balls: ++currentState.balls
      }));
    } else {
      this.setState(currentState => ({
        balls: 0,
        strikes: 0,
        outs: ++currentState.outs
      }));
    }
  }

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState(currentState => ({
        strikes: ++currentState.strikes,
        fouls: ++currentState.fouls
      }));
    } else {
      this.setState(currentState => ({
        fouls: ++currentState.fouls
      }));
    }
  }

  single = () => {
    console.log("SINGLE")
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      singles: ++currentState.singles
    }))
  }

  double = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      doubles: ++currentState.doubles
    }))
  }
  
  triple = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      triples: ++currentState.triples
    }))
  }
  
  homerun = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      homeruns: ++currentState.homeruns
    }))
  }
  

  render() {
    return (
      <div className="App">
        <h1>Baseball Scoreboard</h1>
        <Display gamedata={this.state} />
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          single={this.single}
          double={this.double}
          triple={this.triple}
          homerun={this.homerun}
        />
      </div>
    );
  }
}

export default App;
