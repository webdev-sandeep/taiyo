import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
export const store = configureStore({
  reducer: {
    // our reducers goes here
    contactReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
