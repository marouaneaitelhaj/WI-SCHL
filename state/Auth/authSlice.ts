import { createSlice } from '@reduxjs/toolkit'
import { getUserAction, loginAction, logoutAction, signUpAction } from './authActions'
import { Tuser } from '../types'

type AuthState = {
    loading: boolean,
    token: string | null,
    user: Tuser | null,
    isAuthenticated: boolean,
    error: string | null,
    success: boolean,
    message: string | null,
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,
    loading: false,
    user: null,
    isAuthenticated: false,
    error: null,
    success: false,
    message: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        // Login
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        }).addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.success = true
            state.token = action.payload
        }).addCase(loginAction.rejected, (state) => {
            state.loading = false
            state.error = "Invalid username or password"
            state.success = false
        })
        // getUser
        builder.addCase(getUserAction.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        }).addCase(getUserAction.fulfilled, (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
            state.success = true
            state.message = `${action.payload.email} logged in successfully`
            // setTimeout(() => {
            state.loading = false
            // }, 2000)
        }).addCase(getUserAction.rejected, (state, action) => {
            state.error = action.payload as string
            state.success = false
            state.isAuthenticated = false
            localStorage.removeItem('token')
            state.token = null
            // setTimeout(() => {
            state.loading = false
            // }, 2000)
        })
        // Logout
        builder.addCase(logoutAction.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        }
        ).addCase(logoutAction.fulfilled, (state) => {
            state.loading = false
            state.error = null
            state.success = true
            state.isAuthenticated = false
            state.token = null,
                state.user = null
            state.message = 'Logged out successfully'
        }).addCase(logoutAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
            state.success = false
        })
        // signup
        builder.addCase(signUpAction.pending, (state, action) => {
            state.loading = true
            state.error = null
            state.success = false
        }).addCase(signUpAction.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.isAuthenticated = true
            state.token = action.payload
            state.success = true
        }).addCase(signUpAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
            state.success = false
        })
    }
})
export default authSlice.reducer