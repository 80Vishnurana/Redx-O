import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const About = () => {
    const theme = useTheme();
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/about.jpg" alt="Our Business" style={{ width: "100%", borderRadius: '30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h2" component="h2" sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                            About Us
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" sx={{ color: `${theme.palette.common.text}` }}>
                            We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products. This comprehensive approach allows us to cater to a wide array of needs, providing our customers with high-quality solutions.<br />

                            At REDX, we prioritize a global footprint, enabling us to leverage robust sourcing networks. This, in turn, ensures that we consistently deliver top-notch products that align with the unique requirements of our customers. Our commitment extends beyond mere business operations – we actively engage with our stakeholders to foster sustainability throughout our value chain, with a keen focus on minimizing our carbon footprint.<br />
                        </Typography>

                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default About