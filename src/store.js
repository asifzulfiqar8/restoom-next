"use client";
const { configureStore } = require("@reduxjs/toolkit");
const { authApi } = require("./features/auth/authApi");
import { Provider } from "react-redux";
import authReducer from "./features/auth/authSlice";
import { sensorApi } from "./features/sensor/sensorApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [sensorApi.reducerPath]: sensorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(sensorApi.middleware),
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
