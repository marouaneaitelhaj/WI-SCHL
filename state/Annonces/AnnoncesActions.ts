import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tannonce } from "state/types";

export const getAnnonces = createAsyncThunk<
  Tannonce[],
  void
>("EmploisDuTemps/getEmploisDuTemps", async () => {
  const token = await AsyncStorage.getItem("token");
  const { data } = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/annonces",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  
  return data as Tannonce[];
});