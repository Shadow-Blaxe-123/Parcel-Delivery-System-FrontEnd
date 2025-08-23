import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./slice/auth.slice";
// ...

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
