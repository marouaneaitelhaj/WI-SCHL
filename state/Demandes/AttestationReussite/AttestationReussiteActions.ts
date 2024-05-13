import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAttestation } from "@state/types";
import axios from "axios";

export const geAttestationValues = createAsyncThunk<TAttestation[], void>(
  "attestationReussite/geAttestationValues",
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

    return response.data.demAttestationReussites as TAttestation[];
  }
);

export const demandeAttestation = createAsyncThunk<TAttestation, void>(
  "attestationReussite/demandeAttestation",
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
    api.dispatch(geAttestationValues());
    return response.data.demAtt;
  }
);

export const cancelDemandeAttestation = createAsyncThunk<string, string>(
  "attestationReussite/cancelDemandeAttestation",
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
