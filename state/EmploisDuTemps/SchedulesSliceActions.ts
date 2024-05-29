import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getEmploisDuTempsByMonth = createAsyncThunk<
  Tevent[],
  { selectedMonth: string }
>("EmploisDuTemps/getEmploisDuTempsByMonth", async ({ selectedMonth }, api) => {
  const token = await AsyncStorage.getItem("token");
  const { data } = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/emploi-temps?mois=" +
      selectedMonth,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  if (selectedMonth === new Date().toISOString().slice(0, 7)) {
    api.dispatch(getEmploisDuTempsByDayToday());
  } else {
    api.dispatch(
      getEmploisDuTempsByDay({
        selectedMonth: selectedMonth,
        selectedDay: "01",
      })
    );
  }

  return data.events as Tevent[];
});

export const getEmploisDuTempsByDay = createAsyncThunk<
  Tevent[],
  { selectedDay: string; selectedMonth: string }
>(
  "EmploisDuTemps/getEmploisDuTempsByDay",
  async ({ selectedDay, selectedMonth }) => {
    const token = await AsyncStorage.getItem("token");

    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/emploi-temps?day=" +
        selectedMonth +
        "-" +
        selectedDay,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.events as Tevent[];
  }
);

// getEmploisDuTempsByDay day is today
export const getEmploisDuTempsByDayToday = createAsyncThunk<Tevent[], void>(
  "EmploisDuTemps/getEmploisDuTempsByDayToday",
  async () => {
    const token = await AsyncStorage.getItem("token");

    const date = new Date().toISOString().slice(0, 10);

    // const date = "2024-05-16";

    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/emploi-temps?day=" + date,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.events as Tevent[];
  }
);
