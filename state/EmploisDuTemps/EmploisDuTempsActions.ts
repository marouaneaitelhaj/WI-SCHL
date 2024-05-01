import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tevent, Tseance, eventsType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getEmploisDuTemps = createAsyncThunk<
  { events: Tevent[]; type: eventsType[] },
  void
>("EmploisDuTemps/getEmploisDuTemps", async () => {
  const token = await AsyncStorage.getItem("token");
  const { data } = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/emploi-temps",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  return data;
});
