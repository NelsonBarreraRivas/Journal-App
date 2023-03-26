import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDatabase } from "../firebase"
import { Note } from "../store"

export const loadNotes = async ( uid : string | null ) => {

    if ( !uid ) throw new Error('El UID del usuario no existe')

    const collecionRef = collection( FirebaseDatabase, `${uid}/journal/notes` )

    const docs = await getDocs( collecionRef )

    const notes : Note[] = [] 

    docs.forEach( doc => {
        notes.push( { id: doc.id, ...doc.data() } as Note )
    }) 
    return notes
}