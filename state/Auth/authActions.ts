import { createAsyncThunk } from '@reduxjs/toolkit'
import { Tuser } from '../types'
import axios from 'axios'

export const loginAction = createAsyncThunk<string, Tuser>(
    'auth/login',
    async ({ email, password }) => {
        const { data } = await axios.post('/auth/login', { email, password })
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return data.token as string
    }
)
export const getUserAction = createAsyncThunk<Tuser>(
    'auth/getUser',
    async (_) => {
        const { data } = await axios.post('/auth/user', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return data
    }
)
export const logoutAction = createAsyncThunk(
    'auth/logout',
    async (_) => {
        localStorage.removeItem('token')
    }
)
export const signUpAction = createAsyncThunk<string, Tuser>(
    'auth/signup',
    async (data) => {
        const { data: { token } } = await axios.post('/auth/signup', data)
        localStorage.setItem('token', token)
        return token
    }
)

// update banner profile
export const updateBannerProfile = createAsyncThunk<string, { banner: string }>(
    'auth/updateBannerProfile',
    async (banner, api) => {
        const { data } = await axios.post('/profile/updateBannerProfile', banner)
        api.dispatch(getUserAction())
        return data.data as string
    }
)

// update profile picture

export const updateprofilePicture = createAsyncThunk<string, { profilePicture: string }>(
    'auth/updatePicturerProfile',
    async (profilePicture, api) => {
        const { data } = await axios.post('/profile/updateProfilePicture', profilePicture)
        api.dispatch(getUserAction())
        return data.data as string
    }
)