import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TDemande, Tsalle } from "@state/types";
import axios from "axios";

export const getDemandes = createAsyncThunk<
  {
    demandes: TDemande[];
    salles: Tsalle[];
  },
  void
>("demande_reservation/getDemandes", async () => {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(
    "http://ensemc.irma-prod.net/api/etudiant/demande-reservation",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    demandes: response.data.demReservation as TDemande[],
    salles: response.data.salles as Tsalle[],
  };
});

export const createDemande = createAsyncThunk<
  TDemande,
  {
    salle_id: string;
    date_debut: string;
    date_fin: string;
    hr_debut: string;
    hr_fin: string;
    raison: string;
  }
>(
  "demande_reservation/createDemande",
  async ({ salle_id, date_debut, date_fin, hr_debut, hr_fin, raison }, api) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/demande-reservation/save-demande",
      {
        salle_id,
        date_debut,
        date_fin,
        hr_debut,
        hr_fin,
        raison,
      },
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
