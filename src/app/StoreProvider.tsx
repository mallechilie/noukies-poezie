"use client";
import { AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  const persistRef = useRef<ReturnType<typeof persistStore>>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  if (!persistRef.current) {
    persistRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
