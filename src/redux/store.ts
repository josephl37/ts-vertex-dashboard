import { configureStore } from "@reduxjs/toolkit";

import makerReducer from "./makerSlice";

const store = configureStore({
  reducer: {
    data: makerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
