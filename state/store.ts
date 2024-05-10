import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopBarReducer from "./TopBar/TopBarSlice";
import authReducer from "./Auth/AuthSlice";
import emploisDuTempsReducer from "./EmploisDuTemps/EmploisDuTempsSlice";
import profileReducer from "./Profile/ProfileSlice";
import AnnoncesReducer from "./Annonces/AnnoncesSlice";
import AttestationInscriptionReducer from "./Demandes/AttestationInscription/AttestationInscriptionSlice";

export const store = configureStore({
  reducer: {
    topBar: TopBarReducer,
    auth : authReducer,
    emploisDuTemps : emploisDuTempsReducer,
    profile : profileReducer,
    annonces : AnnoncesReducer,
    attestationInscription : AttestationInscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();