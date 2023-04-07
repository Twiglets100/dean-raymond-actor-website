import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../imgs/acting/', false, /\.(png|jpe?g|svg)$/));

const Acting = () => {
    return (
        <Card sx={{ display: 'flex', width: '80%', margin: "auto", marginTop: "36px" }}>
            <CardMedia
                component="iframe"
                sx={{ width: '70%', height: '600px' }}
                title="YouTube video"
                src="https://www.youtube.com/embed/FfBBSlr1jyA"
            />
            <CardContent sx={{ flex: 1, width: "30%" }}>
                <Typography gutterBottom variant="h5" component="div">
                    Acting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dean discovered his passion for acting at a young age, starting with a Performing Arts BTEC Level 3 course when he was just 17. Since then, he has worked hard to become a fully trained actor, completing a Foundation Acting course at Italia Conti Theatre Academy and earning a BA Honours Degree in Acting at LMA Liverpool.
                    <br />
                    <br />
                    Dean has received specialised training in Acting for Games from the National Youth Theatre and has also completed an Acting for Camera course by the National Youth Film Academy. His showreels can be accessed via Spotlight, and he is proud to be a member of Equity.
                    <br />
                    <br />
                    Dean has worked on a wide range of productions for TV, Film, and Theatre, showcasing his versatility and skill as an actor. He is currently a main cast member in the Henry House Care Home Drama series, and has performed in numerous plays in prestigious venues such as The Everyman Theatre, The Playhouse Liverpool, The Storyhouse Chester, and Theatre Colwyn, among others. He has also worked on feature films including 'The Bronze Abstraction', 'Almond and the Seahorse', and 'Chuck Chuck Baby'.
                </Typography>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }} href="https://www.spotlight.com/9094-6727-1109" target="_blank">
                        <img src={images["spotlight-logo.png"]} alt="Spotlight Casting Logo" style={{ margin: "8px", marginLeft: "0", marginRight: '10px', height: "60px" }} />
                        Find me on Spotlight
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default Acting;
