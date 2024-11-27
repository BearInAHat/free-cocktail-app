import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { DataStatus } from "src/store/types";
import { capitalizeFirstLetter } from "Utils";

const getCoctails = (state: RootState) => state.cocktails.data;

const getCocktailsStatus = (state: RootState) => state.cocktails.status;

export const getIsCocktailsLoaded = createSelector(
  getCocktailsStatus,
  (status) => status === DataStatus.succeeded
);
export const getIsCocktailsLoadedFailed = createSelector(
  getCocktailsStatus,
  (status) => status === DataStatus.failed
);

export const getIsCocktailsLoading = createSelector(
  getCocktailsStatus,
  (status) => status === DataStatus.loading
);

export const getCocktailCodes = createSelector(getCoctails, (cocktails) =>
  cocktails.map((cocktail) => cocktail.strDrink)
);

export const getCoctailByCode = (code: string) =>
  createSelector(getCoctails, (cocktails) => {
    if (!cocktails || !code) return;
    return cocktails.find(
      (cocktail) => cocktail.strDrink === capitalizeFirstLetter(code)
    );
  });
