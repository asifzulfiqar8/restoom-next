"use client";
const { configureStore } = require("@reduxjs/toolkit");
const { authApi } = require("./features/auth/authApi");
import { Provider } from "react-redux";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
