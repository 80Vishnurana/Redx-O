import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Sustainability = () => {
    const theme = useTheme();
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/features/sustainaibility.jpg" alt="Our Business" style={{ width: "100%", borderRadius: '30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h2" component="h2" sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                            Sustainability Practices at REDX
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" sx={{ color: `${theme.palette.common.text}` }}>
                            Sustainability is at the heart of everything we do at REDX. Our commitment to environmental responsibility is woven into every aspect of our business. We work closely with stakeholders to implement sustainable practices throughout our value chain, minimizing our carbon footprint and contributing to a healthier planet.<br/>
                            From eco-friendly sourcing to reducing waste and optimizing energy usage, we are dedicated to making a positive impact. Our sustainability initiatives not only benefit the environment but also align with the evolving expectations of our customers who prioritize businesses with a genuine commitment to responsible practices.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default Sustainability