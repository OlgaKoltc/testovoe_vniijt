import { configureStore } from "@reduxjs/toolkit";
import { trainsApi } from "./services/trainsApi";

export const store = configureStore({
  reducer: {
    [trainsApi.reducerPath]: trainsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trainsApi.middleware),
});

// export type AppStore = ReturnType<typeof store>;
// export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
