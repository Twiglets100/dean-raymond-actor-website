import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../imgs/deans logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from "@mui/material/SvgIcon";
import {Link} from "react-router-dom";

const pages = ['Home', 'Info', 'Specialist acts', "Acting", "Currently ‘working on’ shows", "Gallery", "Reviews"];

function NavBar() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} style={{height: "60px", margin: "12px 8px"}} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={Link}
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                style={{marginLeft: "8px"}}
                                to={page}
                            >
                                {page}
                            </Button>
                            // <Link to={page}>{page}</Link>
                        ))}
                    </Box>
                    <SvgIcon component={InstagramIcon} inheritViewBox style={{marginRight: "8px"}} />
                    <SvgIcon component={FacebookIcon} inheritViewBox style={{marginRight: "12px"}} />
                    <Button variant="contained" color={"secondary"} size={"medium"}>Enquire Now</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;