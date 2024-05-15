import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<TDemande[], void>(
  "releveNote/getDemandes",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/releve-note",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.demRelveNote as TDemande[];
  }
);

export const createDemande = createAsyncThunk<TDemande, number>(
  "releveNote/createDemande",
  async (number, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/releve-note/save-demande",
      {
        releve_type: number,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    api.dispatch(getDemandes());
    return response.data.demRelveNote;
  }
);

export const cancelDemande = createAsyncThunk<string, string>(
  "releveNote/cancelDemande",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/releve-note/change-statut",
      {
        num_dem: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return id;
  }
);
