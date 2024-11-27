import {
  getCocktailCodes,
  getCoctailByCode,
  getIsCocktailsLoaded,
  getIsCocktailsLoadedFailed,
  getIsCocktailsLoading,
} from "Slices/cocktails";
import { RootState } from "src/store";
import { DataStatus } from "src/store/types";
import "@testing-library/jest-dom";

const mockState: RootState = {
  cocktails: {
    data: [
      {
        strDrink: "Mojito",
        idDrink: "",
        strCategory: "",
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strDrinkThumb: "",
      },
      {
        strDrink: "Margarita",
        idDrink: "",
        strCategory: "",
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strDrinkThumb: "",
      },
    ],
    status: DataStatus.succeeded,
    error: null,
  },
};

describe("Cocktail Selectors", () => {
  it("should return true when cocktails are loaded", () => {
    const result = getIsCocktailsLoaded(mockState);
    expect(result).toBe(true);
  });

  it("should return false when cocktails are not loaded", () => {
    const failedState = {
      cocktails: { ...mockState.cocktails, status: DataStatus.failed },
    };
    const result = getIsCocktailsLoaded(failedState);
    expect(result).toBe(false);
  });

  it("should return true when cocktails failed to load", () => {
    const failedState = {
      cocktails: { ...mockState.cocktails, status: DataStatus.failed },
    };
    const result = getIsCocktailsLoadedFailed(failedState);
    expect(result).toBe(true);
  });

  it("should return false when cocktails are loaded", () => {
    const result = getIsCocktailsLoadedFailed(mockState);
    expect(result).toBe(false);
  });

  it("should return true when cocktails are loading", () => {
    const loadingState = {
      cocktails: { ...mockState.cocktails, status: DataStatus.loading },
    };
    const result = getIsCocktailsLoading(loadingState);
    expect(result).toBe(true);
  });

  it("should return false when cocktails are not loading", () => {
    const result = getIsCocktailsLoading(mockState);
    expect(result).toBe(false);
  });

  it("should return an array of cocktail names", () => {
    const result = getCocktailCodes(mockState);
    expect(result).toEqual(["Mojito", "Margarita"]);
  });

  it("should return the correct cocktail when the code is valid", () => {
    const result = getCoctailByCode("Mojito")(mockState);
    expect(result).toEqual({
      strDrink: "Mojito",
      idDrink: "",
      strCategory: "",
      strAlcoholic: "",
      strGlass: "",
      strInstructions: "",
      strDrinkThumb: "",
    });
  });

  it("should return undefined when no matching cocktail is found", () => {
    const result = getCoctailByCode("NonExistentCocktail")(mockState);
    expect(result).toBeUndefined();
  });

  it("should return undefined when no code is provided", () => {
    const result = getCoctailByCode("")(mockState);
    expect(result).toBeUndefined();
  });

  it("should return the correct cocktail when the code is capitalized", () => {
    const result = getCoctailByCode("mojito")(mockState);
    expect(result).toEqual({
      strDrink: "Mojito",
      idDrink: "",
      strCategory: "",
      strAlcoholic: "",
      strGlass: "",
      strInstructions: "",
      strDrinkThumb: "",
    });
  });
});
