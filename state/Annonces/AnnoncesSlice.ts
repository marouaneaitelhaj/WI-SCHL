import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tannonce } from "state/types";
import { getAnnonces, getVisEntreprise, getVisScolaire } from "./AnnoncesActions";

type AnnonceState = {
    annonces: Tannonce[];
    VisEntreprise: Tannonce[];
    VisScolaire: Tannonce[];
    selectedAnnonce: Tannonce | null;
}

const initialState: AnnonceState = {
    annonces: [] as Tannonce[],
    VisEntreprise: [] as Tannonce[],
    VisScolaire: [] as Tannonce[],
    selectedAnnonce: null
}

export const AnnoncesSlice = createSlice({
    name: "Annonces",
    initialState,
    reducers: {
        setAnnonces: (state, action: PayloadAction<Tannonce[]>) => {
            state.annonces = action.payload;
        },
        setAnnonce: (state, action: PayloadAction<Tannonce>) => {
            state.selectedAnnonce = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAnnonces.fulfilled, (state, action) => {
            state.annonces = action.payload;
        }).addCase(getAnnonces.rejected, (state) => {
            // state.annonces = [];
        }).addCase(getAnnonces.pending, (state) => {
            // state.annonces = [];
        })
        builder.addCase(getVisEntreprise.fulfilled, (state, action) => {
            state.VisEntreprise = action.payload;
        }).addCase(getVisEntreprise.rejected, (state) => {
            // state.annonces = [];
        }).addCase(getVisEntreprise.pending, (state) => {
            // state.annonces = [];
        })
        builder.addCase(getVisScolaire.fulfilled, (state, action) => {
            state.VisScolaire = action.payload;
        }).addCase(getVisScolaire.rejected, (state) => {
            // state.annonces = [];
        }).addCase(getVisScolaire.pending, (state) => {
            // state.annonces = [];
        })
    }
});

export const { setAnnonces, setAnnonce } = AnnoncesSlice.actions;

export default AnnoncesSlice.reducer;