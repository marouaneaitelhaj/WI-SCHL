import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopBarReducer from "./TopBar/TopBarSlice";
import AuthReducer from "./Auth/AuthSlice";
import EmploisDuTempsReducer from "./EmploisDuTemps/SchedulesSlice";
import ProfileReducer from "./Profile/ProfileSlice";
import AnnoncesReducer from "./Annonces/AnnoncesSlice";
import AttestationInscriptionReducer from "./Demandes/AttestationInscription/EnrollmentCertificateSlice";
import AttestationScolariteReducer from "./Demandes/AttestationScolarite/AttestationScolariteSlice";
import AttestationReussiteReducer from "./Demandes/AttestationReussite/AttestationReussiteSlice";
import RetraitDiplomeReducer from "./Demandes/RetraitDiplome/RetraitDiplomeSlice";
import CarteEtudiantReducer from "./Demandes/CarteEtudiant/CarteEtudiantSlice";
import ConventionStageReducer from "./Demandes/ConventionStage/ConventionStageSlice";
import ChangementFiliereReducer from "./Demandes/ChangementFiliere/ChangementFiliereSlice";
import RetraitBaccalaureatReducer from "./Demandes/RetraitBaccalaureat/RetraitBaccalaureatSlice";
import ReleveNoteReducer from "./Demandes/ReleveNote/ReleveNoteSlice";
import Demande_reservationReducer from "./Demandes/Demande_reservation/Demande_reservationSlice";
import NoteReducer from "./Notes/NotesSlice";
import AbsencesReducer from "./Absences/AbsencesSlice";

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
    retraitDiplome : RetraitDiplomeReducer,
    retraitBaccalaureat : RetraitBaccalaureatReducer,
    carteEtudiant : CarteEtudiantReducer,
    conventionStage : ConventionStageReducer,
    changementFiliere : ChangementFiliereReducer,
    releveNote : ReleveNoteReducer,
    demande_reservation : Demande_reservationReducer,
    note : NoteReducer,
    absence : AbsencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();