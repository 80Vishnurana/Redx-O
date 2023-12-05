
import React, { useState } from "react";
import AllProducts from "../core/config/Products";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import { Grid, Typography, Container, Card, CardContent, Box } from "@mui/material";
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useTheme, styled } from '@mui/material/styles';
import "./Products.css"; // Import the CSS file for styles

const Products = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);

    

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
                                            <StyledCard onClick={() => goToPage(7)}>
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
                                            <img src="/products/whiterawrice.jpeg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            White Raw Rice
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our premium White Raw Rice, a culinary essential that promises to elevate your dining experience with its unmatched quality and purity. Sourced from the finest fields and cultivated with care, our White Raw Rice embodies the natural goodness of pure, unprocessed grains.<br/>
                                            This immaculate grain is characterized by its pearly white appearance and long, slender grains that cook up into a fluffy and aromatic texture. Ideal for a variety of culinary creations, from traditional dishes to modern fusion cuisine, our White Raw Rice serves as the perfect canvas for your culinary masterpieces.<br/>
                                            Carefully milled to retain the nutritional integrity of each grain, our White Raw Rice is rich in essential nutrients, including carbohydrates, providing a wholesome energy source for your daily needs. Whether you are preparing a hearty pilaf, a savory curry, or a light and refreshing rice salad, this versatile rice complements a myriad of flavors and culinary styles.
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
                                            <img src="/products/whitericeparboiled.jpeg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            White Raw Rice Parboiled
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our premium White Raw Rice Parboiled, a culinary gem that combines the nutritional benefits of parboiling with the purity of unprocessed white rice. Sourced from the finest fields and subjected to a meticulous parboiling process, this rice variant offers a unique combination of texture, taste, and health benefits.<br/>Our White Raw Rice Parboiled boasts a distinctive golden hue, a result of the parboiling process, which involves partially boiling the rice in the husk before milling. This not only imparts a beautiful color but also helps retain essential nutrients within the grain, ensuring a wholesome and nutritious dining experience.<br/>The long, slender grains of this rice cook up to a fluffy and separate texture, making it an ideal choice for a variety of dishes. Whether you're preparing a classic biryani, a comforting risotto, or a simple pilaf, our White Raw Rice Parboiled lends itself perfectly to diverse culinary creations.
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
                                            <img src="/products/icumsa45.jpeg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 45
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            ICUMSA 45 refers to a specific grade of sugar that is defined by the International Commission for Uniform Methods of Sugar Analysis (ICUMSA). The term "ICUMSA" stands for the International Commission for Uniform Methods of Sugar Analysis, and "45" is a reference to the level of purity and whiteness of the sugar.<br/>ICUMSA 45 is a highly refined sugar often associated with the highest quality of white sugar available. It is commonly used in the food and beverage industry, especially in products where the color and appearance of the sugar play a crucial role, such as in confectionery, baking, and certain beverage applications.<br/>Key features of ICUMSA 45 sugar include its bright white color and fine crystal structure. The refining process removes impurities and color, resulting in a product with a clean and pure appearance. This sugar is often preferred in industries where a consistent and high-quality sweetener is required.
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
                                            <img src="/products/icumsa100.webp"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 100
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Premium ICUMSA 100 Refined Sugar, a culinary gem sourced from the finest sugar mills and crafted to perfection to meet the stringent standards of the International Commission for Uniform Methods of Sugar Analysis (ICUMSA). This sugar variety is a testament to uncompromising quality, versatility, and the perfect touch of sweetness it brings to your kitchen.<br/>Our ICUMSA 100 Refined Sugar boasts a light golden hue, adding a natural warmth to your culinary creations. The subtle color, combined with a fine crystal structure achieved through careful refining, ensures easy dissolvability, making it a versatile sweetener for a wide array of applications, from baking to brewing.<br/>
                                            Imagine crafting delectable cakes, cookies, and pastries with the perfect level of sweetness. Picture enhancing the flavor of your morning coffee or tea, or brewing homemade beverages like kombucha or ginger beer. Our Premium ICUMSA 100 Refined Sugar is also an excellent choice for adding a delightful touch to savory sauces and marinades, making it an indispensable pantry staple.
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
                                            <img src="/products/icumsa150.jpeg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Icumsa 150
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our ICUMSA 150 Refined Sugar, a distinguished choice for those seeking a versatile sweetener with a touch of natural warmth. Meticulously crafted to meet the standards set by the International Commission for Uniform Methods of Sugar Analysis (ICUMSA), this sugar variant offers a delightful balance of flavor and functionality.<br/>With a slightly deeper golden hue, our ICUMSA 150 Refined Sugar brings a rich and nuanced sweetness to your culinary endeavors. The fine crystal structure, achieved through careful refining, ensures effortless dissolvability, making it an excellent choice for various cooking and beverage applications. <br/>
                                            Imagine infusing your baked goods with a nuanced sweetness, or elevating your morning coffee or tea with the richness of flavor. Our ICUMSA 150 Refined Sugar is a versatile companion for home cooks and culinary professionals alike, perfect for crafting a wide range of sweet and savory delights.
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
                                            <img src="/products/rawcashewnuts.webp"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Raw Cashew Nuts
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Indulge in the natural goodness of our Raw Cashew Nuts, a premium offering sourced from the heart of the finest cashew orchards. Bursting with flavor and nutrition, these cashews are untouched by processing, providing you with a wholesome snacking experience that reflects the true essence of this exquisite nut.<br/>Our Raw Cashew Nuts are characterized by their creamy texture and subtly sweet taste. Perfect for those who appreciate the purity of natural flavors, these cashews serve as a versatile ingredient in both sweet and savory dishes. Whether enjoyed on their own as a nutritious snack or incorporated into your favorite recipes, their rich and buttery profile enhances the overall culinary experience.<br/>Packed with essential nutrients, including heart-healthy fats and proteins, our Raw Cashew Nuts contribute to a balanced and nourishing diet. Each nut is carefully selected to ensure quality, and the raw nature of the product preserves its nutritional integrity.
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
                                            <img src="/products/blackpepper500.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Black Pepper -500gl
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our premium Black Pepper with a bold 500GL designation, a spice that adds a distinctive flavor and aromatic warmth to your culinary creations. Sourced from the most reputable pepper estates, our 500GL Black Pepper is a testament to quality and the commitment to deliver a rich, flavorful experience to your kitchen.<br/>Our Black Pepper, graded at 500GL, signifies the size of the peppercorns, with larger grains providing a robust and intense flavor. The deep, earthy notes and pungent aroma of this black pepper variety make it an essential spice for both seasoned chefs and home cooks alike.<br/>Perfectly suited for grinding or using whole in various dishes, our 500GL Black Pepper enhances the taste of savory recipes, marinades, and spice blends. Its versatility allows you to customize the intensity of flavor, whether you prefer a subtle hint of spice or a bolder, more pronounced taste.
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
                                            <img src="/products/blackpepper550.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Black Pepper -550gl
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our premium Black Pepper with an impressive 550GL designation, a culinary essential that elevates your dishes with a heightened level of flavor and aroma. Sourced from top-tier pepper estates, our 550GL Black Pepper reflects a commitment to quality, ensuring that you experience the pinnacle of spice excellence in your culinary endeavors.<br/>The 550GL designation signifies the size of the peppercorns, with larger grains contributing to a more robust and intense pepper flavor. Known for its bold, pungent notes and aromatic richness, this variety of black pepper is favored by chefs and home cooks alike for its ability to enhance the taste profile of a wide range of dishes.<br/>                                        
                                            Whether you choose to grind it fresh or use the whole peppercorns, our 550GL Black Pepper adds a layer of complexity to savory recipes, marinades, and spice blends. Its versatility allows for customization, letting you achieve the perfect balance of spice in your culinary creations.
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
                                            <img src="/products/nitrogen.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Nitrogen
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Nitrogen-Enriched Agro Products, a revolutionary line designed to maximize crop yields and promote sustainable agriculture. Nitrogen, a vital component in plant nutrition, is crucial for fostering robust growth and ensuring bountiful harvests. Our range of agro products is specially formulated to harness the power of nitrogen, delivering unparalleled results for farmers and cultivators. 
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
                                            <img src="/products/ureagranular.webp"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Urea – Granular 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Urea Granular, a top-tier nitrogen fertilizer meticulously formulated to enhance plant growth, increase crop yields, and contribute to the overall vitality of your agricultural ventures. Urea serves as a concentrated source of nitrogen, a pivotal nutrient crucial for the development and well-being of plants, making our Urea Granular an indispensable choice for farmers aspiring to achieve optimal results.<br/>Our Urea Granular features a notably high nitrogen content, ensuring a potent and efficient supply of this essential nutrient to your crops. This nutrient plays a pivotal role in promoting robust vegetative growth, improving leaf development, and enhancing the overall vigor of plants. The granular form of our urea ensures easy application and even distribution, facilitating precise and efficient fertilization practices that promote consistent nutrient availability throughout the growing season.<br/>Known for its quick-release nitrogen properties, Urea Granular provides readily available nutrients for plants, particularly during critical growth stages, offering the necessary boost for optimal development. Versatility is a hallmark of our product, making it suitable for a wide range of crops, adaptable to various soil types, and accommodating diverse agricultural practices.
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
                                            <img src="/products/pvcresin.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin  SG5( china) 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing PVC Resin SG5, a high-quality polyvinyl chloride resin that stands out for its exceptional properties and versatile applications. Known for its elevated purity and consistency, PVC Resin SG5 is a preferred choice across industries where stringent quality standards are paramount. Its excellent processability makes it ideal for diverse manufacturing processes, including injection molding and extrusion, ensuring efficiency in production.<br/>Noteworthy for its robust mechanical strength and durability, PVC Resin SG5 is often utilized in the production of pipes, fittings, profiles, and cables, providing long-lasting and resilient materials for construction applications. Its thermoplastic characteristics enable repeated melting and reprocessing without significant degradation, contributing to sustainability and recyclability.
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
                                            <img src="/products/pvcresin.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin  LS100H( Korea )  
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing PVC Resin LS100H, a specialized polyvinyl chloride resin designed to meet the unique demands of specific applications, particularly in the production of flexible and high-performance materials. Recognized for its outstanding clarity, flexibility, and processability, PVC Resin LS100H is a preferred choice for industries where transparency and pliability are key considerations.<br/>Notable for its high purity and consistent quality, LS100H is tailored for applications requiring transparency, such as in the manufacturing of clear films, sheets, and flexible tubing. The resin's excellent processability makes it well-suited for various production methods, ensuring ease of molding and shaping in applications like film extrusion.
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
                                            <img src="/products/pvcresin.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin H-66 ( Taiwan )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing PVC Resin H66, a high-performance polyvinyl chloride resin designed to meet the demanding requirements of various industries. With a focus on delivering superior mechanical properties, this resin is known for its outstanding strength, durability, and versatility in manufacturing applications.<br/>PVC Resin H66 is characterized by its high molecular weight, contributing to enhanced mechanical strength in end products. This makes it an excellent choice for applications where durability and structural integrity are paramount, such as in the production of pipes, fittings, and construction materials.<br/>Noteworthy for its reliable processability, H66 facilitates efficient molding and shaping during manufacturing processes like extrusion and injection molding. This characteristic ensures ease of use for manufacturers and contributes to the production of high-quality, consistent end products.
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
                                            <img src="/products/pvcresin.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            PVC resin H-1000R ( china )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing PVC Resin H-1000R, a high-quality polyvinyl chloride resin renowned for its exceptional properties, making it a versatile choice for various industrial applications. Characterized by its high molecular weight, H-1000R is designed to offer enhanced mechanical strength and durability, making it a preferred material for applications where structural integrity is crucial.<br/>PVC Resin H-1000R exhibits excellent processability, ensuring ease of molding and shaping during manufacturing processes such as extrusion and injection molding. This attribute not only contributes to efficient production but also allows for the creation of consistent, high-quality end products.<br/>Known for its adaptability, H-1000R finds application in a range of industries, including construction, automotive, and infrastructure. Its ability to withstand environmental factors and deliver long-lasting performance makes it an ideal choice for projects requiring resilience and reliability.
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
                                            <img src="/products/melaminepowder.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Melamine  Powder 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Melamine Powder, a high-quality and versatile compound that serves a myriad of industrial applications. Renowned for its exceptional chemical and physical properties, melamine powder is a key ingredient in the production of durable and heat-resistant materials.<br/>Melamine is widely utilized in the manufacturing of melamine-formaldehyde resins, which find application in the production of laminates, coatings, adhesives, and flame-retardant textiles. Its remarkable heat resistance and hardness make it an ideal component in the creation of heat-resistant tableware, kitchenware, and decorative laminates.<br/>Our Melamine Powder is characterized by its fine particle size and purity, ensuring consistent quality in various manufacturing processes. Whether used for molding decorative surfaces, creating durable utensils, or producing flame-retardant materials, melamine powder stands as a reliable and versatile choice.
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
                                                    Packing Grade
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
                                            <img src="/products/furnituregradeplywood.jpg"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Furniture Grade 
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Furniture Grade Plywood, a superior material designed to meet the exacting standards of the furniture industry. Crafted with precision and quality in mind, this plywood is the ideal choice for creating durable and aesthetically pleasing furniture pieces.<br/>Our Furniture Grade Plywood is constructed using high-quality veneers, resulting in a strong and stable panel that exhibits excellent strength and dimensional stability. The careful selection of hardwood or softwood veneers ensures a smooth and uniform surface, providing the perfect canvas for creating fine furniture.<br/>With a focus on versatility, our plywood is well-suited for a variety of furniture applications, including cabinets, tables, chairs, and more. The smooth and consistent surface allows for easy finishing, whether it's staining, painting, or veneering, enabling craftsmen to achieve the desired look for their furniture creations.
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
                                            <img src="/products/packinggradeplywood.webp"  alt="" height={'100%'} width={'100%'} style={{borderRadius:'20px'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{height:'350px' , p:3, textAlign:"start", fontFamily:'sans-serif'}}>
                                            <Typography variant="h4" sx={{fontWeight:'bold', mb:'20px'}} >
                                            Packing Grade  ( China , Vietnam )
                                            </Typography>
                                            <Typography variant="body1" sx={{fontSize:'14px' }} >
                                            Introducing our Packing Grade Plywood, a reliable and cost-effective solution crafted to meet the demands of packaging and shipping applications. Designed for strength and durability, this plywood variant serves as a practical choice for creating sturdy containers, crates, and packaging materials to safeguard your goods during transportation.<br/>Our Packing Grade Plywood is constructed with precision from carefully selected veneers, emphasizing structural integrity and load-bearing capabilities. The use of both hardwood and softwood veneers ensures a robust and resilient panel, providing a dependable foundation for packaging applications.<br/>With a focus on practicality, this plywood is well-suited for crafting crates and boxes used in the shipping and logistics industry. The panels exhibit a smooth and consistent surface, facilitating easy handling and assembly during the packaging process. The plywood's composition and bonding ensure stability and reliability, offering peace of mind when transporting valuable or fragile goods.
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

