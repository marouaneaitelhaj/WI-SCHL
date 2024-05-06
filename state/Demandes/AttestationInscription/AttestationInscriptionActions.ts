import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createAttestationInscriptionAction = createAsyncThunk<
    {},{}
>("demandes/attestationInscription", async () => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.post(
        "http://ensemc.irma-prod.net/api/etudiant/attestation-inscription/save-demande",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
});