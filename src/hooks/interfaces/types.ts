export interface FormValidations {
    [key: string]: [(value: string ) => boolean, string];
}

export interface FormCheckedValues {
    [key: string]: string | null; // o cualquier otro tipo que corresponda a los valores de validación
}

export interface InitialForm {
    [key: string]: string
}

