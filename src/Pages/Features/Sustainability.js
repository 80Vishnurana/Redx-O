import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Sustainability = () => {
    const theme = useTheme();
    return (
        <>
               <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: 'black', backgroundImage: 'url(/headerBack.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', textAlign: 'center' }}>
                    <Typography className="animate__animated animate__bounce" variant="h2" sx={{ color: `${theme.palette.common.white}`, fontWeight: 700 }}>
                    Sustainability Practices at REDX
                    </Typography>
                </div>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/features/sustainaibility.jpg" alt="Our Business" style={{ width: "100%", borderRadius: '30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}  sx={{ display: 'flex', alignItems: 'center' }}>
                     
                        <Typography gutterBottom variant="body1" component="h2"   sx={{fontSize:'19px'}}
                               >
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