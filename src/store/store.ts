import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habit-slice";
const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;