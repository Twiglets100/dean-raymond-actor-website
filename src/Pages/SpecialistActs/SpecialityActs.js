import React, {useState} from 'react';
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {theme} from "../../Layout/Theme.js";
import {SpecialistCard} from "./SpecialistCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Link} from "react-router-dom";

// const useStyles = makeStyles((theme2) => ({
//     // tabs: {
//     //     marginBottom: theme.spacing(2),
//     // },
//    
// }));

let cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
};

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../imgs/specialist-acts/', false, /\.(png|jpe?g|svg)$/));

const fullDescriptions = {
    magic: "\n" +
        "Parlour Magic\n" +
        "Deans stand up parlour show will guarantee to make you gasp with amazement at the variety of magic and also cry with laughter at this intimate and friendly comedy magic show which will leave everyone going home happy. \n" +
        "\n" +
        "Close up Magic\n" +
        "Dean has been working as a close up magician for many years at a wide variety of different events. Dean has also worked at The Magic Bar Live in Llandudno and The Oracle Bar in Liverpool as a close up magic performer. Magic that is truly impossible happening right in front of your eyes. \n" +
        " \n" +
        "Street Magic\n" +
        "Deans street magic show is a comedy outdoor performance which has a blend of illusions, comedy magic, juggling and audience interaction. This show is suitable for busking areas, carnivals and festivals. \n",
    illusions: "Our illusionist act will leave you amazed! Watch as our master magician performs mind-bending illusions and escapes that will have you questioning what is real and what is not.\n" +
        "\n" +
        "Dean Raymond along with his partner Kazia Cannon are Welsh illusionists. A blend of comedy and variety, this fast paced and fun magic show is one not to be missed. \n" +
        "This act is extremely versatile and is designed to fit any setting such as Theatres, Caravan parks, Cruise ships, Hotels and more. This can be a quick 10 minute act to fill a slot with fast paced magic and comedy or it can be a full scale one hour performance. \n",
    ventriloquism: "Dean has been honing his craft as a puppeteer for over a decade, utilizing his creativity and skill " +
        "to breathe life into a vast array of whimsical characters. In the past four years, he has delved even deeper " +
        "into this art form and developed an impressive talent for ventriloquism. Witness firsthand as Dean's " +
        "impeccable technique seamlessly blends with his boundless imagination, bringing his charming characters to " +
        "life with hilarious and memorable performances. With quick wit and an undeniable knack for comedic timing, " +
        "Dean's ventriloquist act is sure to have you in stitches from start to finish. Join in on the fun as Dean " +
        "interacts with his delightful puppets, engaging audiences of all ages in a performance you won't soon forget."
};

function SpecialityActs() {
    // const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                padding: theme.spacing(2),
                marginBottom: theme.spacing(2),
                textAlign: 'center'
            }}>
                <Typography variant="h4" style={{margin: "8px"}}>Speciality Acts</Typography>
                <Typography variant="subtitle1" style={{margin: "8px"}}>Book one of our amazing acts today!</Typography>
                <Button variant="contained" color="secondary" style={{marginTop: 'auto'}} component={Link} to="/EnquireNow">Enquire Now</Button>
            </div>

            {/*<Tabs value={value} onChange={handleChange} centered style={{marginBottom: theme.spacing(2)}}>*/}
            {/*    <Tab label="Home" />*/}
            {/*    <Tab label="About" />*/}
            {/*    <Tab label="Specialist Acts" />*/}
            {/*    <Tab label="Contact" />*/}
            {/*</Tabs>*/}

            {/* Grid Layout */}
            <Grid container spacing={2} style={{width: "80%", margin: "auto"}}>
                <Grid item xs={12} sm={6} md={4}>
                    <SpecialistCard
                        title="Magic Act" cardStyle={cardStyle} image={images["magic-min.jpeg"]} fullDescription={fullDescriptions.magic}
                        description="Our magic act will leave you spellbound! Watch as our illusionist makes objects disappear and reappear right before your eyes."
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <SpecialistCard
                        title="Ventriloquism Act" cardStyle={cardStyle} image={images["ventriloquism-min.jpg"]} fullDescription={fullDescriptions.ventriloquism}
                        description="Dean has been working with puppets for 10 years and over the last 4 years has become a ventriloquist. This ventriloquist act will have you laughing out loud! Watch as our master puppeteer brings his characters to life and interacts with the audience."
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <SpecialistCard
                        title="Illusionist Act" cardStyle={cardStyle} imageOffsetY="35%" image={images["illusionist-min.jpg"]} fullDescription={fullDescriptions.illusions}
                        description="Our illusionist act will leave you amazed! Watch as our master magician performs mind-bending illusions and escapes that will have you questioning what is real and what is not."
                    />
                </Grid>
                {/* Additional grid items for other acts */}
                {/* <Grid item xs={12} sm={6} md={4}>...</Grid> */}
                {/* <Grid item xs={12} sm={6} md={4}>...</Grid> */}
                {/* <Grid item xs={12} sm={6} md={4}>...</Grid> */}
            </Grid>
        </div>
    );
}

export default SpecialityActs;