// attestationReussiteSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AttestationReussiteState {
  attestationReussite: any[];
  ajoutDemande: boolean;
  errorData: boolean;
  loading: boolean;
}

const initialState: AttestationReussiteState = {
  attestationReussite: [],
  ajoutDemande: false,
  errorData: false,
  loading: true,
};

export const getAttesReussite = createAsyncThunk('attestationReussite/getAttesReussite', async () => {
  const response = await axios.get('/attestation-reussite');
  return response.data;
});

export const ajoutNodeDemande = createAsyncThunk('attestationReussite/ajoutNodeDemande', async () => {
  const response = await axios.post('/attestation-reussite/save-demande', {});
  return response.data;
});

const attestationReussiteSlice = createSlice({
  name: 'attestationReussite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttesReussite.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttesReussite.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.attestationReussite = action.payload.demAttestationReussite;
        state.ajoutDemande = action.payload.ajoutDem;
      })
      .addCase(getAttesReussite.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      })
      .addCase(ajoutNodeDemande.pending, (state) => {
        state.loading = true;
      })
      .addCase(ajoutNodeDemande.fulfilled, (state, action: PayloadAction<any>) => {
        state.attestationReussite.push(action.payload.demAttestationReussite);
        state.ajoutDemande = action.payload.ajoutDem;
        state.loading = false;
      })
      .addCase(ajoutNodeDemande.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      });
  },
});

export default attestationReussiteSlice.reducer;