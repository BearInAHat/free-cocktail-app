declare type Cocktail = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: `strMeasure${number}`]: string | null;
  [key: `stringredient${number}`]: string | null;
};

declare type BaseError = {
  code: string;
  message: string;
};
