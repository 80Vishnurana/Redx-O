import React, { useState } from "react";
import AllProducts from "../core/config/Products";
import { Grid, Typography, Container, Card, CardContent, CardHeader, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "./Products.css"; // Import the CSS file for styles

const Products = () => {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={2}>
                    {/* Display all categories as cards */}
                    <Grid item xs={2} md={2} sx={{
                        padding: '20px',
                    }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Categories</Typography>
                        {AllProducts.map(category => (
                            <Card
                                key={category.id}
                                sx={{ cursor: 'pointer', mb: 2, backgroundColor: category === selectedCategory ? theme.palette.primary.main : 'inherit' }}
                                onClick={() => handleCategorySelect(category)}
                            >
                                <CardContent>
                                    <Typography variant="subtitle1" color={category === selectedCategory ? 'white' : 'text.primary'}>
                                        {category.category}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>

                    {/* Display products of the selected category */}
                    <Grid item xs={10} md={10} className={`products-grid ${selectedCategory ? "selected" : ""}`}>
                        {selectedCategory ? (
                            <div>
                                <Typography variant="h5" sx={{ mb: 2 }}>{selectedCategory.category} Products</Typography>
                                <Grid container spacing={2}>
                                    {selectedCategory.all.map(product => (
                                        <Grid item key={product.name} xs={12} md={6}>
                                            <Card>
                                                <CardHeader title={product.name} />
                                                <CardContent>
                                                    <Typography>{product.description}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        ) : (
                            <Box sx={{ textAlign: 'center', mt: 4 }}>
                                <Typography variant="h5">Please select a category</Typography>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Products;
