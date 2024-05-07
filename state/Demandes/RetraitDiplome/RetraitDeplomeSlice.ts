import { createSlice } from "@reduxjs/toolkit";
import { annulerDemande } from "./RetraitDeplomeActions";

export const retraitDeplomeSlice = createSlice({
    name: 'retraitDeplome',
    initialState: {
      demandeRetraitDeplome: {},
      status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
      error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(annulerDemande.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(annulerDemande.fulfilled, (state, action) => {
          state.status = 'succeeded';
          // Add any fetched posts to the array
          state.demandeRetraitDeplome = action.payload;
        })
        .addCase(annulerDemande.rejected, (state) => {
          state.status = 'failed';
          state.error = 'Failed to fetch';
        });
    },
  });
  
  export default retraitDeplomeSlice.reducer;