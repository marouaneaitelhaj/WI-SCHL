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
    console.log(data.data.periodes[0]);
    
    return data.data as DisponibiliteRecord;
  }
);
