import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useAppSelector } from '../../store'
import { SidebarItem } from './'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 7s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
interface Props {
    drawerWidth?: number
}

export const Sidebar: FC<Props> = ({ drawerWidth = 240 }) => {

    const { displayName } = useAppSelector(state => state.auth)
    const { notes } = useAppSelector(state => state.journal)

    return (
        <Box
            component={'nav'}
            sx={{ 
                width: { sm: drawerWidth }, 
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    '.MuiDrawer-paper::-webkit-scrollbar': {
                        width: '0.39rem',
                        backgroundColor: 'transparent',
                    },
                    '.MuiDrawer-paper::-webkit-scrollbar-thumb': {
                        backgroundColor: '#55555580',
                        borderRadius: 3
                    }
                }}
            >
                <Toolbar
                >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt={displayName!}>
                            {displayName![0]}
                        </Avatar>
                    </StyledBadge>
                    <Typography variant={'h6'} noWrap component={'div'} sx={{ ml: 1 }}>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SidebarItem note={note} key={ note.id }/>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
