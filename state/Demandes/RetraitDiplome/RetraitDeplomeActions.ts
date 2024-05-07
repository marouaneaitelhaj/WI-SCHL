import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for annulerDemande
export const annulerDemande = createAsyncThunk(
  "retraitDeplome/annulerDemande",
  async (numDem) => {
    const response = await axios.post("/retrait-diplome/change-statut", {
      num_dem: numDem,
    });
    return response.data;
  }
);
