import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  state = {
    hitsexpanded: false,
    balls: 0,
    strikes: 0,
    outs: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    homeruns: 0,
    fouls: 0
  };

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
  };
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
  };

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
  };

  single = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      singles: ++currentState.singles
    }));
  };

  double = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      doubles: ++currentState.doubles
    }));
  };

  triple = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      triples: ++currentState.triples
    }));
  };

  homerun = () => {
    this.setState(currentState => ({
      balls: 0,
      strikes: 0,
      homeruns: ++currentState.homeruns
    }));
  };

  expandhits() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
  }
  handleSingle() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.single();
  }
  handleDouble() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.double();
  }
  handleTriple() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.triple();
  }
  handleHomerun() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.homerun();
  }
  render() {
    return this.state.hitsexpanded ? (
      <div className="DashboardWrapper">
        <Display gamedata={this.state} />
        <button
          data-testid="cancel-btn"
          className="DashboardButton"
          onClick={() => this.expandhits()}
        >
          Cancel Hit
        </button>
        <button
          data-testid="single-btn"
          className="DashboardButton"
          onClick={() => this.handleSingle()}
        >
          Single
        </button>
        <button
          data-testid="double-btn"
          className="DashboardButton"
          onClick={() => this.handleDouble()}
        >
          Double
        </button>
        <button
          data-testid="triple-btn"
          className="DashboardButton"
          onClick={() => this.handleTriple()}
        >
          Triple
        </button>
        <button
          data-testid="homerun-btn"
          className="DashboardButton"
          onClick={() => this.handleHomerun()}
        >
          Home Run
        </button>
      </div>
    ) : (
      <div className="DashboardWrapper">
        <Display gamedata={this.state} />
        <button
          data-testid="ball-btn"
          className="DashboardButton"
          onClick={() => this.ball()}
        >
          Ball
        </button>
        <button
          data-testid="strike-btn"
          className="DashboardButton"
          onClick={() => this.strike()}
        >
          Strike
        </button>
        <button
          data-testid="hit-btn"
          className="DashboardButton"
          onClick={() => this.expandhits()}
        >
          Hit
        </button>
        <button
          data-testid="foul-btn"
          className="DashboardButton"
          onClick={() => this.foul()}
        >
          Foul Ball
        </button>
      </div>
    );
  }
}

export default Dashboard;
