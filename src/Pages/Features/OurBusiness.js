import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const OurBusiness = () => {
    const theme = useTheme();
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/features/ourbusiness.jpg" alt="Our Business" style={{ width: "100%", borderRadius:'30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h2" component="h2" sx={{ color: `${theme.palette.primary.main}`, fontWeight:700 }}>
                            Our Business
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" sx={{ color: `${theme.palette.common.text}`}}>
                        At REDX, our business philosophy is centered around delivering excellence and creating a positive impact. Our diverse product portfolio spans 21 categories, showcasing our commitment to meeting a wide range of customer needs. We operate globally, leveraging our expansive network to ensure the highest quality products tailored to specific requirements.<br/>
                        Beyond profits, we are deeply committed to the well-being of our team members and the communities we serve. Our business goes beyond transactions; it's about building relationships, fostering sustainability, and contributing to the social fabric of the places we call home.<br/>
                        In every aspect of our business – from the value chain to sustainability practices and our overall business philosophy – REDX stands as a symbol of quality, responsibility, and positive change.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default OurBusiness