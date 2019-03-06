import React from "react";
import Display from "./Display";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<Display /> <p> tag Checks", () => {
  it("there should be 8 p elements which render numbers", () => {
    const stateprops = {
      balls: 0,
      strikes: 0,
      outs: 0,
      singles: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      fouls: 0
    };
    const { getAllByTitle } = render(<Display gamedata={stateprops} />);
    const allptags = getAllByTitle("ptag").map(node => node.textContent);
    const numbers = allptags.filter(text => (!isNaN(parseFloat(text)) && isFinite(text)))

    expect(allptags).toHaveLength(8)
    expect(numbers).toHaveLength(8)
  });
});
