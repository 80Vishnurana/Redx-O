import React, { useState } from "react";
import AllProducts from "../core/config/Products";
import { Grid, Typography, Container, Card, CardContent, CardHeader, Box } from "@mui/material";
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useTheme } from '@mui/material/styles';
import "./Products.css"; // Import the CSS file for styles

const Products = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 2));
    };

    const goToPage = (pageIndex) => {
        setSelected(pageIndex);
    };

    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={2} sx={{ padding: '50px' }}>
                    {/* Display all categories as cards */}
                    <Grid item xs={12} md={12} sx={{
                        padding: '20px',
                    }}>
                        <div className="pages">
                            <FlippingPages
                                direction="right-to-left"
                                onSwipeEnd={setSelected}
                                selected={selected}
                                animationDuration={100}
                            >
                                <div className="page">
                                    <Grid container spacing={2} >
                                        {AllProducts.map(category => (
                                            <Grid item xs={12} md={6} lg={6}  key={category.id}>
                                                <Card
                                                    sx={{ cursor: 'pointer', mb: 2 }}
                                                    onClick={() => goToPage(2)}>
                                                    <CardContent>
                                                        <Typography variant="subtitle1">
                                                            {category.category}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}

                                    </Grid>

                                </div>
                                <div className="page page2">Page 2</div>
                                <div className="page page3">Page 3</div>
                            </FlippingPages>
                        </div>
                        <button onClick={back}>Back</button>
                        <button onClick={next}>Next</button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Products;
