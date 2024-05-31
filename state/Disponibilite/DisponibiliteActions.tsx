import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DisponibiliteRecord } from "@state/types";
import axios from "axios";

export const getDisponibilites = createAsyncThunk<DisponibiliteRecord, void>(
  "disponibilite/getDisponibilites",
  async (_, { dispatch }) => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.get(
      "http://ensemc.irma-prod.net/api/prof/disponibilite",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.data as DisponibiliteRecord;
  }
);

export const addDisponibilite = createAsyncThunk<
  string,
  {
    day: string;
    heure_d: string;
    heure_f: string;
    periode: string;
  }
>("disponibilite/addDisponibilite", async (disponibilite, { dispatch }) => {
  console.log(disponibilite);

  const token = await AsyncStorage.getItem("token");
  try {
    const data = await axios.post(
      `http://ensemc.irma-prod.net/api/prof/disponibilite/ajouter?heure_d=${disponibilite.heure_d}&heure_f=${disponibilite.heure_f}&periode=${disponibilite.periode}&day=${disponibilite.day}`,
      disponibilite,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  dispatch(getDisponibilites());

  return {} as string;
});
