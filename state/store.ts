import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopBarReducer from "./TopBar/TopBarSlice";
import AuthReducer from "./Auth/AuthSlice";
import EmploisDuTempsReducer from "./EmploisDuTemps/EmploisDuTempsSlice";
import ProfileReducer from "./Profile/ProfileSlice";
import AnnoncesReducer from "./Annonces/AnnoncesSlice";
import AttestationInscriptionReducer from "./Demandes/AttestationInscription/AttestationInscriptionSlice";
import AttestationScolariteReducer from "./Demandes/AttestationScolarite/AttestationScolariteSlice";
import AttestationReussiteReducer from "./Demandes/AttestationReussite/AttestationReussiteSlice";

export const store = configureStore({
  reducer: {
    topBar: TopBarReducer,
    auth : AuthReducer,
    emploisDuTemps : EmploisDuTempsReducer,
    profile : ProfileReducer,
    annonces : AnnoncesReducer,
    attestationInscription : AttestationInscriptionReducer,
    attestationScolarite : AttestationScolariteReducer,
    attestationReussite : AttestationReussiteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();