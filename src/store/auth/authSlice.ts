import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateAuth, stateAuth, stateLogout } from '../interfaces'



const initialState = {
    status: 'checking'
} as initialStateAuth

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload } : PayloadAction<stateAuth>) => {
            state.status= 'authenticated'
            state.uid = payload.uid
            state.email= payload.email
            state.displayName= payload.displayName
            state.photoURL= payload.photoURL
            state.errorMessage= null
            state.ok= payload.ok
        },
        logout: (state, { payload } : PayloadAction<stateLogout>) => {
            state.status= 'not-authenticated'
            state.uid = null
            state.email= null
            state.displayName= null
            state.photoURL= null
            state.errorMessage= payload.errorMessage
            state.errorCode= payload.errorCode
            state.ok= payload.ok
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
        checkingErrors: (state) => {
            state.errorCode= null
            state.errorMessage= null
        }
    }
})

export const { login, logout, checkingCredentials, checkingErrors } = authSlice.actions
//export const authReducer = authSlice.reducer
