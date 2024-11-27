import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  getCoctailByCode,
  getIsCocktailsLoaded,
  getIsCocktailsLoadedFailed,
  getIsCocktailsLoading,
} from "Slices/cocktails";
import { CocktailImageComponent } from "Components/CocktailImageComponent/CocktailImageComponent";
import { CocktailInfoComponent } from "Components/CocktailInfoComponent/CocktailInfoComponent";
import { NotFoundComponent } from "Components/NotFoundComponent/NotFoundComponent";
import { ErrorDataLoadingComponent } from "Components/ErrorDataLoadingComponent/ErrorDataLoadingComponent";
import { LoaderComponent } from "Components/LoaderComponent/LoaderComponent";
import { capitalizeFirstLetter, removeSlashes } from "Utils";
import { generateIngredients } from "./utils";

import "./CocktailPage.styl";

type Ingredients = { measure: string; ingredient: string }[] | null;

export const CocktailPage: React.FC = () => {
  const { pathname } = useLocation();
  const cocktail = useSelector(
    getCoctailByCode(capitalizeFirstLetter(removeSlashes(pathname)))
  );
  const isCocktailsLoaded = useSelector(getIsCocktailsLoaded);
  const isCocktailsLoadedFailed = useSelector(getIsCocktailsLoadedFailed);
  const isCocktailsLoading = useSelector(getIsCocktailsLoading);

  const [ingredients, setIngredients] = useState<Ingredients>(null);

  useEffect(() => {
    if (!cocktail) return;
    setIngredients(generateIngredients(cocktail));
  }, [cocktail]);

  return (
    <div className="cocktailPageWrapper">
      {isCocktailsLoading && <LoaderComponent />}
      {isCocktailsLoaded && !cocktail && <NotFoundComponent />}
      {isCocktailsLoadedFailed && <ErrorDataLoadingComponent />}
      {cocktail && (
        <>
          <CocktailInfoComponent
            ingredients={ingredients}
            category={cocktail.strCategory}
            alcoholic={cocktail.strAlcoholic}
            glass={cocktail.strGlass}
            drink={cocktail.strDrink}
            instructions={cocktail.strInstructions}
          />
          <CocktailImageComponent
            drinkThumb={cocktail.strDrinkThumb}
            drink={cocktail.strDrink}
          />
        </>
      )}
    </div>
  );
};
