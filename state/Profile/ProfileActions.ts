import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tuser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const changeInformation = createAsyncThunk<{ message: string }, Tuser>(
  "profile/changeInformation",
  async (user) => {
    const token = await AsyncStorage.getItem("token");

    // console.log(user.img);
    
    
    const { data } = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/change-information",
      user,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
      }
    );

    console.log(data);
    

    return data.message;
  }
);
