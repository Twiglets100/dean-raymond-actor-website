import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../imgs/deans logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SvgIcon from "@mui/material/SvgIcon";
import {Link} from "react-router-dom";

const pages = ['Home', 'Speciality Acts', "Acting", "Upcoming", "Gallery"];

function NavBar() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/Home">
                        <img src={logo} style={{height: "60px", margin: "12px 8px"}} />
                    </Link>
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
                    <div>
                        <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                              to={"https://www.facebook.com/deanraymondentertainment/?locale=en_GB"}>
                            <SvgIcon component={FacebookIcon} inheritViewBox style={{marginRight: "12px"}}/>
                        </Link>
                        <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                              to={"https://www.instagram.com/deanraymondactor/?hl=en"}>
                            <SvgIcon component={InstagramIcon} inheritViewBox style={{marginRight: "12px"}}/>
                        </Link>
                        <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                              to={"https://twitter.com/deanthemagician?lang=en"}>
                            <SvgIcon component={TwitterIcon} inheritViewBox style={{marginRight: "24px"}}/>
                        </Link>
                    </div>
                    <Button variant="contained" color={"secondary"} size={"medium"} component={Link} to="/EnquireNow">Enquire Now</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;