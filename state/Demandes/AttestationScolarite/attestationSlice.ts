// attestationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AttestationState {
  attestationScolaires: any[];
  ajoutDemande: boolean;
  errorData: boolean;
  loading: boolean;
  remarques: string;
}

const initialState: AttestationState = {
  attestationScolaires: [],
  ajoutDemande: false,
  errorData: false,
  loading: true,
  remarques: '',
};

export const getAttestation = createAsyncThunk('attestation/getAttestation', async () => {
  const response = await axios.get('/attestation-scolarite');
  return response.data;
});

export const demandeAttestationScolaire = createAsyncThunk('attestation/demandeAttestationScolaire', async () => {
  const response = await axios.post('/attestation-scolarite/save-demande', {});
  return response.data;
});

const attestationSlice = createSlice({
  name: 'attestation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttestation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttestation.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.attestationScolaires = action.payload.demAttestationScolarite;
        state.ajoutDemande = action.payload.ajoutDem;
        state.remarques = action.payload.remarques;
      })
      .addCase(getAttestation.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      })
      .addCase(demandeAttestationScolaire.pending, (state) => {
        state.loading = true;
      })
      .addCase(demandeAttestationScolaire.fulfilled, (state, action: PayloadAction<any>) => {
        state.attestationScolaires.push(action.payload.demAtt);
        state.ajoutDemande = action.payload.ajoutDem;
        state.loading = false;
      })
      .addCase(demandeAttestationScolaire.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      });
  },
});

export default attestationSlice.reducer;