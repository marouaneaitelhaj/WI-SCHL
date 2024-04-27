import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tevent } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getEmploisDuTemps = createAsyncThunk<Tevent[], void>(
    'EmploisDuTemps/getEmploisDuTemps',
    async () => {
        const token = await AsyncStorage.getItem('token')
        const { data } = await axios.get('http://ensemc.irma-prod.net/api/etudiant/emploi-temps', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data.events
    }
);