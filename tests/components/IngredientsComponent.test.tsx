import React from "react";
import { render, screen } from "@testing-library/react";
import { IngredientsComponent } from "Components/IngredientsComponent/IngredientsComponent";
import "@testing-library/jest-dom";

const ingredients = [
  { measure: "1 oz", ingredient: "Lemon Juice" },
  { measure: "2 oz", ingredient: "Gin" },
  { measure: "", ingredient: "Mint Leaves" },
];

describe("IngredientsComponent", () => {
  it("renders ingredients list correctly", () => {
    render(<IngredientsComponent ingredients={ingredients} />);
    ingredients.forEach(({ measure, ingredient }) => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
      expect(
        screen.getByText(measure || "at your discretion")
      ).toBeInTheDocument();
    });
  });

  it("displays 'at your discretion' for missing measure", () => {
    render(<IngredientsComponent ingredients={ingredients} />);
    expect(screen.getByText("at your discretion")).toBeInTheDocument();
  });

  it("renders the title 'List of ingredients:'", () => {
    render(<IngredientsComponent ingredients={ingredients} />);
    expect(screen.getByText("List of ingredients:")).toBeInTheDocument();
  });
});
