import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {Grid, Box} from '@mui/material';
import './ProductCard.css';

const ProductCard = (product) => {
    return (
        <Card className="compact-product-card" sx={{ boxShadow:2 }}  >
            {/* Product Image */}
            <CardMedia
                component="img"
                height="100"
                image={product.image}
                alt={product.name}
            />
              

            {/* <CardContent > */}
                {/* Product Name */}
                {/* <Typography variant="subtitle2" sx={{p:0}}>
                </Typography> */}


            {/* </CardContent> */}

            <Typography sx={{p:1}}>
            {product.name}
            </Typography>
        </Card>
    );
};

export const ProductDescription = (product) => {
    return (       

            <Grid container spacing={2} sx={{ p: 4, pt: 8,}}>
                <Grid item xs={12} md={4} lg={4}>
                    <Box sx={{ height: '350px', width: '100%', pt: 3 }}>
                        <img src={product.image} alt={product.name} height={'100%'} width={'100%'} style={{ borderRadius: '20px',objectFit: 'cover', }} />
                    </Box>
               </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <Box sx={{ height: '350px',px:{xs:0,md:4,lg:6},pt:3 , textAlign: "start", fontFamily: 'sans-serif' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '20px' }} >
                            {product.name}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: product.description }} />
                
                    </Box>
                </Grid>
            </Grid>
    );
};

export default ProductCard;
