import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<TDemande[], void>(
  "demande_reservation/getDemandes",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/demande-reservation",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.demReservation as TDemande[];
  }
);

export const createDemande = createAsyncThunk<TDemande, void>(
  "demande_reservation/createDemande",
  async (_, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/demande-reservation/save-demande",
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
  "demande_reservation/cancelDemande",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/demande-reservation/change-statut",
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
