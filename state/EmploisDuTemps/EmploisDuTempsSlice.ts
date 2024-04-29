import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance } from "../types";
import { getEmploisDuTemps } from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  events: Tevent[];
  seances: Tseance[];
};

const initialState: EmploisDuTempsState = {
  events: [],
  seances: [],
};

export const EmploisDuTempsSlice = createSlice({
  name: "EmploisDuTemps",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getEmploisDuTemps.pending, (state) => {})
      .addCase(getEmploisDuTemps.fulfilled, (state, action) => {
        state.events = action.payload.events;
        state.seances = action.payload.seances;
      })
      .addCase(getEmploisDuTemps.rejected, (state) => {});
  },
});

export default EmploisDuTempsSlice.reducer;
