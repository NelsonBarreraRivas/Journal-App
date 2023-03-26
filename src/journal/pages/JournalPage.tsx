import AddOutlined from "@mui/icons-material/AddOutlined"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import { useAppDispatch, useAppSelector } from "../../store"
import { startNewNote } from "../../store/journal"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {

    const { isSaving, active } = useAppSelector(state => state.journal)
    
    const disptach = useAppDispatch()

    const onClickNewNote = () => {

        disptach(startNewNote())
    }

    return (
        <>
            {
                Object.values(active).length ?
                    <NoteView /> :
                    <NothingSelectedView />
            }

            <Tooltip title="Agregar" placement="left-start">
                <IconButton
                    size='large'
                    sx={{
                        color: 'white',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50
                    }}
                    onClick={onClickNewNote}
                    disabled={isSaving}
                >
                    <AddOutlined
                        sx={{
                            fontSize: 30
                        }}
                    />
                </IconButton>
            </Tooltip>

        </>
    )
}
