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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div>
                    <BrowserRouter>
                        <NavBar/>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="Speciality Acts" element={<SpecialityActs/>}/>
                            <Route path="Acting" element={<Acting/>}/>
                            <Route path="Upcoming" element={<Upcoming/>}/>
                            <Route path="gallery" element={<Gallery/>}/>
                            <Route path="*" element={<Home/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
