import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import {
  getEmploisDuTempsByDay,
  getEmploisDuTempsByMonth,
} from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  events: Tevent[];
  eventsTypes: eventsType[];
  selectedMonth: string;
  selectedDay: string;
  loading : boolean;
};

const initialState: EmploisDuTempsState = {
  events: [],
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
        state.events = [];
        state.loading = true;
      })
      .addCase(getEmploisDuTempsByMonth.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(getEmploisDuTempsByMonth.rejected, (state) => {
        console.log("rejected");
        state.loading = false;
      });

    builder
      .addCase(getEmploisDuTempsByDay.pending, (state) => {
        state.events = [];
        state.loading = true;
      })
      .addCase(getEmploisDuTempsByDay.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(getEmploisDuTempsByDay.rejected, (state) => {
        console.log("rejected");
        state.loading = false;
        
      });
  },
});

export const { setSelectedMonth, setSelectedDay } = EmploisDuTempsSlice.actions;
export default EmploisDuTempsSlice.reducer;
