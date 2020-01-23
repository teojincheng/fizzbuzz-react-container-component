import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it(" should render with counter value as 0 when initialise", () => {
    const { getByText } = render(<Counter />);
    const counterValue = getByText("Counter Value: 0");
    expect(counterValue).toBeInTheDocument();
  });

  it("should render +1 button when initialise", () => {
    const { getByText } = render(<Counter />);

    const incrementButtonText = getByText("+1");

    expect(incrementButtonText).toBeInTheDocument();
  });

  it("should increase counter value to 1 after clicking increment button", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("+1");
    fireEvent.click(incrementButton);

    const counterValue = getByText("Counter Value: 1");
    expect(counterValue).toBeInTheDocument();
  });
});
