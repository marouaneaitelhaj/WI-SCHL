import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import {
  getEmploisDuTempsByDay,
  getEmploisDuTempsByMonth,
} from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  eventsForDay: Tevent[];
  eventsForMonth: Tevent[];
  eventsTypes: eventsType[];
  selectedMonth: string;
  selectedDay: string;
  loading : boolean;
};

const initialState: EmploisDuTempsState = {
  eventsForDay: [],
  eventsForMonth: [],
  eventsTypes: [],
  selectedMonth: "",
  selectedDay: "",
  loading : false
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
      .addCase(getEmploisDuTempsByMonth.pending, (state) => {
        state.eventsForMonth = [];
        state.eventsForDay = [];
        state.loading = true;
      })
      .addCase(getEmploisDuTempsByMonth.fulfilled, (state, action) => {
        state.eventsForMonth = action.payload;
        state.eventsForDay = action.payload;
        state.loading = false;
      })
      .addCase(getEmploisDuTempsByMonth.rejected, (state) => {
        state.loading = false;

      });

    builder
      .addCase(getEmploisDuTempsByDay.pending, (state) => {
        state.eventsForDay = [];
        state.loading = true;
      })
      .addCase(getEmploisDuTempsByDay.fulfilled, (state, action) => {
        state.eventsForDay = action.payload;
        state.loading = false;
      })
      .addCase(getEmploisDuTempsByDay.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedMonth, setSelectedDay } = EmploisDuTempsSlice.actions;
export default EmploisDuTempsSlice.reducer;
