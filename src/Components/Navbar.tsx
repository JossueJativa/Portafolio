import { AppBar, Box, Container, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { logo } from '../assets/img';

const pages: { [key: string]: string }[] = [
    { Conóceme: '#about' },
    { Proyectos: '#projects' },
    { Contactare: '#contact' }
]

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toogleDrawer = (open: boolean) => {
        setToggle(open);
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '20px 0' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {/* Logo con enlace a Home */}
                    <IconButton
                        edge='start'
                        color='inherit'
                        sx={{
                            '&hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <a href='#'>
                            <img src={logo} alt='logo'
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%'
                                }}
                            />
                        </a>
                    </IconButton>

                    {/* Menú hamburguesa */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            onClick={() => toogleDrawer(true)}
                            color='inherit'
                            sx={{
                                '&hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Menú en pantallas grandes */}
                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        justifyContent: 'flex-end'
                    }}>
                        {pages.map((pages) => (
                            <Typography
                                key={Object.keys(pages)[0]}
                                component='a'
                                href={Object.values(pages)[0]}
                                sx={{
                                    my: 2,
                                    mx: 2,
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                    color: 'white',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s easy',
                                    '&hover': {
                                        color: 'black',
                                        textDecoration: 'underline !important'
                                    },
                                    fontFamily: 'Jacques Francois, serif, Arial, Helvetica, sans-serif;'
                                }}
                            >
                                {Object.keys(pages)}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </Container>

            {/* Menu lateral (Drawer) */}
            <Drawer anchor='left' open={toggle} onClose={() => toogleDrawer(false)}>
                <Box sx={{ width: 200, height: '100vh', color: 'black', padding: 2 }} role="presentation">
                    {/* Botón de cerrar */}
                    <IconButton
                        onClick={() => toogleDrawer(false)}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 1,
                            '&hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <CloseIcon />
                    </IconButton>

                    {/* Opciones del menú */}
                    <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left' }}>
                        {pages.map((page) => (
                            <ListItem key={Object.keys(page)[0]} disablePadding>
                                <ListItemButton component='a' href={Object.values(page)[0]}>
                                    <ListItemText primary={Object.keys(page)[0]} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    )
}
