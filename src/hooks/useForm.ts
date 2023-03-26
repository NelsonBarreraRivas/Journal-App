import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { FormCheckedValues, FormValidations, InitialForm } from "./interfaces"


export const useForm = <I extends InitialForm, F extends FormValidations>(initialForm: I, validations: F) => {

    const [formState, setFormState] = useState(initialForm)

    const [formValidation,setFormValidation] = useState({} as FormCheckedValues)


    useEffect(() => {
        setFormState( initialForm )
    }, [initialForm])

    const onChangue = ({ target }: ChangeEvent<HTMLInputElement>): void => {

        const { value, name } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const isEmpty: boolean = useMemo( () => Object.values(formState).includes(""), [formState] )

    const isFormValid: boolean = useMemo( () => {

        for (const formValue of Object.keys(formValidation)) {
            if( formValidation[formValue] != null) return false
        }
        return true

    }, [formValidation] )

    const onResetForm = (): void => {
        setFormState(initialForm)
    }


    const createValidator = useMemo(() => {

        const formCheckedValues: FormCheckedValues = {}

        for (const formField of Object.keys(validations)) {

            const [fn, errorMessage = 'Este campo es requerido.'] = validations[formField]

            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage
        }

        setFormValidation(formCheckedValues)
        
    }, [formState])

    return {
        ...formState,
        formState,
        onChangue,
        onResetForm,
        isEmpty,
        ...formValidation,
        formValidation,
        isFormValid
    }
} 