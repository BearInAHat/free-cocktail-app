import { fetchGetCocktails } from "./actions";
import {
  getIsCocktailsLoaded,
  getCocktailCodes,
  getCoctailByCode,
  getIsCocktailsLoadedFailed,
  getIsCocktailsLoading,
} from "./selectors";
import CocktailsSlice from "./reducers";

//async actions
export { fetchGetCocktails };

//selectors
export {
  getIsCocktailsLoaded,
  getIsCocktailsLoadedFailed,
  getCocktailCodes,
  getCoctailByCode,
  getIsCocktailsLoading,
};

//reducer
export default CocktailsSlice.reducer;
