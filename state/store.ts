import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopBarReducer from "./TopBar/TopBarSlice";
import authReducer from "./Auth/authSlice";
import emploisDuTempsReducer from "./EmploisDuTemps/EmploisDuTempsSlice";

export const store = configureStore({
  reducer: {
    topBar: TopBarReducer,
    auth : authReducer,
    emploisDuTemps : emploisDuTempsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();