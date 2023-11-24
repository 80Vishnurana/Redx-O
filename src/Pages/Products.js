import React, { useState } from "react";
import AllProducts from "../core/config/Products";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import { Grid, Typography, Container, Card, CardContent, CardHeader, Box } from "@mui/material";
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useTheme } from '@mui/material/styles';
import "./Products.css"; // Import the CSS file for styles
import { CenterFocusStrong } from "@mui/icons-material";

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
                <Grid>
                    <Typography variant="h2" sx={{ textAlign: "center", color: theme.palette.primary.main, padding: "50px" }}>
                        Our Products
                    </Typography>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <div className="pages">
                            <FlippingPages
                                direction="right-to-left"
                                onSwipeEnd={setSelected}
                                selected={selected}
                                animationDuration={300}
                            >
                                <div className="page">
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} md={6} lg={6}>
                                            <Typography variant="h5" sx={{ textTransform: "uppercase", paddingLeft: "50px", paddingTop: "50px" }}>
                                                All Categories
                                                <hr style={{ color: theme.palette.highlight.default, width: "50%", marginLeft: 0 }}></hr>
                                            </Typography>

                                            <List sx={{ paddingLeft: "50px" }}>
                                                {AllProducts.map(category => (
                                                    <ListItem key={category.id} disablePadding onClick={() => goToPage(category.page)}>
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <LabelIcon style={{ color: theme.palette.primary.main }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={category.category} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))}

                                            </List>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <Box sx={{ textAlign:"center", alignContent:"center", alignItems:"center"}}>
                                                <img src="/allcategories.png" alt="All Categories" width={"70%"} />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </div>
                                <div className="page">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Agricultural Products
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12} lg={12}>

                                        </Grid>
                                    </Grid>

                                </div>
                                <div className="page page3">Page 3</div>
                            </FlippingPages>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Products;
