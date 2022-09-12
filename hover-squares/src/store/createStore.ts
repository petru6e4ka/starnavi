import { configureStore } from "@reduxjs/toolkit";
import { mockableApi } from "./mockable";
import { settingsReducer, hoveredReducer } from "./slice";

export const store = configureStore({
  reducer: {
    [mockableApi.reducerPath]: mockableApi.reducer,
    settings: settingsReducer,
    squares: hoveredReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockableApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
