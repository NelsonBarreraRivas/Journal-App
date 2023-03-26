import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { formDataLogin, formDataRegister } from '../store'
import { FirebaseAuth, firebaseAuthErrorCodes } from './config'

const googleAuthProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
    try {
        const { user } = await signInWithPopup(FirebaseAuth, googleAuthProvider)

        //const credentials = GoogleAuthProvider.credentialFromResult( result )

        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error: any) {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: firebaseAuthErrorCodes[errorCode] ?? errorMessage,
            errorCode
        }
    }

}

export const registerUserWithEmailPassword = async ({ email, displayName, password }: formDataRegister) => {
    try {

        const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = user

        FirebaseAuth.currentUser && await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error: any) {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: firebaseAuthErrorCodes[errorCode] ?? errorMessage,
            errorCode
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }: formDataLogin) => {

    try {

        const { operationType, providerId, user } = await signInWithEmailAndPassword( FirebaseAuth, email, password )

        const { uid, displayName, photoURL } = user
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        

    } catch (error : any) {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: firebaseAuthErrorCodes[errorCode] ?? errorMessage,
            errorCode
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut()
} 