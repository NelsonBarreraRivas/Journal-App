import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithFacebook, singInWithGoogle } from "../../firebase"
import { AppDispatch, RootState } from "../../store"
import { checkingCredentials, login, logout } from "./"
import { formDataLogin, formDataRegister, stateAuth } from "../interfaces";
import { clearNotesLogout } from "../journal";

export const checkingAuthentication = () => {

    return async (dispatch: AppDispatch ) => {

        dispatch( checkingCredentials() )

    }
}

export const startGoogleSignIn = () => {

    return async( dispatch: AppDispatch ) => {
        
        dispatch( checkingCredentials() )

        const { ok, errorMessage, errorCode, displayName, email, photoURL, uid}  = await singInWithGoogle()

        

        if( !ok ) return dispatch( logout( { errorMessage, ok, errorCode } ) )
        
        //dispatch( login( { displayName,email, photoURL, uid,ok } as stateAuth ) )
    }
}
export const startFacebookSignIn = () => {

    return async( dispatch: AppDispatch ) => {
        
        dispatch( checkingCredentials() )

        const { ok, errorMessage, errorCode, displayName, email, photoURL, uid}  = await singInWithFacebook()

        

        if( !ok ) return dispatch( logout( { errorMessage, ok, errorCode } ) )
        
        dispatch( login( { displayName,email, photoURL, uid,ok } as stateAuth ) )
    }

}

export const startCreatingUserWithEmailPassword = ({email, displayName, password} : formDataRegister) => {

    return async ( dispatch: AppDispatch ) => {

        dispatch( checkingCredentials() )

        const { ok, uid, photoURL, errorMessage, errorCode } = await registerUserWithEmailPassword( {email, displayName, password} )

        if( !ok ) return dispatch( logout( { ok, errorMessage, errorCode } ) )

        //dispatch( login( { displayName,email, photoURL, uid,ok } as stateAuth ) )
    }
}

export const startLoginWithEmailPassword = ( {email, password} : formDataLogin ) => {

    return async ( dispatch: AppDispatch ) => {

        dispatch( checkingCredentials() )

        const { ok, errorMessage, errorCode, displayName, photoURL, uid} = await loginWithEmailPassword( {email, password} )

        if( !ok ) return dispatch( logout( { ok, errorMessage, errorCode }) )

        //dispatch( login( { displayName,email, photoURL, uid,ok } as stateAuth ) )

    }

}

export const startLogout = () => {
    return async ( dispatch: AppDispatch ) => {

        
        await logoutFirebase()
        
        dispatch( clearNotesLogout() )
        //dispatch( logout( { errorCode: null, errorMessage: null, ok:false } ) )
    }
}