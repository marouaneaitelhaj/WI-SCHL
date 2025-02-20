import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAbsence } from "@state/types";
import axios from "axios";

export const getAbsences = createAsyncThunk<TAbsence, void>(
  "Absences/getAbsences",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://192.168.0.251:3000/absences",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data as TAbsence;
  }
);

export const justifierAbsence = createAsyncThunk<
  TAbsence,
  { id: string; file: string }
>("Absences/justifierAbsence", async ({ id, file }, api) => {
  const token = await AsyncStorage.getItem("token");

  const { data } = await axios.post(
    "http://ensemc.irma-prod.net/api/etudiant/justifier",
    { pdf: file, absence_id: id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  api.dispatch(getAbsences());



  return data as TAbsence;
});
