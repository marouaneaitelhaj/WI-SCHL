import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tuser } from "../types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = createAsyncThunk<
  { user: Tuser; token: string },
  Tuser
>("auth/login", async ({ email, password }) => {
  
  const { data } = await axios.get(
    'http://localhost:3000/login',
    // { username: 'emilys',password: 'emilyspass',expiresInMins: 30 }
  );
  
  AsyncStorage.setItem("token", data.token);

  
  return { user: data.user, token: data.token };
});

// 'auth/profile',
export const getProfileAction = createAsyncThunk<
  { user: Tuser; fillier: string; correction: string, type : string },
  string
>("auth/profile", async (token) => {
  
  const { data } = await axios.get(
    "http://localhost:3000/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  
  return data;
});

export const updateProfilePasswordAction = createAsyncThunk<
  { message: string },
  { motPassActuel: string; nvMotPass: string; nvMotPass_confirmation: string }
>(
  "auth/updatePassword",
  async ({ motPassActuel, nvMotPass, nvMotPass_confirmation }) => {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.post(
      "http://ensemc.irma-prod.net/api/etudiant/change-password",
      { motPassActuel, nvMotPass, nvMotPass_confirmation },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  }
);
