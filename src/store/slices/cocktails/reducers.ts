import { createSlice } from "@reduxjs/toolkit";
import { fetchGetCocktails } from "./actions";
import { DataStatus } from "src/store/types";

type CocktailsState = {
  data: Cocktail[];
  status: DataStatus;
  error: string | null;
};

const initialState: CocktailsState = {
  data: [],
  status: DataStatus.idle,
  error: null,
};

const Slice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCocktails.pending, (state) => {
        state.status = DataStatus.loading;
        state.error = null;
      })
      .addCase(fetchGetCocktails.fulfilled, (state, action) => {
        state.status = DataStatus.succeeded;
        state.data = action.payload;
      })
      .addCase(fetchGetCocktails.rejected, (state, action) => {
        state.status = DataStatus.failed;
        state.error = action.error.message || "Failed to load cocktails";
      });
  },
});

export default Slice;
