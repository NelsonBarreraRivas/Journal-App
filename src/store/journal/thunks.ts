import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDatabase } from "../../firebase"
import { Note } from "../"
import { AppDispatch, RootState } from "../store"
import { addNewEmptyNote, setActiveNote, setSaving, savingNewNote, updateNote, setPhotosToActiveNote, deleteNoteById } from "./"
import { fileUpload, loadNotes } from "../../helpers"

export const startNewNote = () => {
    
    return async ( dispatch : AppDispatch, getState : () => RootState ) => {

        dispatch( savingNewNote() )

        // ui
        const { uid } = getState().auth

        const newNote  = {
            title: '',
            body: '',
            date: new Date().getTime()
        } as Note

        const newDoc = doc( collection( FirebaseDatabase, `${uid}/journal/notes` ) ) 

        const setDocResp = await setDoc( newDoc, newNote )

        newNote.id = newDoc.id

        console.log({setDocResp, newDoc});
        
        dispatch( addNewEmptyNote( newNote ) )

        dispatch( setActiveNote( newNote ) )
    }
}

export const startLoadingNotes = () => {

    return async ( dispatch : AppDispatch, getState : () => RootState) => {

        const { uid } = getState().auth
        
        const notes = await loadNotes( uid )

        dispatch( setSaving( notes ) )
        
    }
}

export const startSaveNote = () => {
    return async ( dispatch: AppDispatch, getState: () => RootState ) => {

        dispatch( savingNewNote() )

        const { uid } = getState().auth
        const { active: note  }  = getState().journal
        const noteFireStore = { ...note } 

        delete noteFireStore.id

        const docRef = doc( FirebaseDatabase, `${ uid }/journal/notes/${ note.id }` )

        await setDoc( docRef, noteFireStore, { merge: true } )
        
        dispatch( updateNote( note as Note ) )
    }
}

export const startUploadingFiles = ( files : FileList  ) => {
    return async( dispatch : AppDispatch, getState: () => RootState ) => {
        dispatch( savingNewNote() )

        const fileUploadPromises = []

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises )

        dispatch( setPhotosToActiveNote( photosUrls ) )
    }
}

export const startDeletingNote = () => {
    
    return async ( dispatch: AppDispatch, getState: () => RootState) => {

        const { uid } = getState().auth

        const { active: { id } } = getState().journal

        const docRef = doc( FirebaseDatabase, `${ uid }/journal/notes/${ id }` )
        
        await deleteDoc( docRef )

        dispatch( deleteNoteById( id ) )
    }
}