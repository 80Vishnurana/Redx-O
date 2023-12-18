<swiper-container
    ref={swiperElRef}
    slides-per-view="1"
    navigation="false"
    pagination="true"
    loop="true"
    effect="fade"
    autoplay={{ delay: 1000, disableOnInteraction: false }}
>
    {images.map((slide, index) => (
        <swiper-slide key={index} style={{
            height: '600px',
            backgroundImage: `url(${slide.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="left"
                style={{ height: '100%' }}
                padding={{  xs: 0, sm: 0, md: 4, lg: 6 }} // Adjust padding for different screen sizes
            >
                <Typography variant="h3" sx={{ color: `${theme.palette.common.white}`, fontWeight: 'bold' }}>
                    {slide.text}
                </Typography>
                <hr />
                <Typography variant="body1" sx={{ color: `${theme.palette.common.white}` }}>
                    {slide.cta}
                </Typography>
            </Grid>


        </swiper-slide>
    ))}
</swiper-container>