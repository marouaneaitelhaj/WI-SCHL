import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAttestation } from "@state/types";
import axios from "axios";

export const geAttestationValues = createAsyncThunk<TAttestation[], void>(
  "attestationScolarite/geAttestationValues",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-scolarite",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.demAttestationScolarites as TAttestation[];
  }
);

export const demandeAttestation = createAsyncThunk<TAttestation, void>(
  "attestationScolarite/demandeAttestation",
  async (_, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-scolarite/save-demande",
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
  "attestationScolarite/cancelDemandeAttestation",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-scolarite/change-statut",
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
