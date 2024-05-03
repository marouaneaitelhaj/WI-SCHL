import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tannonce } from "state/types";
import { getAnnonces } from "./AnnoncesActions";

type AnnonceState = {
    annonces: Tannonce[];
}

const initialState: AnnonceState = {
    annonces: []
}

export const AnnoncesSlice = createSlice({
    name: "Annonces",
    initialState,
    reducers: {
        setAnnonces: (state, action: PayloadAction<Tannonce[]>) => {
            state.annonces = action.payload;
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
    }
});

export const { setAnnonces } = AnnoncesSlice.actions;

export default AnnoncesSlice.reducer;