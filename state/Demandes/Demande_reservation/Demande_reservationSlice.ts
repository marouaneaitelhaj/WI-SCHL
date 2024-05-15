import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cancelDemande,
  createDemande,
  getDemandes,
} from "./Demande_reservationActions";
import { TDemande, Tsalle } from "../../types";

const initialState = {
  data: [] as TDemande[],
  salles: [] as Tsalle[],
  status: "idle",
  error: null,
};

// Slice
const Demande_reservationSlice = createSlice({
  name: "Demande_reservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDemandes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getDemandes.fulfilled,
        (
          state,
          action: {
            payload: {
              demandes: TDemande[];
              salles: Tsalle[];
            };
          }
        ) => {
          state.status = "succeeded";
          state.data = action.payload.demandes;
          state.salles = action.payload.salles;
        }
      )
      .addCase(getDemandes.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createDemande.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createDemande.fulfilled,
        (state, action: PayloadAction<TDemande>) => {
          state.status = "succeeded";
        }
      )
      .addCase(createDemande.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
      })
      .addCase(cancelDemande.fulfilled, (state, action) => {
        state.data = state.data.map((item) => {
          if (item.num_dem === action.payload) {
            return { ...item, etat_dem: "0" };
          }
          return item;
        });
      });
  },
});

export default Demande_reservationSlice.reducer;
