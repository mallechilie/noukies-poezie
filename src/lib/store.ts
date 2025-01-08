import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "@/lib/features/basket/basketSlice";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "persist",
  storage
};

const rootReducer = combineReducers({
  basket: basketSlice
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  })


export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = configureStore({
      reducer: persistedReducer
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
