import TurnedInNot from "@mui/icons-material/TurnedInNot"
import Grid from "@mui/material/Grid"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { FC } from "react"
import { Note, useAppDispatch } from "../../store"
import { setActiveNote } from "../../store/journal"

interface Props {
    note: Note
}




export const SidebarItem: FC<Props> = ({ note }) => {

    const dispatch = useAppDispatch()

    const onClickActiveNote = () => {
        dispatch( setActiveNote( note ) )
    }   

    return (
        <ListItem key={note.id} disablePadding>
            <ListItemButton
                onClick={ onClickActiveNote }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={note.title} sx={{
                        
                        '& span':{
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            width: 160
                        }
                    }} />
                    <ListItemText secondary={note.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
