export interface initialStateJournal {
    isSaving: boolean
    messageSaved: string | null
    notes: Note[] 
    active: Note 
}

export interface stateJournal {
    isSaving?: boolean
    messageSaved?: string 
    notes: Note[] 
    active?: Note 
}

export interface Note{
    id?: string
    title: string
    body: string
    date: number
    imageUrls: string[]
}