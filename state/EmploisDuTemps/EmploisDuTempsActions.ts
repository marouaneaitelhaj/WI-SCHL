import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getEmploisDuTempsByMonth = createAsyncThunk<
  Tevent[],
  { selectedMonth: string }
>("EmploisDuTemps/getEmploisDuTempsByMonth", async ({ selectedMonth }) => {
  
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
