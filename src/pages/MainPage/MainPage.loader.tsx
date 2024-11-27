import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchGetCocktails } from "Slices/cocktails";
import {
  getCocktailCodes,
  getIsCocktailsLoaded,
} from "Slices/cocktails/selectors";
import { uncapitalizeFirstLetter } from "Utils";
import { ChildrenProps } from "Utils/types";

export const MainPageLoader = ({ children }: ChildrenProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCocktailsLoaded = useSelector(getIsCocktailsLoaded);
  const cocktailsCodes = useSelector(getCocktailCodes);

  // GET /cocktails
  useEffect(() => {
    if (isCocktailsLoaded) {
      if (window.location.pathname === "/") {
        navigate(`/${uncapitalizeFirstLetter(cocktailsCodes[0])}`);
      }
      return;
    }
    dispatch(fetchGetCocktails());
  }, [isCocktailsLoaded, cocktailsCodes, navigate]);

  return <>{children}</>;
};
