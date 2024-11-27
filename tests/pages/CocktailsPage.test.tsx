import { generateIngredients } from "Pages/CocktailPage/utils";
import "@testing-library/jest-dom";

interface TestCocktail {
  [key: string]: string | null;
}

describe("generateIngredients", () => {
  it("should return an empty array when cocktail has no ingredients", () => {
    const cocktail: TestCocktail = {
      strMeasure1: null,
      strIngredient1: null,
    };
    const result = generateIngredients(cocktail as Cocktail);
    expect(result).toEqual([]);
  });

  it("should return ingredients with measurements when present", () => {
    const cocktail: TestCocktail = {
      strMeasure1: "1 oz",
      strIngredient1: "Rum",
      strMeasure2: "1/2 oz",
      strIngredient2: "Sugar",
    };
    const result = generateIngredients(cocktail as Cocktail);
    expect(result).toEqual([
      { measure: "1 oz", ingredient: "Rum" },
      { measure: "1/2 oz", ingredient: "Sugar" },
    ]);
  });

  it("should return only valid ingredients (non-null measures and ingredients)", () => {
    const cocktail: TestCocktail = {
      strMeasure1: "2 oz",
      strIngredient1: "Gin",
      strMeasure2: null,
      strIngredient2: null,
    };
    const result = generateIngredients(cocktail as Cocktail);
    expect(result).toEqual([{ measure: "2 oz", ingredient: "Gin" }]);
  });

  it("should handle missing measures correctly (return empty string for measure)", () => {
    const cocktail: TestCocktail = {
      strMeasure1: null,
      strIngredient1: "Lime",
      strMeasure2: "1 oz",
      strIngredient2: "Rum",
    };
    const result = generateIngredients(cocktail as Cocktail);
    expect(result).toEqual([
      { measure: "", ingredient: "Lime" },
      { measure: "1 oz", ingredient: "Rum" },
    ]);
  });

  it("should handle missing ingredients correctly (return empty string for ingredient)", () => {
    const cocktail: TestCocktail = {
      strMeasure1: "1 oz",
      strIngredient1: null,
      strMeasure2: "1/2 oz",
      strIngredient2: "Lime",
    };
    const result = generateIngredients(cocktail as Cocktail);
    expect(result).toEqual([
      { measure: "1 oz", ingredient: "" },
      { measure: "1/2 oz", ingredient: "Lime" },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
