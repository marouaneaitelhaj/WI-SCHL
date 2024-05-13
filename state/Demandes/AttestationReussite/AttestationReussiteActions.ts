import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<TDemande[], void>(
  "attestationReussite/getDemandes",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-reussite",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.demAttestationReussites as TDemande[];
  }
);

export const createDemande = createAsyncThunk<TDemande, void>(
  "attestationReussite/createDemande",
  async (_, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-reussite/save-demande",
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
  "attestationReussite/cancelDemande",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-reussite/change-statut",
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
