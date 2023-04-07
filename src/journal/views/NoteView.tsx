import SaveOutlined from "@mui/icons-material/SaveOutlined"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useMemo, useEffect, ChangeEvent, useRef } from "react"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
import { formatDate } from "../../helpers"
import { Note, useAppDispatch, useAppSelector } from "../../store"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import { ImageGallery } from "../components"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import IconButton from "@mui/material/IconButton"
import DeleteOutline from "@mui/icons-material/DeleteOutline"

import { useFormik } from "formik";

export const NoteView = () => {

    const dispatch = useAppDispatch()

    const { active: note, messageSaved, isSaving } = useAppSelector(state => state.journal)
    

    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (messageSaved!.length > 0) {
            Swal.fire('Nota actualizada', messageSaved!, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }


    const onFileInputChangue = ({ target }: ChangeEvent<HTMLInputElement>) => {

        if (target.files?.length === 0) return

        dispatch(startUploadingFiles(target.files as FileList))
    }

    const onDelete = () => {

        dispatch(startDeletingNote())
    }

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            ...note
        },
        onSubmit: values => {
            onSaveNote()
        },
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true
    })


    useEffect(() => {
        dispatch(setActiveNote({ ...values } as Note))
    }, [values])


    const dateString = useMemo(() => {

        const newDate = formatDate(+values.date)
        return newDate

    }, [values.date])


    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate_faster"
        >
            <Grid
                item
            >
                <Typography
                    fontSize={34}
                >
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>

                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    hidden
                    onChange={onFileInputChangue}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                    <FileUploadIcon />

                </IconButton>

                <Button
                    color="primary"
                    onClick={() => handleSubmit()}
                    disabled={isSaving}
                    sx={{ px: 3 }}
                    type="submit"
                >
                    <SaveOutlined />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type={'text'}
                    variant={'filled'}
                    fullWidth
                    placeholder="Ingrese un título"
                    label={'Título'}
                    sx={{ border: 'none', mb: 1 }}
                    name={'title'}
                    value={values.title}
                    onChange={handleChange}
                />
                <TextField
                    type={'text'}
                    variant={'filled'}
                    fullWidth
                    multiline
                    placeholder="¿Qué está pasando?"
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                    name={'body'}
                    value={values.body}
                    onChange={handleChange}
                />
            </Grid>

            <Grid container justifyContent={'end'}>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color={'error'}
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image Gallery */}
            <ImageGallery imgUrls={note.imageUrls} />

        </Grid>
    )
}
