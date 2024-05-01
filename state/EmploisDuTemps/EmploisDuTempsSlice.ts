import { createSlice } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import { getEmploisDuTemps } from "./EmploisDuTempsActions";

type EmploisDuTempsState = {
  events: Tevent[];
  eventsTypes: eventsType[];
};



const initialState: EmploisDuTempsState = {
  events: [
    {
      color: "#8e6c41",
      end: "2024-01-02T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-01-01T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Nouvel an",
      type: "3",
    },
    {
      color: "#6c8e42",
      end: "2024-01-27T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-01-22T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Vacances 1ères semestre 1",
      type: "3",
    },
    {
      color: "#6e8e43",
      end: "2024-04-15T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-04-08T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Aid Alfitr",
      type: "3",
    },
    {
      color: "#8e6e44",
      end: "2024-05-06T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-04-29T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Vacances de printemps",
      type: "3",
    },
    {
      color: "#6f8e45",
      end: "2024-05-02T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-05-01T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Fête de Travail",
      type: "3",
    },
    {
      color: "#8e6f46",
      end: "2024-06-19T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-06-14T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Aid Al Adha",
      type: "3",
    },
    {
      color: "#708e47",
      end: "2024-01-15T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-01-14T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Jour de l'an amazigh (Ydd Ynayer)",
      type: "3",
    },
    {
      color: "#8e7048",
      end: "2023-11-07T00:00:00",
      id: "",
      id_reserv: "",
      start: "2023-11-06T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Marche verte",
      type: "3",
    },
    {
      color: "#8e6c49",
      end: "2023-11-19T00:00:00",
      id: "",
      id_reserv: "",
      start: "2023-11-18T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Fête de l'indépendance",
      type: "3",
    },
    {
      color: "#c8e610",
      end: "2024-01-12T00:00:00",
      id: "",
      id_reserv: "",
      start: "2024-01-11T00:00:00",
      textColor: "#000000",
      title: "Jour Férié : Anniversaire du manifeste de l'indépendance",
      type: "3",
    },
  ],
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
