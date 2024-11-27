import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { uncapitalizeFirstLetter } from "Utils";

export const fetchGetCocktails = createAsyncThunk(
  "cocktails/fetchGetCocktails",
  async () => {
    try {
      const queryParameters = ["margarita", "mojito", "a1", "kir"];
      const loadingToast = toast.loading("Data loading...");
      const responses = await Promise.all(
        queryParameters.map((query) =>
          axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
          )
        )
      );
      const matchingCocktails: Cocktail[] = responses
        .map((response, index) => {
          return response.data.drinks.filter(
            (drink: { strDrink: string }) =>
              uncapitalizeFirstLetter(drink.strDrink) === queryParameters[index]
          );
        })
        .flat();
      toast.update(loadingToast, {
        render: "Data loaded",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      return matchingCocktails;
    } catch (error) {
      toast.dismiss();
      const baseError = error as BaseError;
      toast.error(`${baseError.code} ${baseError.message}`);
      return Promise.reject();
    }
  }
);
