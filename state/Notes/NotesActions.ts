import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StudentRecord, Tannonce } from "state/types";

export const getNotes = createAsyncThunk<StudentRecord, void>(
  "Notes/getNotes",
  async () => {
    
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://ensemc.irma-prod.net/api/etudiant/note",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    

    return data.notes as StudentRecord;
  }
);