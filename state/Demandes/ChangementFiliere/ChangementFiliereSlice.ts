import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cancelDemande,
  createDemande,
  getDemandes,
} from "./ChangementFiliereActions";
import { TDemande, Tfiliere } from "../../types";

const initialState = {
  data: [] as TDemande[],
  status: "idle",
  error: null,
  filieres: [] as Tfiliere[],
};

// Slice
const ChangementFiliereSlice = createSlice({
  name: "ChangementFiliere",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDemandes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getDemandes.fulfilled,
        (state, action: { payload: {filieres : Tfiliere[], dem_changement_filiere : TDemande[]} }) => {
          state.status = "succeeded";
          state.data = action.payload.dem_changement_filiere;
          state.filieres = action.payload.filieres;
        }
      )
      .addCase(
        getDemandes.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      .addCase(createDemande.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createDemande.fulfilled,
        (state, action: PayloadAction<TDemande>) => {
          state.status = "succeeded";
        }
      )
      .addCase(
        createDemande.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
        }
      ).addCase(cancelDemande.fulfilled, (state, action) => {
        state.data = state.data.map((item) => {
          if (item.num_dem === action.payload) {
            return { ...item, etat_dem: "4" };
          }
          return item;
        });
      });
  },
});

export default ChangementFiliereSlice.reducer;
