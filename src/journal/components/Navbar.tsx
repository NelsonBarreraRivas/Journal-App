import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { startLogout, useAppDispatch } from '../../store'

interface Props {
    drawerWidth: number
}

export const Navbar: FC<Props> = ({ drawerWidth }) => {

    const dispatch = useAppDispatch() 

    const onLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >

            <Toolbar>
                <IconButton
                    color={'inherit'}
                    edge={'start'}
                    sx={{
                        mr: 2,
                        display: { sm: 'none' }
                    }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Typography
                        variant='h6'
                        noWrap
                        component={'div'}
                    >
                        JournalApp
                    </Typography>

                    <Tooltip title="Salir" placement="left">
                        <IconButton
                            size='large'
                            sx={{
                                color: 'error.main'
                            }}
                            onClick={ onLogout }
                            >
                            <LogoutOutlined />
                        </IconButton>
                    </Tooltip>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
