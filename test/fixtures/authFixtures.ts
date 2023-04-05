import { initialStateAuth } from "../../src/store/interfaces/auth";

export const initialState = {
    status: 'checking'
} as initialStateAuth

export const authenticatedState = {
    status: 'authenticated',
    uid: 'GHASDGHAS',
    email: 'demo@google.com',
    displayName: 'Nelson tu papi',
} as initialStateAuth

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null
} as initialStateAuth


export const demoUser = {
    uid: 'GHASDGHAS',
    email: 'demo@google.com',
    displayName: 'Nelson'
} as initialStateAuth
