import { createAsyncThunk } from '@reduxjs/toolkit'
import { Tuser } from '../types'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const loginAction = createAsyncThunk<{user : Tuser, token : string}, Tuser>(
    'auth/login',
    async ({ email, password }) => {
        const { data } = await axios.post('http://ensemc.irma-prod.net/api/loginscolarite', { email, password })
        AsyncStorage.setItem('token', data.token)
        
        return { user: data.user, token: data.token}
    }
)

// 'auth/profile',
export const getProfileAction = createAsyncThunk<{etudiant : Tuser,  fillier : string, correction : string}, void>(
    'auth/profile',
    async () => {
        const token = await AsyncStorage.getItem('token')
        const { data } = await axios.get('http://ensemc.irma-prod.net/api/etudiant/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)

