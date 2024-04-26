import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopBarReducer from "./TopBar/TopBarSlice";

export const store = configureStore({
  reducer: {
    topBar: TopBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();