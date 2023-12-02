
import React, { useState } from "react";
import AllProducts from "../core/config/Products";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import { Grid, Typography, Container, Card, CardContent, CardHeader, CardMedia, Box } from "@mui/material";
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useTheme, styled } from '@mui/material/styles';
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
    const StyledCard = styled(Card)(({ theme }) => ({
        margin: "30px",
        '&:hover': {
            boxShadow: `0 10px 20px ${theme.palette.primary.main}50`, // Add a box shadow on hover
            transform: 'scale(1.01)', // Increase size on hover
            transition: '0.3s ease-in-out', // Add a smooth transition effect
        },
    }));
    const StyledButton = styled(Button)(({ theme }) => ({
        color: theme.palette.common.text,
        border: `1px solid ${theme.palette.primary.main}`,
        marginLeft: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.highlight.default
        },
    }));
    const StyledBox = styled(Box)(({ theme }) => ({
           textAlign:'center'
    }));

    return (
        <div style={{ backgroundImage:`url(/productback.jpg)`, backgroundSize:'cover', backgroundPosition:'center center'}}>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid>
                    <Typography variant="h2" sx={{ textAlign: "center", color: theme.palette.primary.main, padding: "50px", fontWeight:"bold" }}>
                        Our Products
                    </Typography>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Box className="pages">
                            <FlippingPages
                                direction="right-to-left"
                                onSwipeEnd={setSelected}
                                selected={selected}
                                animationDuration={100}
                            >
                                <Box className="page">
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
                                            <Box sx={{ textAlign: "center", alignContent: "center", alignItems: "center" }}>
                                                <img src="/allcategories.png" alt="All Categories" width={"70%"} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                
                                  <Box container className="page" style={{ textAlign: "center" }}>
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Agricultural Products
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <Grid container>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(2)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        White Raw Rice
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(4)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Icumsa 45
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>

                                            <StyledCard onClick={() => goToPage(6)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Icumsa 150
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(8)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Black Pepper -500gl
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(3)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        White Raw Rice Parboiled
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(5)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Icumsa 100
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(6)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Raw Cashew Nuts
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(9)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        Black Pepper -550gl
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>


                                        </Grid>
                                    </Grid>

                                </Box>
                                <StyledBox className="page page1">
                                    
                                

                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        White Raw Rice
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                   </StyledButton>
                                 
                                <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            White Raw Rice
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page3">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        White Raw Rice Parboiled
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            White Raw Rice Parboiled
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page4" >
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px"  }}>
                                        Icumsa 45
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 45
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                     </StyledBox>
                                <StyledBox className="page page5">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Icumsa 100
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 100
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page6">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Icumsa 150
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 150
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page7">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Raw Cashew Nuts
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Raw Cashew Nuts
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page8">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Black Pepper -500gl
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Black Pepper -500gl
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page9">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                        Black Pepper -550gl
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(1)}>
                                        Back to Agricultural 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Black Pepper -550gl
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                             
                                <Box container className="page page10" style={{ textAlign: "center" }}>
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Agro Chemicals
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <Grid container>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(11)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    Nitrogen 
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(12)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    Urea – Granular 
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <StyledBox className="page page11">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Nitrogen
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(10)}>
                                        Back to Agro Chemicals
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Nitrogen
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page12">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Urea – Granular 
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(10)}>
                                        Back to Agro Chemicals
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Urea – Granular 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>


                                <Box container className="page page13" style={{ textAlign: "center" }}>
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Industrial 

                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <Grid container>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(14)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    PVC resin SG5( china)
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(15)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    PVC resin LS100H( Korea )
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(18)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    Melamine  Powder 
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(16)}>
                                                <CardContent>
                                                    <Typography variant="h6">                  
                                                    PVC resin H-66 ( Taiwan )
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                            <StyledCard onClick={() => goToPage(17)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    PVC resin H-1000R ( china )
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                         
                                        </Grid>
                                    </Grid>
                                </Box>

                                <StyledBox className="page page14">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    PVC resin  SG5( china) 
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(13)}>
                                        Back to Industrial 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin  SG5( china) 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page15">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    PVC resin  LS100H( Korea )  

                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(13)}>
                                        Back to Industrial 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/valuechain.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin  LS100H( Korea )  
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page16">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    PVC resin H-66 ( Taiwan )

                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(13)}>
                                        Back to Industrial 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin H-66 ( Taiwan )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page17">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    PVC resin H-1000R ( china )
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(13)}>
                                        Back to Industrial 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin H-1000R ( china )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page18">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Melamine  Powder 
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(13)}>
                                        Back to Industrial 
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/images.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Melamine  Powder 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                {/* ................................................................ */}


                                
                                <Box container className="page page19" style={{ textAlign: "center" }}>
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Plywood
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <Grid container>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(20)}>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                    Furniture Grade
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                           
                                       </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <StyledCard onClick={() => goToPage(21)}>
                                                <CardContent>
                                                    <Typography variant="h6">                  
                                                    PVC resin H-66 ( Taiwan )
                                                    </Typography>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>
                            
                                <StyledBox className="page page20">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Furniture Grade 
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(19)}>
                                        Back to   Plywood
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%' }}>
                                            <img src="/features/ourbusiness.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Furniture Grade 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>
                                <StyledBox className="page page21">
                                    <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
                                    Packing Grade  ( China , Vietnam )
                                        <hr style={{ color: theme.palette.highlight.default, width: "30%" }} />
                                    </Typography>
                                    <StyledButton size="large" onClick={() => goToPage(0)}>
                                        Back to Categories
                                    </StyledButton>
                                    <StyledButton size="large" onClick={() => goToPage(19)}>
                                        Back to   Plywood
                                    </StyledButton>
                                    <Grid container spacing={2} sx={{p:4 ,pt:8}}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px', width:'100%',}}>
                                            <img src="/features/sustainaibility.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Packing Grade  ( China , Vietnam )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'18px' }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                                            <br/> Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </StyledBox>

                            </FlippingPages>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Products;

