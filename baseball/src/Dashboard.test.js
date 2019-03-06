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

