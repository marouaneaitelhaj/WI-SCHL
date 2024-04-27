import { createSlice } from "@reduxjs/toolkit";
import { loginAction, profileAction } from "./authActions";
import { Tuser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  loading: boolean;
  token: string | null;
  user: Tuser | null;
  error: string | null;
  success: boolean;
  message: string | null;
};

const initialState: AuthState = {
  token: null,
  loading: false,
  user: null,
  error: null,
  success: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Login
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.error = "E-mail d'utilisateur ou mot de passe invalide";
        state.success = false;
      });

    builder
      .addCase(profileAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(profileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.user = action.payload.etudiant;
      })
      .addCase(profileAction.rejected, (state) => {
        state.loading = false;
        state.error = "Erreur lors de la récupération des données";
        state.success = false;
      });
  },
});
export default authSlice.reducer;
