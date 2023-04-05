import { AnyAction } from '@reduxjs/toolkit';
import 'jest-extended'
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { initialStateAuth, stateLogout } from '../../../src/store/interfaces/auth';
import { initialState, demoUser, authenticatedState, notAuthenticatedState } from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {

    test('debe de regresar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {} as AnyAction)
        expect(authSlice.name).toBe('auth')
        expect(state).toEqual(initialState)

    });

    test('debe de revisar la autenticacion', () => {

        const state = authSlice.reducer(initialState, login(demoUser))

        expect(state).toEqual( {
            uid: 'GHASDGHAS',
            email: 'demo@google.com',
            displayName: 'Nelson',
            errorMessage: null,
            ok: undefined,
            photoURL: undefined,
            status: 'authenticated'
        } as initialStateAuth )

    });

    test('debe de realizar el logout', () => {
        
        const state = authSlice.reducer(authenticatedState, logout( { errorCode: null, errorMessage: null, ok: false }))

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            errorCode: null,
            errorMessage: null,
            ok: false,
            photoURL: null
        } as initialStateAuth)
    });

    test('debe de realizar el logout y debe de mostrar un mensaje de error', () => {
        
        const errorMessage = 'Credenciales incorrectas'

        const state = authSlice.reducer(authenticatedState, logout( { errorCode: null, errorMessage, ok: false }))

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            errorCode: null,
            errorMessage: errorMessage,
            ok: false,
            photoURL: null
        } as initialStateAuth)

    });

    test('debe de cambiar el estado a cheking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials())

        expect( state.status ).toBe('checking')

    });
});