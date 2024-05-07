// carteEtudiantSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface CarteEtudiantState {
  carteEtudiant: any[];
  ajoutDemande: boolean;
  errorData: boolean;
  loading: boolean;
}

const initialState: CarteEtudiantState = {
  carteEtudiant: [],
  ajoutDemande: false,
  errorData: false,
  loading: true,
};

export const getCarteEtudiant = createAsyncThunk('carteEtudiant/getCarteEtudiant', async () => {
  const response = await axios.get('/carte-etudiant');
  return response.data;
});

export const demandeCarteEtudiant = createAsyncThunk('carteEtudiant/demandeCarteEtudiant', async () => {
  const response = await axios.post('/carte-etudiant/save-demande', {});
  return response.data;
});

const carteEtudiantSlice = createSlice({
  name: 'carteEtudiant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarteEtudiant.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCarteEtudiant.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.carteEtudiant = action.payload.demCarteEtudiant;
        state.ajoutDemande = action.payload.ajoutDem;
      })
      .addCase(getCarteEtudiant.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      })
      .addCase(demandeCarteEtudiant.pending, (state) => {
        state.loading = true;
      })
      .addCase(demandeCarteEtudiant.fulfilled, (state, action: PayloadAction<any>) => {
        state.carteEtudiant.push(action.payload.demCarteEtudiant);
        state.ajoutDemande = action.payload.ajoutDem;
        state.loading = false;
      })
      .addCase(demandeCarteEtudiant.rejected, (state) => {
        state.errorData = true;
        state.loading = false;
      });
  },
});

export default carteEtudiantSlice.reducer;