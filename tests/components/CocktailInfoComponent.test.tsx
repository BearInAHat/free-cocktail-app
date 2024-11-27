import React from "react";
import { render, screen } from "@testing-library/react";
import { CocktailInfoComponent } from "Components/CocktailInfoComponent/CocktailInfoComponent";
import { DetailsComponent } from "Components/DetailsComponent/DetailsComponent";
import { InstructionsComponent } from "Components/InstructionsComponent/InstructionsComponent";
import { IngredientsComponent } from "Components/IngredientsComponent/IngredientsComponent";
import "@testing-library/jest-dom";

jest.mock("Components/DetailsComponent/DetailsComponent", () => ({
  DetailsComponent: jest.fn(() => <div>DetailsComponent</div>),
}));
jest.mock("Components/InstructionsComponent/InstructionsComponent", () => ({
  InstructionsComponent: jest.fn(() => <div>InstructionsComponent</div>),
}));
jest.mock("Components/IngredientsComponent/IngredientsComponent", () => ({
  IngredientsComponent: jest.fn(() => <div>IngredientsComponent</div>),
}));

describe("CocktailInfoComponent", () => {
  const defaultProps = {
    drink: "Mojito",
    category: "Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball",
    instructions: "Mix ingredients.",
    ingredients: [
      { measure: "2 oz", ingredient: "Rum" },
      { measure: "1 oz", ingredient: "Lime juice" },
    ],
  };

  it("renders correctly with the given props", () => {
    render(<CocktailInfoComponent {...defaultProps} />);
    expect(screen.getByText("Mojito")).toBeInTheDocument();
    expect(screen.getByText("DetailsComponent")).toBeInTheDocument();
    expect(screen.getByText("InstructionsComponent")).toBeInTheDocument();
    expect(screen.getByText("IngredientsComponent")).toBeInTheDocument();
  });

  it("passes the correct props to the child components", () => {
    render(<CocktailInfoComponent {...defaultProps} />);
    expect(DetailsComponent).toHaveBeenCalledWith(
      { category: "Cocktail", alcoholic: "Alcoholic", glass: "Highball" },
      {}
    );
    expect(InstructionsComponent).toHaveBeenCalledWith(
      { instructions: "Mix ingredients." },
      {}
    );
    expect(IngredientsComponent).toHaveBeenCalledWith(
      { ingredients: defaultProps.ingredients },
      {}
    );
  });
});
