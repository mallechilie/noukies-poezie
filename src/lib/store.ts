import { basketReducer } from "@/lib/features/basket/basketSlice";
import storage from "@/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const basketPersistConfig = {
  key: "persist",
  storage,
  whitelist: ["products", "total"],
};

const rootReducer = combineReducers({
  basket: persistReducer(basketPersistConfig, basketReducer),
});

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
  if (typeof window === "undefined") {
    return store;
  }
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
