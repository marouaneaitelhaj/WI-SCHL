import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import { getEmploisDuTemps } from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  events: Tevent[];
  eventsTypes: eventsType[];
};



const initialState: EmploisDuTempsState = {
  events: [],
  eventsTypes: [],
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
        state.eventsTypes = action.payload.type;
      })
      .addCase(getEmploisDuTemps.rejected, (state) => {});
  },
});

export default EmploisDuTempsSlice.reducer;
