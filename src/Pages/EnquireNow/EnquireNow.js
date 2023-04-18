import { TextField, Button, Grid, Typography } from '@mui/material';
import React from "react";
import Card from "@mui/material/Card";
import { useForm, ValidationError } from '@formspree/react';

function EnquireNow() {
    const [state, handleSubmit] = useForm("xlekadjg");

    if (state.succeeded) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '50px',
            }}>
                <Card sx={{ maxWidth: '700px', width: '70%', padding: '24px' }}>
                    <Typography variant="h5" gutterBottom>Thanks for your enquiry, I'll get back to you as soon as I can!</Typography>
                </Card>
            </div>
        );
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px',
        }}>
            <Card sx={{ maxWidth: '700px', width: '70%', padding: '24px' }}>
                <Typography variant="h5" gutterBottom>Please fill in the details below:</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Name" name="name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Email" name="email" type="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth label="Message" name="message" multiline rows={4} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="secondary">
                                Enquire Now
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Alternatively, you can send an email directly to{' '}
                    <a href="mailto:deanraymondactor@gmail.com" target="_blank" rel="noopener noreferrer">
                        deanraymondactor@gmail.com
                    </a>
                </Typography>
            </Card>
        </div>
    );
}

export default EnquireNow;