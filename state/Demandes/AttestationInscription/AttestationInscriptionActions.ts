import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAttestationInscriptions } from "@state/types";
import axios from "axios";

export const getAttestationInscriptionValues = createAsyncThunk<
  TAttestationInscriptions[],
  void
>("attestationInscription/fetchValues", async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.demAttestationInscriptions;
});

export const demandeAttestation = createAsyncThunk(
  "attestationInscription/saveDemande",
  async () => {
    const token = await AsyncStorage.getItem("token");

    const res = axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/save-demande",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // return res.demAttestationInscriptions;
  }
);
