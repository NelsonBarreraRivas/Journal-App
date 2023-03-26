import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialStateJournal, Note, stateJournal } from '../interfaces'

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: {} as Note,
} as initialStateJournal

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, { payload }: PayloadAction<Note>) => {
            state.notes.push( payload )
            state.isSaving = false
        },
        setActiveNote: (state, { payload }: PayloadAction<Note>) => {
            state.active = payload
            state.messageSaved= ''
        },
        setSaving: (state, { payload } : PayloadAction<Note[]>) => {
            state.notes = payload
            state.messageSaved= ''
        },
        updateNote: (state, { payload }: PayloadAction<Note>) => {
            state.isSaving= false
            state.notes= state.notes.map( note => {
                if( note.id === payload.id){
                    return payload
                }
                return note
            } )
            state.messageSaved = `${ payload.title }, actualizada correctamente.`
        },
        setPhotosToActiveNote: (state : initialStateJournal, { payload }: PayloadAction<string[]>) => {
            state.active.imageUrls = [ ...(Array.from(state.active.imageUrls || [])), ...payload ]
            state.isSaving= false
        },
        deleteNoteById: (state, { payload }: PayloadAction<string>) => {
            state.active= {} as Note
            state.messageSaved = ''
            state.notes = state.notes.filter( note => note.id !== payload )
        },
        clearNotesLogout: (state) => {
            state.messageSaved = ''
            state.active= {} as Note
            state.notes = [] 
        }
    }
})

export const {
    addNewEmptyNote,
    setActiveNote,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions
//export const journalReducer = journalSlice.reducer
