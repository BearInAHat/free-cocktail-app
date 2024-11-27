import { configureStore } from "@reduxjs/toolkit";

import cocktails from "Slices/cocktails";

export const store = configureStore({
  reducer: {
    cocktails,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
