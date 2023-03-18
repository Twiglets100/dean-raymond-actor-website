import React from 'react';
import landing from '../../imgs/landing.jpg'
import Button from "@mui/material/Button";
import ActionCard from "../../Components/ActionCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../imgs/home/', false, /\.(png|jpe?g|svg)$/));

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
                backgroundImage: `url(${landing})`,
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
                    <p style={{margin: "24px"}}>The Comedy Illusionist to make your audience <br/>laugh, smile and drop their jaws!</p>
                    <Button variant="contained" color={"secondary"} size={"large"}>Enquire Now</Button>
                </div>
            </div>
            <Card sx={{width: "55%", margin: "24px auto"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardContent style={{}}>
                        <div>
                            <div>
                                <p>
                                    Dean is a Welsh Actor, Magician and Ventriloquist from Llandudno. Dean has been a 
                                    magician for the last 13 years and his work ranges from TV and Film, to plays, Magic 
                                    and Pantomime. Dean trained at Italia Conti Theatre Academy in London and LMA in Liverpool.
                                </p>
                                <p>
                                    Over the last few years Dean’s work has expanded with a new skill set of 
                                    Ventriloquism which has been seen in Liverpool’s Pantomime over the last 2 years.
                                </p>
                                <p>
                                    As an actor Dean’s TV and film work has ranged from series such as BBC Craith/Hidden 
                                    series, S4C’s Priodas pump mil, commercials such as Sky Sports and film such as 
                                    ‘Almond and the sea horse’ featuring Rebel Wilson.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardMedia component="img" image={images["dean.jpeg"]} style={{width: "300px"}} />
                </div>
            </Card>
            <div style={{display: "flex", margin: "auto", width: "75%", marginTop: "42px"}}>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["red riding hood.jpg"]} title="Red Riding Hood (Jan 2023), Magic Light Productions" content={redRidingHoodDesc} style={{width: "300px"}} />
                </div>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["jack and the beanstalk.jpg"]} title="Jack & The Beanstalk (Dec 2022), Just Entertainment" content={jackAndTheBeanstalkDesc} />
                </div>
                <div style={{flexGrow: 1}}>
                    <ActionCard image={images["sefton park.jpg"]} title="Explore The Palms (May 2022), Sefton Park Palm House" content={exploreThePalmsDesc} />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;