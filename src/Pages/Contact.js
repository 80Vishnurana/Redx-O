import React from "react";
import {Button, Grid, TextField, Typography, } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import contactCards from "../core/config/contactPage/contactCards";
import styled from "@emotion/styled";


const StyledCard = styled(Card)(({ theme }) => ({
  '&:hover': {
    boxShadow: `0 8px 16px ${theme.palette.primary.main}50`, // Add a box shadow on hover
    transform: 'scale(1.05)', // Increase size on hover
    transition: '0.3s ease-in-out', // Add a smooth transition effect
  },
}));



const Contact = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: 'black', backgroundImage: 'url(/headerBack.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', textAlign: 'center' }}>
        <Typography className="animate__animated animate__bounce" variant="h2" sx={{ color: `${theme.palette.common.white}`, fontWeight: 700 }}>
          Contact Us
        </Typography>
      </div>
      <Container sx={{ pb: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} >
            <img src="/contact/contact.jpg" alt="Our Business" className="animate__animated animate__rotateIn" style={{ width: '100%', height: '100%', borderRadius: '30px' }} />
          </Grid>
          <Grid item xs={12} md={6}  sx={{mt:10}}>
            <form style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px', }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "skyBlue",
                        }
                      }
                    }}
                  />
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "skyBlue",
                        }
                      }
                    }}
                  />
                  <TextField
                    label="Enter Phone No"
                    variant="outlined"
                    fullWidth
                    type="number"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "skyBlue",
                        }
                      }
                    }}
                  />
                  <TextField
                    label="Another Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "skyBlue",
                        }
                      }
                    }}
                  />
                </Grid>
              </Grid>
              <Button size="large" variant="outlined" sx={{ my: 2, }}>Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pb: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {contactCards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <StyledCard
                sx={{ height: '100%', }}
              >
                <CardContent sx={{ flexGrow: 1, p: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img src={card.img} alt="" style={{ width: '70px', height: '70px', }}
                  />
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: `${theme.palette.primary.main}`, pt: 3, pb: 1 }}>
                    {card.heading}
                  </Typography>

                  {card.content.map((content, index) => (<>
                    <Typography sx={{ color: `${theme.palette.common.text}` }}>
                      {content.cont}
                    </Typography>
                    <Typography sx={{ color: `${theme.palette.common.text}` }}>
                      {content.const}
                    </Typography>
                  </>
                  ))}


                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

      </Container>
      <Container sx={{py:5}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8336794899974!2d77.06332957418007!3d28.604765975679918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1ca4e425b3%3A0x9b3661bb9aab2b7f!2sBlue%20Brain%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1702382718543!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}

export default Contact