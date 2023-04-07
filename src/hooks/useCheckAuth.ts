import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { FirebaseAuth } from "../firebase"
import { login, logout, useAppDispatch, useAppSelector } from "../store"
import { startLoadingNotes } from "../store/journal"


export const useCheckAuth = () => {

    const { status } = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {

            if( !user ) return dispatch( logout( { errorCode: null, errorMessage: null, ok: false } ) )
            
            const { displayName, email, photoURL, uid  } = user
            
            dispatch( login( { displayName, email, photoURL, uid  }  ) )
            dispatch( startLoadingNotes() )
        })

    }, [])

    return status
}