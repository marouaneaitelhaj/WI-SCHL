import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAttestationInscriptions } from "@state/types";
import axios from "axios";

// crrete two async functions to fetch the data and to send the data
// get => http://ensemc.irma-prod.net/api/etudiant/attestation-inscription
// post => http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/save-demande
// with the token in the header
// post request have no body

export const getAttestationInscriptionValues = createAsyncThunk<
  TAttestationInscriptions[],
  void
>("attestationInscription/getAttestationInscriptionValues", async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.demAttestationInscriptions as TAttestationInscriptions[];
});

export const demandeAttestation = createAsyncThunk<
  TAttestationInscriptions,
  void
>("attestationInscription/demandeAttestation", async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/save-demande",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.demAtt;
});

export const cancelDemandeAttestation = createAsyncThunk<string, string>(
  "attestationInscription/cancelDemandeAttestation",
  async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/change-statut",
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
