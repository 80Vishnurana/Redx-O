import React from "react";
import { Box, Button, Grid, TextField, Typography, } from "@mui/material";
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
    <Box>
      <Typography variant="h2" sx={{display:'flex', justifyContent:'center', paddingTop:5, fontWeight:'bold' , color: `${theme.palette.primary.main}`}}>
        Contact Us

      </Typography>
    </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src="/contact/form.jpg" alt="Our Business" style={{ width: '100%', height: '100%', borderRadius: '30px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <form style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
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
              <Button size="large" variant="outlined" sx={{ my: 2,}}>Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
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
                )  )}
              

                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  )
}

export default Contact