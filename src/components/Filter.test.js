import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter", () => {
  it("should be able to render the input box", () => {
    const { getByLabelText } = render(<Filter />);

    const fruitFilterInput = getByLabelText("fruitFilter");
    expect(fruitFilterInput).toBeInTheDocument();
  });

  it("should be able to correc the correct amout of fruits on load", () => {
    const { getAllByTestId, getAllByLabelText } = render(<Filter />);
    const fruits = getAllByLabelText("fruit");
    expect(fruits).toHaveLength(6);
  });

  it("should render only item starting with ap when filtered", () => {
    const {
      getByLabelText,
      getByText,
      getAllByLabelText,
      getAllByTestId
    } = render(<Filter />);
    const filterInputBox = getByLabelText("fruitFilter");
    fireEvent.change(filterInputBox, { target: { value: "ap" } });

    expect(getAllByLabelText("fruit")).toHaveLength(2);
    expect(getByText("apple")).toBeInTheDocument();
    expect(getByText("apricot")).toBeInTheDocument();
    expect(() => getByText("citrus")).toThrowError();
  });
});
