import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import cvPdf from '../../docs/Dean Raymond Acting CV.pdf';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../imgs/acting/', false, /\.(png|jpe?g|svg)$/));

const divStyle = {
    fontSize: '10px',
    color: '#cccccc',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
    fontWeight: '100',
};

const linkStyle = {
    color: '#cccccc',
    textDecoration: 'none',
};

const iframeStyle = {
    width: '100%',
    height: '150px',
    scrolling: 'no',
    frameborder: 'no',
    allow: 'autoplay',
};

const Acting = () => {
    return (
        <Card sx={{ display: 'flex', width: '80%', margin: "auto", marginTop: "36px" }}>
            <CardMedia
                component="iframe"
                sx={{ 
                    width: '60%', 
                    height: '660px',
                    border: 0
                }}
                title="YouTube video"
                src="https://www.youtube.com/embed/A1b1zq00zu0"
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
                <div style={{display: "block", justifyContent: "center"}}>
                    <div style={{width: "90%", margin: "auto", marginTop: "16px"}}>
                        <iframe
                            style={iframeStyle}
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1501749739&color=
                            %23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        />
                    </div>
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: "16px"
                        }}>
                            <Button variant="contained" 
                                    color="primary" 
                                    startIcon={<GetAppIcon/>} 
                                    href={cvPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                Download CV
                            </Button>
                            <Button variant="contained" color="primary" href="https://www.spotlight.com/9094-6727-1109" target="_blank">
                                <img src={images["spotlight-logo.png"]} alt="Spotlight Casting Logo" style={{ margin: "8px", marginLeft: "0", marginRight: '10px', height: "40px" }} />
                                Find me on Spotlight
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Acting;
