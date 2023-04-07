import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {theme} from "../../Layout/Theme";

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
                    backgroundSize: "cover"
                }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
        <SpecialistModal modalName={props.title} isOpen={modalName !== null} onClose={handleModalClose} fullDescription={props.fullDescription} />
    </>;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    backgroundColor: theme.palette.primary.main,
    padding: "24px",
    color: theme.palette.primary.contrastText
};

const SpecialistModal = ({ modalName, isOpen, onClose, fullDescription }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box style={style}>
                <Typography variant="h4">{modalName}</Typography>
                <div>
                    <Typography variant="body2" component="p">
                        {fullDescription}
                    </Typography>
                </div>
            </Box>
        </Modal>
    );
};