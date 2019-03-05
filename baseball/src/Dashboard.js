import React from "react";

class Dashboard extends React.Component {
  state = {
    hitsexpanded: false
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
    this.props.single();
  }
  handleDouble() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.props.double();
  }
  handleTriple() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.props.triple();
  }
  handleHomerun() {
    this.setState(currentState => ({
      hitsexpanded: !currentState.hitsexpanded
    }));
    this.props.homerun();
  }
  render() {
    return this.state.hitsexpanded ? (
      <div className="DashboardWrapper">
        <button className="DashboardButton" onClick={() => this.expandhits()}>
          Cancel Hit
        </button>
        <button className="DashboardButton" onClick={() => this.handleSingle()}>
          Single
        </button>
        <button className="DashboardButton" onClick={() => this.handleDouble()}>
          Double
        </button>
        <button className="DashboardButton" onClick={() => this.handleTriple()}>
          Triple
        </button>
        <button
          className="DashboardButton"
          onClick={() => this.handleHomerun()}
        >
          Home Run
        </button>
      </div>
    ) : (
      <div className="DashboardWrapper">
        <button className="DashboardButton" onClick={() => this.props.ball()}>
          Ball
        </button>
        <button className="DashboardButton" onClick={() => this.props.strike()}>
          Strike
        </button>
        <button className="DashboardButton" onClick={() => this.expandhits()}>
          Hit
        </button>
        <button className="DashboardButton" onClick={() => this.props.foul()}>
          Foul Ball
        </button>
      </div>
    );
  }
}

export default Dashboard;
