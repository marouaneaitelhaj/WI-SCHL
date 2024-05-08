import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAttestationInscriptionValues = createAsyncThunk(
  "attestationInscription/fetchValues",
  async () => {
    const response = await axios.get("/attestation-inscription");
    return response.data;
  }
);

export const demandeAttestation = createAsyncThunk(
  "attestationInscription/saveDemande",
  async () => {
    const token = await AsyncStorage.getItem("token");

    const response = await axios.post("http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/save-demande", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {}).catch((error) => {
      console.error(error);
    });
    console.log(response);
    
    return {
      "hello world": "hello world",
    };
  }
);
