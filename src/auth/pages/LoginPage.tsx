import { Link as RouterLink } from "react-router-dom";
import { FormValidations, useForm } from "../../hooks"
import { FormEvent, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { checkingErrors, startFacebookSignIn, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"

import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Google from '@mui/icons-material/Google'
import Link from "@mui/material/Link"
import Alert from "@mui/material/Alert";
import Facebook  from "@mui/icons-material/Facebook";

const formData = {
    email: '',
    password: ''
}

const formValidations: FormValidations = {
    email: [(value) => value.toString().includes('@'), 'El correo debe de tener una @'],
    password: [(value) => value.toString().length >= 6, 'El password debe de tener más de 6 letras'],
}

export const LoginPage = () => {

    const dispatch = useAppDispatch()



    const { status, errorMessage } = useAppSelector(state => state.auth)

    const { email,
        password,
        formState,
        onChangue,
        onResetForm,
        isEmpty,
        isFormValid,
        formValidation
    } = useForm(formData, formValidations)

    const [formSubmitted, setFormSubmitted] = useState(false)

    const { emailValid, passwordValid } = formValidation

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()

        setFormSubmitted(true)
        if (!isFormValid) return

        dispatch(startLoginWithEmailPassword(formState))
    }

    const onGoogleSignIn = () => {

        dispatch(startGoogleSignIn())
    }

    const onFacebookSignIn = () => {
        
        dispatch(  startFacebookSignIn() )
    }

    const checkError = () => {
        
        dispatch(checkingErrors())
    }

    return (
        <>
            <Typography variant="h4" textAlign={'center'}>
                Iniciar Sesion
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
                            type={'email'}
                            name={'email'}
                            value={email}
                            onChange={onChangue}
                            placeholder={'correo@google.com'}
                            label={'Email'}
                            fullWidth
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
                            name={'password'}
                            value={password}
                            onChange={onChangue}
                            placeholder={'••••••••••'}
                            fullWidth
                            error={!!passwordValid && formSubmitted}
                            helperText={formSubmitted && passwordValid}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display={!!errorMessage ? '' : 'none'}
                        sx={{
                            mb: 2
                        }}
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
                        >
                            <Button
                                variant="contained"
                                fullWidth
                                type={'submit'}
                                disabled={isEmpty || isAuthenticating}
                            >
                                <Typography>Ingresar</Typography>
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >

                            <Button
                                variant="contained"
                                color="success"
                                fullWidth
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticating}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                        >

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={onFacebookSignIn}
                                disabled={isAuthenticating}
                            >
                                <Facebook />
                                <Typography sx={{ ml: 1 }}>Facebook</Typography>
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
                            to={'/auth/register'}
                            onClick={checkError}
                        >

                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
