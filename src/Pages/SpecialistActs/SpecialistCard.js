import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {theme} from "../../Layout/Theme";
import Grid from "@mui/material/Grid";
import YouTube from 'react-youtube';
import {makeStyles} from "@material-ui/styles";

export function SpecialistCard(props) {
    const [modalName, setModalName] = useState(null);

    const handleModalOpen = (modalName) => {
        setModalName(modalName);
    };

    const handleModalClose = () => {
        setModalName(null);
    };
    
    return <>
        <Card style={props.cardStyle}>
            <CardMedia
                style={{
                    height: 300,
                    backgroundSize: "cover",
                    backgroundPosition: "center " + props.imageOffsetY
                }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{whiteSpace: "pre-wrap"}}>
                    {props.description}
                </Typography>
            </CardContent>
            <div style={{display: "flex"}}>
                <Button 
                    sx={{ padding: 2, margin: 1, borderRadius: 4, overflow: 'hidden', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
                    onClick={() => handleModalOpen(props.title)}
                >
                    More Info
                </Button>
            </div>
        </Card>
        <SpecialistModal modalName={props.title} isOpen={modalName !== null} onClose={handleModalClose} fullDescription={props.fullDescription} youtubeId={props.youtubeId} />
    </>;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    backgroundColor: theme.palette.primary.main,
    padding: "24px",
    color: theme.palette.primary.contrastText
};

// const youtubeContainerStyle = {
//     width: '100%',
//     height: '100%',
//     position: 'relative',
//     paddingBottom: '56.25%', // 16:9 aspect ratio
//     overflow: 'hidden',
// };
//
// const youtubeIframeStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
// };

const useStyles = makeStyles({
    youtubeContainer: {
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
    },
    youtubeIframe: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    },
});

const SpecialistModal = ({ modalName, isOpen, onClose, fullDescription, youtubeId }) => {
    const classes = useStyles();

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box style={style}>
                <Typography variant="h4">{modalName}</Typography>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item xs={12} md={youtubeId === undefined ? 12 : 6}>
                        <Typography variant="body2" component="p" sx={{ whiteSpace: "pre-line" }}>
                            {fullDescription}
                        </Typography>
                    </Grid>
                    {youtubeId && 
                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <Box sx={{ width: '100%', height: '100%', flexGrow: 1, display: 'flex' }}>
                                <YouTube
                                    videoId={youtubeId}
                                    opts={{
                                        width: '100%',
                                        height: '100%',
                                        playerVars: {
                                            autoplay: 0,
                                        },
                                    }}
                                    containerClassName={classes.youtubeContainer}
                                    className={classes.youtubeIframe}
                                />
                            </Box>
                        </Grid>
                    }
                </Grid>
            </Box>
        </Modal>
    );
};