import NavBar from "./Layout/NavBar";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {theme} from "./Layout/Theme.js";
import Home from "./Pages/Home/Home";
import {BrowserRouter} from "react-router-dom";
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
                    <Box component="footer" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.common.white, padding: theme.spacing(2)}}>
                        <Container>
                            <Typography variant="body1" align="center">
                                © 2023 Your Company. All rights reserved.
                            </Typography>
                        </Container>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
