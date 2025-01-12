import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StudentRecord, Tannonce } from "state/types";

export const getNotes = createAsyncThunk<StudentRecord, void>(
  "Notes/getNotes",
  async () => {
    
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      "http://192.168.0.251:3000/note",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data.notes);
    

    return data.notes as StudentRecord;
  }
);