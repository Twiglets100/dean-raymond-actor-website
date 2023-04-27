import React from 'react';
import Button from "@mui/material/Button";
import ActionCard from "../../Components/ActionCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../imgs/home/', false, /\.(png|jpe?g|svg|webp)$/));

const redRidingHoodDesc = "A magical pantomime based in North Wales. \n" +
    "Red Riding Hood alongside the Wizard of The Forest, " +
    "Granny Hood and her best friend Russel Sprout set out to save the village from " +
    "the mean Wolf who wants to tear down the village. \n";

const jackAndTheBeanstalkDesc = "A pantomime in the heart of Liverpool, Jack and The Beanstalk was a pantomime " +
    "filled with comedy scenes, song, dance and variety. The Trot family are so poor they don’t have a bean to " +
    "their name, and the Giant Blunderbore is terrifying the village. " +
    "Jack alongside his brother Silly Simon and mother Dame Trott need to save Jill and Cilla the Cow from the giant.";

const exploreThePalmsDesc = "Family friendly interactive show exploring the famous Sefton Park, The Palm House.\n" +
    "Playing the character of ‘Doc Leaf’ the extentric gardener who loves to share his knowledge of plant life.\n";

function Home() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${images["landing-min.webp"]})`,
                backgroundSize: "100% auto",
                height: "800px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 45%",
                position: "relative",
                backgroundAttachment: "fixed"
            }}>
                <div style={{
                    bottom: "28px",
                    color: "white", 
                    position: "absolute", 
                    left: "30%", 
                    fontSize: "32px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: "24px",
                    width: "40%"
                }}>
                    <p style={{margin: "24px", textAlign: "center"}}>Unleash the laughter and wonder: The Comedy Illusionist who'll Keep your audience smiling, laughing, and gasping!</p>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color={"secondary"} size={"large"} component={Link} to="/EnquireNow">Enquire Now</Button>
                    </div>
                </div>
            </div>
            <Card sx={{width: "55%", margin: "24px auto"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardContent style={{}}>
                        <div>
                            <div>
                                <Typography variant="h5" component="h2">A bit about Dean </Typography>
                                <p>
                                    Dean is a multi-talented entertainer from Llandudno, Wales. He's an actor, magician, and ventriloquist who has been performing for over a decade. Dean's work has been featured on both TV and film, including appearances on the BBC's Craith/Hidden series, S4C's Priodas pump mil, and commercials such as Sky Sports. He has also acted in films like 'Almond and the Seahorse,' which features Rebel Wilson.
                                <br/>
                                <br/>
                                    Dean trained at Italia Conti Theatre Academy in London and LMA in Liverpool. Over the years, he has expanded his repertoire to include ventriloquism, which he has showcased in Liverpool's Pantomime for the past two years. With his unique blend of comedy, illusion, and acting, Dean is sure to leave your audience laughing, smiling, and amazed.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardMedia component="img" image={images["dean.jpeg"]} style={{width: "300px"}} />
                </div>
            </Card>
            <div style={{display: "flex", margin: "auto", width: "70%", marginTop: "42px"}}>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["red riding hood.jpg"]} title="Red Riding Hood (Jan 2023), Magic Light Productions" content={redRidingHoodDesc} style={{width: "300px"}} />
                </div>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["jack and the beanstalk-min.jpg"]} title="Jack & The Beanstalk (Dec 2022), Just Entertainment" content={jackAndTheBeanstalkDesc} />
                </div>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["sefton park.jpg"]} title="Explore The Palms (May 2022), Sefton Park Palm House" content={exploreThePalmsDesc} />
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Home;