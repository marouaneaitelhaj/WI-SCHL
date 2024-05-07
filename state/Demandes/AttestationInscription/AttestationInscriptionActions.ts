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
    const response = await axios.post(
      "/attestation-inscription/save-demande",
      {}
    );
    return response.data;
  }
);
