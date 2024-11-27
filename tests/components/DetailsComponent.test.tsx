import React from "react";
import { render, screen } from "@testing-library/react";
import { DetailsComponent } from "Components/DetailsComponent/DetailsComponent";
import "@testing-library/jest-dom";

describe("DetailsComponent", () => {
  const defaultProps = {
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball",
  };

  it("renders correctly with the given props", () => {
    render(<DetailsComponent {...defaultProps} />);
    expect(screen.getByText("Cocktail")).toBeInTheDocument();
    expect(screen.getByText("Alcoholic")).toBeInTheDocument();
    expect(screen.getByText("Highball")).toBeInTheDocument();
  });

  it("renders all cocktail detail fields", () => {
    render(<DetailsComponent {...defaultProps} />);
    const detailElements = screen.getAllByText(
      (content) => content.trim() !== ""
    );
    expect(detailElements).toHaveLength(3);
  });
});
