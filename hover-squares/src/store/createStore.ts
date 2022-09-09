import { configureStore } from "@reduxjs/toolkit";
import { mockableApi } from "./mockable";

export const store = configureStore({
  reducer: {
    [mockableApi.reducerPath]: mockableApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockableApi.middleware),
});
