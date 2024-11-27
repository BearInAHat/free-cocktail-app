import React from "react";
import { render, screen } from "@testing-library/react";
import { CocktailImageComponent } from "Components/CocktailImageComponent/CocktailImageComponent";
import "@testing-library/jest-dom";

describe("CocktailImageComponent", () => {
  test("renders image with the correct src and alt text", () => {
    const drinkThumb = "https://example.com/image.jpg";
    const drink = "Margarita";
    render(<CocktailImageComponent drinkThumb={drinkThumb} drink={drink} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", drinkThumb);
    expect(image).toHaveAttribute("alt", drink);
  });

  test("uses fallback alt text when no 'drink' prop is provided", () => {
    const drinkThumb = "https://example.com/image.jpg";
    const drink = "";
    render(<CocktailImageComponent drinkThumb={drinkThumb} drink={drink} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Drink");
  });

  test("renders with an empty image source when no 'drinkThumb' prop is provided", () => {
    const drink = "Margarita";
    const drinkThumb = "";
    render(<CocktailImageComponent drinkThumb={drinkThumb} drink={drink} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "");
  });
});
