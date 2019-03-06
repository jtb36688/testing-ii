import React from "react";

function Display(props) {
  return (
    <div>
      <div className="TopDisplayWrapper">
        <div className="DisplayItem">
          <h2>Balls</h2>
          <p title="ptag" data-testid="balls">{props.gamedata.balls}</p>
        </div>
        <div className="DisplayItem">
          <h2>Strikes</h2>
          <p title="ptag" data-testid="strikes">{props.gamedata.strikes}</p>
        </div>
        <div className="DisplayItem">
          <h2>Outs</h2>
          <p title="ptag" data-testid="outs">{props.gamedata.outs}</p>
        </div>
      </div>
      <h2>Batter Hit Stats</h2>
      <div className="BottomDisplayWrapper">
      <div className="HitItem">
          <h2>Fouls</h2>
          <p title="ptag" data-testid="fouls">{props.gamedata.fouls}</p>
        </div>
        <div className="HitItem">
          <h2>Singles</h2>
          <p title="ptag" data-testid="singles">{props.gamedata.singles}</p>
        </div>
        <div className="HitItem">
          <h2>Doubles</h2>
          <p title="ptag" data-testid="doubles">{props.gamedata.doubles}</p>
        </div>
        <div className="HitItem">
          <h2>Triples</h2>
          <p title="ptag" data-testid="triples">{props.gamedata.triples}</p>
        </div>
        <div className="HitItem">
          <h2>Home Runs</h2>
          <p title="ptag" data-testid="homeruns">{props.gamedata.homeruns}</p>
        </div>
      </div>
    </div>
  );
}

export default Display;
