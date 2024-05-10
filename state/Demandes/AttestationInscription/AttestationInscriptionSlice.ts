import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cancelDemandeAttestation,
  demandeAttestation,
  getAttestationInscriptionValues,
} from "./AttestationInscriptionActions";
import { TAttestationInscriptions } from "../../types";

const initialState = {
  data: [] as TAttestationInscriptions[],
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
        (state, action: { payload: TAttestationInscriptions[] }) => {
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
        (state, action: PayloadAction<TAttestationInscriptions>) => {
          state.status = "succeeded";
          
          console.log(state.data);
          state.data = [...state.data, action.payload];
          console.log(state.data);
        }
      )
      .addCase(
        demandeAttestation.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
        }
      ).addCase(cancelDemandeAttestation.fulfilled, (state, action) => {
        state.data = state.data.map((item) => {
          if (item.num_dem === action.payload) {
            return { ...item, etat_dem: "4" };
          }
          return item;
        });
      });
  },
});

export default attestationInscriptionSlice.reducer;
