import NavBar from "./Layout/NavBar";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {theme} from "./Layout/Theme.js";
import Home from "./Pages/Home/Home";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Gallery from "./Components/Gallery/Gallery";
import SpecialityActs from "./Pages/SpecialistActs/SpecialityActs";
import Acting from "./Pages/Acting/Acting";
import Upcoming from "./Pages/Upcoming/Upcoming";
import EnquireNow from "./Pages/EnquireNow/EnquireNow";
import Pantomime from "./Pages/Pantomime/Pantomime";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Toolbar from "@mui/material/Toolbar";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box component="div" style={{display: 'grid', gridTemplateRows: '1fr auto', minHeight: '100vh',}}>
                    <Box style={{paddingBottom: theme.spacing(4)}}>
                        <BrowserRouter>
                            <NavBar/>
                            <Routes>
                                <Route index element={<Home/>}/>
                                <Route path="Speciality Acts" element={<SpecialityActs/>}/>
                                <Route path="Acting" element={<Acting/>}/>
                                <Route path="Pantomime" element={<Pantomime/>}/>
                                <Route path="Upcoming" element={<Upcoming/>}/>
                                <Route path="gallery" element={<Gallery/>}/>
                                <Route path="EnquireNow" element={<EnquireNow/>}/>
                                <Route path="*" element={<Home/>}/>
                            </Routes>
                        </BrowserRouter>
                    </Box>
                    <Box component="footer" style={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        padding: theme.spacing(2)
                    }}>
                        <BrowserRouter>
                            <Container sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div>
                                    <Typography variant="body1" align="center">
                                        Dean Raymond - Keep up to date with me here:
                                    </Typography>
                                </div>
                                <div style={{display: "flex"}}>
                                    <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                                          to={"https://www.facebook.com/deanraymondentertainment/?locale=en_GB"}>
                                        <SvgIcon component={FacebookIcon} inheritViewBox style={{marginLeft: "12px"}}/>
                                    </Link>
                                    <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                                          to={"https://www.instagram.com/deanraymondactor/?hl=en"}>
                                        <SvgIcon component={InstagramIcon} inheritViewBox
                                                 style={{marginLeft: "12px"}}/>
                                    </Link>
                                    <Link style={{textDecoration: "none", color: "inherit"}} target="_blank"
                                          to={"https://twitter.com/deanthemagician?lang=en"}>
                                        <SvgIcon component={TwitterIcon} inheritViewBox style={{marginLeft: "12px"}}/>
                                    </Link>
                                </div>
                                <div>
                                    <Typography variant="body1" align="center" sx={{marginLeft: "12px"}}>
                                        Contact Me - Phone: 07584066315 or Email: deanraymondactor@gmail.com
                                    </Typography>
                                </div>
                            </Container>
                        </BrowserRouter>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
