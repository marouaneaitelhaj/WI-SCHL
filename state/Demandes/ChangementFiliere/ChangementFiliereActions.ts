import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<TDemande[], void>(
  "changementFiliere/getDemandes",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/demande-changement-filiere",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.dem_changement_filiere as TDemande[];
  }
);

export const createDemande = createAsyncThunk<TDemande, void>(
  "changementFiliere/createDemande",
  async (_, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/demande-changement-filiere/save-demande",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    api.dispatch(getDemandes());
    return response.data.demAtt;
  }
);

export const cancelDemande = createAsyncThunk<string, string>(
  "changementFiliere/cancelDemande",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/demande-changement-filiere/change-statut",
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