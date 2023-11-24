import React   from "react";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Grid, Typography, Box, Stack } from "@mui/material";
import { useTheme, styled, } from '@mui/material/styles';
import images from "../core/config/homePage/SliderImages";
import cards from "../core/config/homePage/FeatureCards";
import { section } from "../core/config/homePage/FeatureCards";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import data from "../core/config/homePage/whatWeDo";



register();

const Home = () => {
    const swiperRef = useRef(null);
    const theme = useTheme();
    const swiperElRef = useRef(null);
    const gradient = 'linear-gradient(45deg, #e3f2fd, #64b5f6)';
    const handlePreviousButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }

    };
    const handleNextButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }

    };
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

        border: '1px solid red',
        '&:hover': {
            boxShadow: `0 8px 16px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.05)', // Increase size on hover
            transition: '0.3s ease-in-out', // Add a smooth transition effect        
            transitionDuration: '0.5s',
        },
    }));

    const StyledContainerBox = styled(Box)(({ theme }) => ({
        '&:hover': {
            boxShadow: `0 8px 16px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.05)', // Increase size on hover
            transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', // Add a smooth transition effect
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
            <Container sx={{ bgcolor: '#f5f5f5', mt: { xs: 2, sm: 0, md: 4 } }} maxWidth="xl">
                {data.map((data) => (
                    <Grid container key={data} spacing={2} sx={{ p: { xs: 0, sm: 0, md: 10 }, py: { xs: 8, sm: 10, } }} >
                        <Grid item xs={12} sm={6} md={6} lg={6} >

                            <StyledBox sx={{
                                height: { xs: '300px', sm: 'auto', md: '450px' },
                                width: { md: 'auto', lg: '40vw' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} >
                                <img src={data.img} alt="" style={{ height: '100%', width: '100%', }} />
                            </StyledBox>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ padding: { xs: 0, sm: 0, md: 5 } }}>
                            <Box>
                                <Typography variant="h4" sx={{ color: `${theme.palette.primary.main}`, p: { xs: 2, sm: 1, md: 3 }, }}>
                                    {data.heading}
                                </Typography>
                                <Typography sx={{ py: 3, p: { xs: 2, sm: 1, md: 3 }, fontSize: { xs: '17px', sm: '17px', md: '18px', lg: '20px' }, }} >
                                    {data.text}<br />
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Container>
            <Container sx={{ mt: 5, pb: 5 }} maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ textAlign: 'center', color: `${theme.palette.primary.main}`, pb: 2 }}>
                            Testimonials
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledContainerBox sx={{ backgroundImage: gradient, p: { xs: 3, md: 5 }, height: 'auto', borderRadius: 8 }}>
                            <Swiper
                               ref={(swiper) => (swiperRef.current = swiper)}
                               onSwiper={(swiper) => (swiperRef.current = swiper)}
                               spaceBetween={20}
                               slidesPerView={1}
                               loop={true}
                               navigation={true}
                               pagination={true}
                           

                            >
                                {/* Swiper slides */}
                                <SwiperSlide id="1">
                                    <Box sx={{ height: { xs: 'auto', md: '300px' }, width: '100%' }}>
                                        <Box sx={{ height: '70px', width: '80px', pb: 2 }}>
                                            <img alt="" src="/home/quotation-mark.png" height="100%" width="100%" />
                                        </Box>
                                        <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '18px' } }}>
                                            We use cookies for the best user experience on our website, including to personalize content & offerings, to provide social media features and to analyze traffic. By clicking “Accept All Cookies” you agree to our use of cookies. You can also manage your cookies by clicking on the "Cookie Preferences" and selecting the categories you would like to accept. For more information on how we use cookies please visit our Cookies Policy and
                                        </Typography>
                                        <Typography variant="h4" sx={{ pt: 2, color: `${theme.palette.primary.main}` }}>
                                            Anndy Nallappan
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide id="2" >
                                    <Box sx={{ height: { xs: 'auto', md: '300px' }, width: '100%' }}>
                                        <Box sx={{ height: '70px', width: '80px', pb: 2 }}>
                                            <img alt="" src="/home/quotation-mark.png" height="100%" width="100%" />
                                        </Box>
                                        <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '18px' } }}>
                                            We use cookies for the best user experience on our website, including to personalize content & offerings, to provide social media features and to analyze traffic. By clicking “Accept All Cookies” you agree to our use of cookies. You can also manage your cookies by clicking on the "Cookie Preferences" and selecting the categories you would like to accept. For more information on how we use cookies please visit our Cookies Policy and
                                        </Typography>
                                        <Typography variant="h4" sx={{ pt: 2, color: `${theme.palette.primary.main}` }}>
                                            Anndy Nallappan
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide id="3">
                                    <Box sx={{ height: { xs: 'auto', md: '300px' }, width: '100%' }}>
                                        <Box sx={{ height: '70px', width: '80px', pb: 2 }}>
                                            <img alt="" src="/home/quotation-mark.png" height="100%" width="100%" />
                                        </Box>
                                        <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '18px' } }}>
                                            We use cookies for the best user experience on our website, including to personalize content & offerings, to provide social media features and to analyze traffic. By clicking “Accept All Cookies” you agree to our use of cookies. You can also manage your cookies by clicking on the "Cookie Preferences" and selecting the categories you would like to accept. For more information on how we use cookies please visit our Cookies Policy and
                                        </Typography>
                                        <Typography variant="h4" sx={{ pt: 2, color: `${theme.palette.primary.main}` }}>
                                            Anndy Nallappan
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                            <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'end', padding: 3 }}>
                                <Button variant="outlined" sx={{ mr: 2, fontSize: '20px', fontWeight: 'bold' }} onClick={handlePreviousButtonClick}>&lt;</Button>
                                <Button variant="outlined" sx={{ fontSize: '20px', fontWeight: 'bold' }} onClick={handleNextButtonClick}>&gt;</Button>
                            </Box>
                        </StyledContainerBox>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home