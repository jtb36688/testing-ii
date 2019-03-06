import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<Dashboard /> Expanding Hit Menu Checks", () => {
  const { queryByTestId, getByTestId } = render(<Dashboard />);
  const hitbutton = getByTestId("hit-btn");
  it("should contain hit option buttons after clicking hit", () => {
    fireEvent.click(hitbutton);
    expect(getByTestId("cancel-btn")).toBeInTheDocument();
    expect(getByTestId("single-btn")).toBeInTheDocument();
    expect(getByTestId("double-btn")).toBeInTheDocument();
    expect(getByTestId("triple-btn")).toBeInTheDocument();
  });
  it("should stop displaying hit option buttons after clicking cancel hit after clicking hit", () => {
    fireEvent.click(getByTestId("cancel-btn"))
    expect(queryByTestId("cancel-btn")).not.toBeInTheDocument();
    expect(queryByTestId("single-btn")).not.toBeInTheDocument();
    expect(queryByTestId("double-btn")).not.toBeInTheDocument();
    expect(queryByTestId("triple-btn")).not.toBeInTheDocument();
  })
});

describe("<Dashboard /> Main Button Checks", () => {
    const { getByTestId } = render(<Dashboard />)
    it("Should properly keep track of balls, strikes and outs", () => {
    fireEvent.click(getByTestId("strike-btn"))
    expect(getByTestId("outs")).toHaveTextContent('0') // shows outs start at 0
    expect(getByTestId("strikes")).toHaveTextContent('1')
    fireEvent.click(getByTestId("strike-btn"))
    expect(getByTestId("strikes")).toHaveTextContent('2')
    fireEvent.click(getByTestId("ball-btn"))
    expect(getByTestId("strikes")).toHaveTextContent('2')
    expect(getByTestId("balls")).toHaveTextContent('1') // balls and strikes both incremented
    fireEvent.click(getByTestId("strike-btn"))
    expect(getByTestId("strikes")).toHaveTextContent('0')
    expect(getByTestId("balls")).toHaveTextContent('0')
    expect(getByTestId("outs")).toHaveTextContent('1') // shows strikes.balls return to 0 and outs increment
    fireEvent.click(getByTestId("ball-btn"))
    expect(getByTestId("balls")).toHaveTextContent('1')
    fireEvent.click(getByTestId("ball-btn"))
    expect(getByTestId("balls")).toHaveTextContent('2')
    fireEvent.click(getByTestId("ball-btn"))
    expect(getByTestId("balls")).toHaveTextContent('3')
    fireEvent.click(getByTestId("strike-btn"))
    expect(getByTestId("balls")).toHaveTextContent('3')
    expect(getByTestId("strikes")).toHaveTextContent('1') // balls and strikes both incremented
    fireEvent.click(getByTestId("ball-btn"))
    expect(getByTestId("strikes")).toHaveTextContent('0')
    expect(getByTestId("balls")).toHaveTextContent('0')
    expect(getByTestId("outs")).toHaveTextContent('2') // shows balls, strikes return to 0 and outs increment
    })
})

describe("<Dashboard /> hit button Checks", () => {
    const { getByTestId } = render(<Dashboard />)
    const hitbutton = getByTestId("hit-btn");
    it("Should properly keep track of singles, doubles, triples, and homeruns", () => {
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("single-btn"))
        expect(getByTestId("singles")).toHaveTextContent('1')
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("double-btn"))
        expect(getByTestId("doubles")).toHaveTextContent('1')
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("triple-btn"))
        expect(getByTestId("triples")).toHaveTextContent('1')
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("homerun-btn"))
        expect(getByTestId("homeruns")).toHaveTextContent('1')
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("homerun-btn"))
        expect(getByTestId("homeruns")).toHaveTextContent('2')
        fireEvent.click(hitbutton);
        fireEvent.click(getByTestId("homerun-btn"))
        expect(getByTestId("homeruns")).toHaveTextContent('3')
})
})
