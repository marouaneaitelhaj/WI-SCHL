import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import { getEmploisDuTemps } from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  events: Tevent[];
  eventsTypes: eventsType[];
  selectedMonth: string;
  selectedDay: string;
};



const initialState: EmploisDuTempsState = {
  events: [],
  eventsTypes: [],
  selectedMonth: "",
  selectedDay: "",
};

export const EmploisDuTempsSlice = createSlice({
  name: "EmploisDuTemps",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
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

export const { setSelectedMonth, setSelectedDay } = EmploisDuTempsSlice.actions;
export default EmploisDuTempsSlice.reducer;
