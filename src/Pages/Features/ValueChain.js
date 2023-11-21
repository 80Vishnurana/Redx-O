import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ValueChain = () => {
    const theme = useTheme();
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/features/valuechain.jpg" alt="Our Business" style={{ width: "100%", borderRadius: '30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h2" component="h2" sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                            Value Chain at REDX
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" sx={{ color: `${theme.palette.common.text}` }}>
                            At REDX, our value chain is the backbone of our operations, seamlessly connecting every stage of our business to deliver exceptional products and services. We take pride in our comprehensive approach, ensuring that each link in the chain contributes to the overall quality and efficiency of our offerings.<br />

                            From sourcing raw materials to the delivery of finished goods, we prioritize transparency and collaboration. Our dedicated team works in harmony, bringing diverse skills and expertise to every phase of the value chain. This collaborative effort enables us to consistently meet and exceed the expectations of our customers.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default ValueChain