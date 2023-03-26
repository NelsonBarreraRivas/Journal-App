import { FormEvent, useMemo, useState } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom";
import { FormValidations, InitialForm, useForm } from "../../hooks"
import { checkingErrors, startCreatingUserWithEmailPassword, useAppDispatch, useAppSelector } from "../../store"
import Alert from "@mui/material/Alert"

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations: FormValidations = {
    email: [(value) => value.toString().includes('@'), 'El correo debe de tener una @'],
    password: [(value) => value.toString().length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.toString().length >= 2, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useAppDispatch()

    const { errorMessage, status } = useAppSelector(state => state.auth)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const {
        displayName,
        email,
        password,
        onChangue,
        isEmpty,
        isFormValid,
        formState,
        formValidation,
    } = useForm(formData, formValidations)

    const [formSubmitted, setFormSubmitted] = useState(false)

    const { emailValid, displayNameValid, passwordValid } = formValidation


    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        setFormSubmitted(true)

        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword({ email, displayName, password }))
    }

    const checkError = () => {

        dispatch(checkingErrors())
    }

    return (
        <>
            <Typography variant="h4" textAlign={'center'}>
                Registrar
            </Typography>
            <form
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate_faster"
            >
                <Grid
                    container
                    justifyContent={'center'}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            mt: 2
                        }}
                    >
                        <TextField
                            type={'text'}
                            placeholder={'ejm: Nelson Barrera'}
                            label={'Nombre'}
                            fullWidth
                            name={'displayName'}
                            value={displayName}
                            onChange={onChangue}
                            error={!!displayNameValid && formSubmitted}
                            helperText={formSubmitted && displayNameValid}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{
                            mt: 2
                        }}
                    >
                        <TextField
                            type={'email'}
                            placeholder={'correo@google.com'}
                            label={'Email'}
                            fullWidth
                            name={'email'}
                            value={email}
                            onChange={onChangue}
                            error={!!emailValid && formSubmitted}
                            helperText={formSubmitted && emailValid}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            my: 2
                        }}
                    >
                        <TextField
                            type={'password'}
                            label={'Contraseña'}
                            placeholder={'••••••••••'}
                            fullWidth
                            name={'password'}
                            value={password}
                            onChange={onChangue}
                            error={!!passwordValid && formSubmitted}
                            helperText={formSubmitted && passwordValid}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mb: 2
                        }}
                        justifyContent={'center'}
                    >
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert
                                severity="error"
                                sx={{
                                    justifyContent: 'center'
                                }}
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <Button
                                variant="contained"
                                fullWidth
                                type={'submit'}
                                disabled={isEmpty || isAuthenticating}
                            >
                                <Typography>Crear Cuenta</Typography>
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid
                        container
                        spacing={2}
                        direction={'row'}
                        sx={{
                            mt: 1
                        }}
                        justifyContent={'end'}
                    >
                        <Link
                            component={RouterLink}
                            color={'inherit'}
                            to={'/auth/login'}
                            onClick={checkError}
                        >
                            ¿Ya tienes cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
