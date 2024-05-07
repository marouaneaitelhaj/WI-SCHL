// conventionStageSlice.ts
import { createSlice, createAsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';

import axios from 'axios';

interface ConventionStageState {
  etudiantDemandes: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ConventionStageState = {
  etudiantDemandes: [],
  loading: false,
  error: null,
};

export const fetchEtudiantDemandes = createAsyncThunk('conventionStage/fetchEtudiantDemandes', async () => {
  const response = await axios.get('/convention-stage');
  return response.data;
});

export const annuleStatus = createAsyncThunk('conventionStage/annuleStatus', async (numDem: string) => {
  const response = await axios.post('/convention-stage/change-statut', { num_dem: numDem });
  return response.data;
});

const conventionStageSlice = createSlice({
  name: 'conventionStage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEtudiantDemandes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEtudiantDemandes.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.etudiantDemandes = action.payload;
      })
    //   .addCase(fetchEtudiantDemandes.rejected, (state, action: PayloadAction<string>) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   })
      .addCase(annuleStatus.fulfilled, (state, action: PayloadAction<any>) => {
        const index = state.etudiantDemandes.findIndex((demande) => demande.num_dem === action.payload.num_dem);
        if (index !== -1) {
          state.etudiantDemandes[index] = action.payload;
        }
      });
  },
});

export default conventionStageSlice.reducer;