import React, { useState } from "react";
import { useRef, useEffect } from 'react';
import { Grid, Typography, Box, Stack } from "@mui/material";
import { useTheme, styled, } from '@mui/material/styles';
import images from "../core/config/homePage/SliderImages";
import cards, { redx } from "../core/config/homePage/FeatureCards";
import { section } from "../core/config/homePage/FeatureCards";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import data from "../core/config/homePage/whatWeDo";
// import "./portfolio.css"
import Testimonials from "../core/config/homePage/Testimonials";
import 'animate.css';



const Home = () => {

 
    const swiperRef = useRef(null);
    const theme = useTheme();
    const swiperElRef = useRef(null);
    const gradient2 = 'linear-gradient(95deg, #e3f2fd, #ffebee)';
    const [counterStart, setCounterStart] = useState(false);
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
        
    }));

    const StyledCountersBox = styled(Box)(({ theme }) => ({
        width: '100%',
        height: '150px',
        backgroundImage: gradient2,
        borderRadius: '15px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontWeight: 'bold',
        alignItems: "center",
        textAlign: 'center',
        '&:hover': {
            boxShadow: `0 8px 16px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.05)', // Increase size on hover
            transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', // Add a smooth transition effect
        },
    }));


    return (
        <>
            <Swiper
                ref={swiperElRef}
                slidesPerView={1}
                effect="fade"
                speed={2000}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
            >
                {images.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                height: '600px',
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="left"
                                style={{ height: '100%' }}
                                padding={'100px'}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: `${theme.palette.common.white}`,
                                        fontWeight: 'bold',
                                    }}
                                    className="animate__animated animate__bounce"
                                    
                                >
                                    {slide.text}
                                </Typography>
                                <hr />
                                <Typography
                                    variant="body1"
                                    sx={{ color: `${theme.palette.common.white}` }}
                                    className="animate__animated animate__bounce animate__delay-1s"
                                >
                                    {slide.cta}
                                </Typography>
                            </Grid>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
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
                            className="animate__animated animate__bounce"
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
            <Container sx={{ mt: { xs: 2, sm: 0, md: 4 }, height: 'auto', paddingBottom: { xs: '100px', sm: '0' }, maxWidth: 'lg' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ my: { xs: 5, md: 10 }, }}>
                            <Typography variant="h4" sx={{ color: `${theme.palette.primary.main}`, pb: { xs: 3, md: 5 } }}>This is Counters</Typography>
                            <Typography variant="h6" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                                Professional HTML templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout, and other design elements, as well as content and images.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ zIndex: '1', height: { xs: 'auto', md: '500px' } }}>
                            <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
                                <Grid container spacing={4} sx={{ px: { xs: 2, md: 15 } }}>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <StyledCountersBox>
                                            <Typography variant="h6" sx={{ pb: 2 }}>AWARDS WON</Typography>
                                            <Typography variant="h4">
                                                {
                                                    counterStart && <CountUp start={0} end={19} duration={2} delay={0} />
                                                }
                                            </Typography>
                                        </StyledCountersBox>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <StyledCountersBox >
                                            <Typography variant="h6" sx={{ pb: 2 }}></Typography>
                                            <Typography variant="h6" sx={{ pb: 2 }}>CLIENTS</Typography>
                                            <Typography variant="h4">
                                                {
                                                    counterStart && <CountUp start={0} end={108} duration={2} delay={0} />
                                                }
                                            </Typography>
                                        </StyledCountersBox>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <StyledCountersBox >
                                            <Typography variant="h6" sx={{ pb: 2 }}>XP YEAR</Typography>
                                            <Typography variant="h4">
                                                {
                                                    counterStart && <CountUp start={0} end={12} duration={2} delay={0} />
                                                }+
                                            </Typography>
                                        </StyledCountersBox>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <StyledCountersBox >
                                            <Typography variant="h6" sx={{ pb: 2 }}>PROJECTS</Typography>
                                            <Typography variant="h4">
                                                {
                                                    counterStart && <CountUp start={0} end={150} duration={2} delay={0} />
                                                }
                                            </Typography>
                                        </StyledCountersBox>
                                    </Grid>
                                </Grid>
                                <Box sx={{ height: { xs: '200px', md: '300px' }, width: '100%', mt: { xs: -5, md: -10 }, zIndex: '-1', backgroundImage: 'url(/slides/slide1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            </ScrollTrigger>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ mt: 5, pb: 5, py: 10, backgroundImage: "url('/testimonials.jpg')", display: "flex", justifyContent: "center", backgroundAttachment:'fixed', }} maxWidth="xl">
                <Grid container spacing={4} maxWidth="md">
                    <Grid item xs={12}>
                  
                        <Typography variant="h3" sx={{ textAlign: 'center', color: `${theme.palette.primary.main}`, pb: 2, fontWeight:'bold' }} className="animate__animated animate__bounce ">
                            Testimonials
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledContainerBox sx={{
                            backgroundColor: 'transparent',
                            p: { xs: 3, md: 5 },
                            height: 'auto',
                            mb: 5,
                            borderRadius: 8
                        }}>
                            <Swiper
                                ref={(swiper) => (swiperRef.current = swiper)}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                navigation={true}
                                pagination={true}
                            >
                                {Testimonials.map((slide, index) => (
                                    <SwiperSlide key={slide} id="1">
                                        <Box sx={{ height: { xs: 'auto', md: '300px',  }, width: '100%' }}>
                                            <Box sx={{ height: '70px', width: '80px', pb: 2 }}>
                                                <img alt="" src={slide.url} height="100%" width="100%" />
                                            </Box>
                                            <Box>
                                            <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '18px',color: `${theme.palette.common.white}` } }}>
                                                {slide.text}
                                            </Typography>
                                            </Box>
                                            <Box sx={{display:'flex', mt:3 }}>
                                            
                                            <Box  sx={{display:'flex', height:'80px', width:'100px' ,bgcolor:'white' ,mx:2}}>
                                                <img src="/home/passport.jpg" alt="##" height="100%" width="100% " />
                                           </Box>
                                           <Box>
                                            <Typography variant="h4" sx={{ pt: 2, color: `${theme.palette.common.white}` }}>
                                                {slide.Name}
                                            </Typography>
                                           </Box>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'end', padding: 3 }}>
                                <Button variant="outlined" sx={{ mr: 2, fontSize: '20px', fontWeight: 'bold', color:`${theme.palette.common.white}`,borderColor:`${theme.palette.common.white}`  }} onClick={handlePreviousButtonClick}>&lt;</Button>
                                <Button variant="outlined" sx={{ fontSize: '20px', fontWeight: 'bold', color:`${theme.palette.common.white}`, borderColor:`${theme.palette.common.white}` }} onClick={handleNextButtonClick}>&gt;</Button>
                            </Box>
                        </StyledContainerBox>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', p: { xs: 5, md: 10 }, justifyContent: { xs: 'center', md: 'space-between' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '20px' }, mb: { xs: 3, md: 0 } }}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}`, mb: { xs: 2, md: 0 } }}>
                            REDX
                        </Typography>
                        <Box sx={{ borderLeft: '2px solid red', ml: { xs: 1, md: 2 }, pl: { xs: 1, md: 2 }, }}>
                            <Typography variant="h4" sx={{ fontSize: { xs: '26px', md: '35px' } }}>
                                SuperCharging
                            </Typography>
                            <Typography variant="h4" sx={{ fontSize: { xs: '26px', md: '35px' } }}>
                                Progress
                            </Typography>
                        </Box>
                    </Box>
                    {redx.actions.map((action, index) => (
                        <StyledButton size="large" href={action.url} >
                            {action.action}
                        </StyledButton>
                    ))}
                </Box>
            </Container>

        </>
    )
}

export default Home