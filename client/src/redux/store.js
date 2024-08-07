import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.js";
import sideBarReducer from "./sideBar.js";
import themeReducer from "./theme.js";
import searchReducer from "./search.js";
import windowReducer from "./window.js";
import purchaseReducer from "./purchase.js";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};
//them vao sau khi viet xong slice
const rootReducer = combineReducers({
  auth: authReducer,
  sideBar: sideBarReducer,
  theme: themeReducer,
  search: searchReducer,
  window: windowReducer,
  purchase: purchaseReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
