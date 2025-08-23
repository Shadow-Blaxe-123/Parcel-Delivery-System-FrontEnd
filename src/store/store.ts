import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./slice/auth.slice";

import storage from "redux-persist/lib/storage"; // uses localStorage
import { persistStore, persistReducer } from "redux-persist";

// Config for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist the auth slice
};

// Combine reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice.reducer,
});

// Wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

// Export persistor for usage in your app entry point
export const persistor = persistStore(store);
