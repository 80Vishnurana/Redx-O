import React from "react";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Grid, Typography, Box, Stack } from "@mui/material";
import { useTheme, styled, duration } from '@mui/material/styles';
import images from "../core/config/homePage/SliderImages";
import cards from "../core/config/homePage/FeatureCards";
import { section } from "../core/config/homePage/FeatureCards";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import data from "../core/config/homePage/whatWeDo";


register();

const Home = () => {
    const theme = useTheme();
    const swiperElRef = useRef(null);


    useEffect(() => {
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    const StyledButton = styled(Button)(({ theme }) => ({
        color: theme.palette.common.text,
        border: `1px solid ${theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.highlight.default
        },
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        '&:hover': {
            boxShadow: `0 10px 20px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.05)', // Increase size on hover
            transition: '0.3s ease-in-out', // Add a smooth transition effect
        },
    }));
    const StyledBox = styled(Box)(({ theme }) => ({
        height:'450px',
        width:'500px',
        border:'1px solid red',
        '&:hover': {
            boxShadow: `0 8px 16px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.05)', // Increase size on hover
            transition: '0.3s ease-in-out', // Add a smooth transition effect        
            transitionDuration: '0.5s',
        },
    }));

    return (
        <>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                pagination="true"
                speed="500" loop="true" effect="fade"
            >
                {images.map((slide, index) => (
                    <swiper-slide key={index} style={{
                        height: '500px',
                        backgroundImage: `url(${slide.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}>

                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            style={{ height: '100%' }}
                            padding={'50px'}
                        >
                            <Typography variant="h3" sx={{ color: `${theme.palette.common.white}` }}>{slide.text}</Typography>
                            <hr />
                            <Typography variant="body1" sx={{ color: `${theme.palette.common.white}` }}>{slide.cta}</Typography>
                        </Grid>

                    </swiper-slide>
                ))}
            </swiper-container>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: `${theme.palette.common.white}`,
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {section.title}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            {section.content}
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            {section.actions.map((action, index) => (
                                <StyledButton key={index} size="large" href={action.url}>
                                    {action.action}
                                </StyledButton>
                            ))}
                        </Stack>
                    </Container>
                </Box>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <StyledCard
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',


                                    }}
                                    image={card.img}
                                />
                                <CardContent sx={{ flexGrow: 1, padding: '20px' }}>
                                    <Typography gutterBottom variant="h5" component="h2" sx={{ color: `${theme.palette.primary.main}` }}>
                                        {card.heading}
                                    </Typography>
                                    <Typography sx={{ color: `${theme.palette.common.text}` }}>
                                        {card.content}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ padding: '20px' }}>
                                    {card.actions.map((action, index) => (
                                        <StyledButton key={index} size="small" href={action.url}>
                                            {action.action}
                                        </StyledButton>
                                    ))}
                                </CardActions>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container sx={{bgcolor:'#f5f5f5', mt:4}} maxWidth="xl"> 
            {data.map((data , index) =>(        
                <Grid container spacing={2}  sx={{p:10,}} >             
                    <Grid item xs={12} sm={6} md={6} >
                        <StyledBox >
                    <img src={data.img} alt="" style={{ height: '100%', width: '100%',  }}  />
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{p:5}}>
                        <Typography variant="h4" sx={{ color: `${theme.palette.primary.main}`,p:3 , }}>
                          {data.heading}                  
                        </Typography>
                        <Typography sx={{py:3,p:3 ,fontSize:'20px' ,}} >
                           {data.text}<br/>
                        </Typography>
                    </Grid>                 
                </Grid>
                  ))}      
            </Container>
            <Container sx={{mt:4}} maxWidth="xl"> 
           
            </Container>
        </>
    )
}

export default Home