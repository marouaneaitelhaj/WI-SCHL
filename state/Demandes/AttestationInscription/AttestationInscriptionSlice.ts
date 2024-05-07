import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { demandeAttestation, getAttestationInscriptionValues } from "./AttestationInscriptionActions";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

// Slice
const attestationInscriptionSlice = createSlice({
  name: "attestationInscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttestationInscriptionValues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAttestationInscriptionValues.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(
        getAttestationInscriptionValues.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      .addCase(demandeAttestation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        demandeAttestation.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(
        demandeAttestation.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export default attestationInscriptionSlice.reducer;
