
import React, { useState } from "react";
import { Button, Menu, MenuItem, Grid, Typography, Container, Box } from "@mui/material";
import { categories, getProductsByCategoryId } from "../core/config/Categories";
import { FlippingPages } from 'flipping-pages';
import ProductCard from "../core/components/ProductCard";
import { ProductDescription } from "../core/components/ProductCard";
import 'flipping-pages/dist/style.css';
import { useTheme, styled } from '@mui/material/styles';
import "./Products.css"; // Import the CSS file for styles

const Products = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const [productAnchorEl, setProductAnchorEl] = useState(null);


    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 21));
    };


    const handleCategoryMenuOpen = (event) => {
        setCategoryAnchorEl(event.currentTarget);
    };

    const handleCategoryMenuClose = () => {
        setCategoryAnchorEl(null);
    };

    const handleProductMenuOpen = (event) => {
        setProductAnchorEl(event.currentTarget);
    };

    const handleProductMenuClose = () => {
        setProductAnchorEl(null);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedProduct(null); // Reset selected product when category changes
        handleCategoryMenuClose();
        setSelected(category.page);
    };

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        handleProductMenuClose();
        setSelected(product.page)
    };
    const AgriculturalProducts = getProductsByCategoryId(1)
    const AgroProducts = getProductsByCategoryId(2)
    const IndustrialProducts = getProductsByCategoryId(3)
    const PlywoodProducts = getProductsByCategoryId(4)

    return (
        // style={{ backgroundImage: `url(/productback.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
        <div>
            <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: 'black', backgroundImage: 'url(/headerBack.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', textAlign: 'center' }}>
                <Typography className="animate__animated animate__bounce" variant="h2" sx={{ color: `${theme.palette.common.white}`, fontWeight: 700 }}>
                    Our Products
                </Typography>
            </div>
            <Container sx={{ py: 2 }} maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            {/* Category Selection Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleCategoryMenuOpen}
                                sx={{ textTransform: 'none' }}
                            >
                                {selectedCategory ? selectedCategory.name : 'Select Category'}
                            </Button>

                            {/* Product Selection Button */}
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleProductMenuOpen}
                                disabled={!selectedCategory}
                                sx={{ textTransform: 'none' }}
                            >
                                {selectedProduct ? selectedProduct.name : 'Select Product'}
                            </Button>

                            {/* Category Selection Menu */}
                            <Menu
                                anchorEl={categoryAnchorEl}
                                open={Boolean(categoryAnchorEl)}
                                onClose={handleCategoryMenuClose}
                            >
                                {categories.map(category => (
                                    <MenuItem key={category.id} onClick={() => handleCategorySelect(category)}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Menu>

                            {/* Product Selection Menu */}
                            <Menu
                                anchorEl={productAnchorEl}
                                open={Boolean(productAnchorEl)}
                                onClose={handleProductMenuClose}
                            >
                                {selectedCategory &&
                                    selectedCategory.products.map(product => (
                                        <MenuItem key={product.id} onClick={() => handleProductSelect(product)}>
                                            {product.name}
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ py: 2 }} maxWidth="lg">
                <Box className="pages">
                    <FlippingPages
                        direction="right-to-left"
                        onSwipeEnd={setSelected}
                        selected={selected}
                        animationDuration={120}
                    >
                        <Box className="page">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} lg={6}>
                                    <Typography variant="h5" sx={{ paddingTop: "50px" }}>
                                        Welcome To Redx.
                                        <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                    </Typography>
                                    <Typography variant="h6">
                                        Please Select a category and a Product to see details.
                                    </Typography>
                                    <Typography variant="body" sx={{ textAlign: "center" }}>
                                        We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant="h5" sx={{ paddingTop: "50px" }}>
                                        Agricultural Products
                                        <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                    </Typography>

                                    <Grid container sx={{ paddingRight: "50px" }}>
                                        {AgriculturalProducts.map(product => (
                                            <Grid item xs={6} md={2}>
                                                {ProductCard(product)}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant="h5" sx={{ paddingTop: "50px" }}>
                                        Agro Chemicals
                                        <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                    </Typography>

                                    <Grid container sx={{ paddingRight: "50px" }}>
                                        {AgroProducts.map(product => (
                                            <Grid item xs={6} md={2}>
                                                {ProductCard(product)}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant="h5" sx={{ paddingTop: "50px" }}>
                                        Industrial Products
                                        <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                    </Typography>

                                    <Grid container sx={{ paddingRight: "50px" }}>
                                        {IndustrialProducts.map(product => (
                                            <Grid item xs={6} md={2}>
                                                {ProductCard(product)}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={12} lg={12}>
                                    <Typography variant="h5" sx={{ paddingTop: "50px" }}>
                                        Plywood Products
                                        <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                    </Typography>

                                    <Grid container sx={{ paddingRight: "50px" }}>
                                        {PlywoodProducts.map(product => (
                                            <Grid item xs={6} md={2}>
                                                {ProductCard(product)}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[0])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[1])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[2])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[3])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[4])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[5])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[6])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgriculturalProducts[7])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgroProducts[0])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(AgroProducts[1])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(IndustrialProducts[0])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(IndustrialProducts[1])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(IndustrialProducts[2])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(IndustrialProducts[3])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(IndustrialProducts[4])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(PlywoodProducts[0])}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="page">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    {ProductDescription(PlywoodProducts[1])}
                                </Grid>
                            </Grid>
                        </Box>
                    </FlippingPages>
                </Box>

            </Container>
            <Container sx={{ py: 2 }} maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {/* Next Previous Buttons */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={back}
                        sx={{ textTransform: 'none' }}
                    >
                    Previous Page
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={next}
                        sx={{ textTransform: 'none' }}
                    >
                    Next Page
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default Products;

