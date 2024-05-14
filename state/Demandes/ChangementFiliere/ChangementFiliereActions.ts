import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande, Tfiliere } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<
  { filieres: Tfiliere[]; dem_changement_filiere: TDemande[] },
  void
>("changementFiliere/getDemandes", async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/demande-changement-filiere",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    filieres: response.data.filieres,
    dem_changement_filiere: response.data.dem_changement_filiere,
  };
});

export const createDemande = createAsyncThunk<
  TDemande,
  { raison: string; filiere: string }
>("changementFiliere/createDemande", async ({ filiere, raison }, api) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    "http://ensemc.irma-prod.net/api/etudiant/demande-changement-filiere/save-demande",
    {
      filiere,
      notes: raison,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  api.dispatch(getDemandes());
  return response.data.demAtt;
});

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
