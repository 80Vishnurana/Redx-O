import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.jpg",
    "/gallery/7.webp",
    "/gallery/8.jpg",
    "/gallery/9.webp",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.webp"

];

const Gallery = () => {
    const theme = useTheme();
    return (
        
        <>
            <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: 'black', backgroundImage: 'url(/headerBack.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', textAlign: 'center' }}>
                <Typography className="animate__animated animate__bounce" variant="h2" sx={{ color: `${theme.palette.common.white}`, fontWeight: 700 }}>
                    Gallery
                </Typography>
            </div>
            <Container maxWidth="lg" sx={{ py:2}}>
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt="gallery redx"
                        />
                    ))}
                    <Typography sx={{color:`${theme.palette.common.black}`}}>
                            bnszcnow
                    </Typography>
                </Masonry>
            </Container>
        </>
    )


}

export default Gallery;