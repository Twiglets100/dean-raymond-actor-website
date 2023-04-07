import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import React from "react";
import Box from "@mui/material/Box";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../imgs/upcoming/', false, /\.(png|jpe?g|svg)$/));

const performances = [
    {
        title: 'High Jinx Magic and Illusion show tour',
        description: 'The high jinx show is back on tour throughout 2023 with a fast paced fun Family show filled with amazing tricks, grand illusions & crazy circus thrills performed by Michael Jordan and the Fantastic high jinx dancers. \n' +
            '  \n' +
            'This show is guaranteed to knock your socks off and leave you wanting more! \n' +
            ' \n' +
            '“Magic, Pure & Simple for all the family”\n',
        imageUrl: images["High Jinx cast tour.jpeg"],
        date: 'Jan - Nov, 2023',
        time: 'N/A',
        location: 'UK Tour',
    },
    {
        title: 'High Jinx at Blackpool Tower Circus',
        description: 'The World-class contemporary variety show High Jinx is back at The Blackpool Tower Circus arena! Created by award-winning illusionist and magician Michael Jordan, High Jinx brings 90 minutes of sensational tricks, illusions, juggling, escapology and much more to The Blackpool Tower Circus.',
        imageUrl: images["High Jinx logo.jpg"],
        date: 'July-November',
        time: 'N/A',
        location: 'The Blackpool Tower Circus',
    },
    {
        title: 'High Jinx at Blackpool Tower Circus',
        description: 'Description of Performance 2',
        imageUrl: images["2.jpg"],
        date: 'June 2, 2022',
        time: '7:30 PM',
        location: 'Example Theater',
    },
    {
        title: 'High Jinx at Blackpool Tower Circus',
        description: 'Description of Performance 2',
        imageUrl: images["2.jpg"],
        date: 'June 2, 2022',
        time: '7:30 PM',
        location: 'Example Theater',
    },
    // Add additional performances as needed
];

const Upcoming = () => {
    return (
        <>
            {performances.map((performance, index) => (
                <Card key={index} sx={{ display: 'flex', marginBottom: 2, height: 220, width: "70%", margin: "auto", marginTop: "24px" }}>
                    <Box sx={{ width: '30%', marginRight: 2, height: '100%' }}>
                        <CardMedia
                            component="div"
                            image={performance.imageUrl}
                            title={performance.title}
                            sx={{
                                height: '100%',
                                backgroundSize: 'cover'
                            }}
                        />
                    </Box>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "30%" }}>
                        <div>
                            <Typography variant="h5" component="h2">{performance.title}</Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ marginTop: 1 }}>{performance.date} at {performance.time}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">{performance.location}</Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button variant="contained" color="secondary" sx={{ alignSelf: 'flex-end' }}>Book Now</Button>
                        </div>
                    </CardContent>
                    <div style={{width: "50%"}}>
                        <Typography variant="body2" color="text.secondary" style={{margin: "16px"}}>{performance.description}</Typography>
                    </div>
                </Card>
            ))}
        </>
    );
};

export default Upcoming;