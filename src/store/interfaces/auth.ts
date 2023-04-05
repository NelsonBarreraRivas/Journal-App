export type status =
    | 'checking'
    | 'not-authenticated'
    | 'authenticated'

export interface initialStateAuth {
    status: status
    uid: string | null,
    email: string | null,
    displayName: string | null
    photoURL: string | null | undefined
    errorMessage: string | null
    ok?: boolean
    errorCode: string | null | any
}

export interface stateLogout {
    errorMessage: string | null | any
    ok: boolean | null | any
    errorCode: string | null | any
}

export interface stateAuth {
    uid: string | null
    email: string | null
    displayName: string | null
    photoURL: string | null | undefined
    errorMessage?: string | null
    ok?: boolean
}

export interface formDataRegister {
    email: string
    password: string
    displayName: string
}
export interface formDataLogin {
    email: string
    password: string
}
