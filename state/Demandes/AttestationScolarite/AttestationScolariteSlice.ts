import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cancelDemandeAttestation,
  demandeAttestation,
  geAttestationValues,
} from "./AttestationScolariteActions";
import { TAttestation } from "../../types";

const initialState = {
  data: [] as TAttestation[],
  status: "idle",
  error: null,
};

// Slice
const attestationScolariteSlice = createSlice({
  name: "AttestationScolarite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(geAttestationValues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        geAttestationValues.fulfilled,
        (state, action: { payload: TAttestation[] }) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(
        geAttestationValues.rejected,
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
        (state, action: PayloadAction<TAttestation>) => {
          state.status = "succeeded";
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

export default attestationScolariteSlice.reducer;
