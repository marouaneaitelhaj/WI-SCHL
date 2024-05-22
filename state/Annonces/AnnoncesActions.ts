import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tannonce } from "state/types";

export const getAnnonces = createAsyncThunk<Tannonce[], void>(
  "Annonces/getAnnonces",
  async () => {
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
  }
);

export const getVisScolaire = createAsyncThunk<Tannonce[], void>(
  "Annonces/getEmploisDuTemps",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/VisScolaire",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return data.annonces as Tannonce[];
  }
);

export const getVisEntreprise = createAsyncThunk<Tannonce[], void>(
  "Annonces/getVisEntreprise",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/VisEntreprise",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.annonces as Tannonce[];
  }
);

export const getAnnonce = createAsyncThunk<Tannonce[], string>(
  "Annonces/getVisEntreprise",
  async (id) => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/annonces?id=" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    

    return data as Tannonce[];
  }
);
