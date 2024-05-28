import { createSlice } from "@reduxjs/toolkit";
import { Tuser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getProfileAction,
  loginAction,
  updateProfilePasswordAction,
} from "./AuthActions";

type AuthState = {
  loading: boolean;
  loadingForm: boolean;
  token: string | null;
  user: Tuser | null;
  error: string | null;
  success: boolean;
  message: string | null;
  type: string | null;
};

const initialState: AuthState = {
  loadingForm: false,
  token: null,
  loading: false,
  user: null,
  error: null,
  success: false,
  message: null,
  type: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers(builder) {
    // Login
    builder
      .addCase(loginAction.pending, (state) => {
        state.loadingForm = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.loadingForm = false;
        state.error = null;
        state.success = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.loadingForm = false;
        state.error = "E-mail d'utilisateur ou mot de passe invalide";
        state.success = false;
      });

    builder
      .addCase(getProfileAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.type = action.payload.type;
        state.success = true;
        state.user = action.payload.user;
        state.user.fillier = action.payload.fillier;
      })
      .addCase(getProfileAction.rejected, (state, action) => {
        console.log(action.error.message);

        state.loading = false;
        // state.error = "Erreur lors de la récupération des données";
        state.success = false;
        state.token = null;
      });

    // Update password
    builder
      .addCase(updateProfilePasswordAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.loadingForm = true;
        state.success = false;
      })
      .addCase(updateProfilePasswordAction.fulfilled, (state, action) => {
        state.loading = false;
        state.loadingForm = false;
        state.error = null;
        state.success = true;
      })
      .addCase(updateProfilePasswordAction.rejected, (state) => {
        state.loading = false;
        state.loadingForm = false;
        state.error = "Erreur lors de la modification du mot de passe";
        state.success = false;
      });
  },
});
export const { setToken, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
