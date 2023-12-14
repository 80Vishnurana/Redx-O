import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import 'animate.css';

const About = () => {
    const theme = useTheme();
    return (
        <>
            <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: 'black', backgroundImage: 'url(/headerBack.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%', textAlign: 'center' }}>
                <Typography className="animate__animated animate__bounce" variant="h2" sx={{ color: `${theme.palette.common.white}`, fontWeight: 700 }}>
                    About Us
                </Typography>
            </div>

            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src="/about.jpg" alt="Our Business" style={{ width: "100%", borderRadius: '30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        
                        <Typography gutterBottom variant="body1" component="h2" sx={{ color: `${theme.palette.common.text}` , fontSize:'19px'}}>
                            We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products. This comprehensive approach allows us to cater to a wide array of needs, providing our customers with high-quality solutions.<br />
                            At REDX, we prioritize a global footprint, enabling us to leverage robust sourcing networks. This, in turn, ensures that we consistently deliver top-notch products that align with the unique requirements of our customers. Our commitment extends beyond mere business operations – we actively engage with our stakeholders to foster sustainability throughout our value chain, with a keen focus on minimizing our carbon footprint.<br />
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {/* Mission Section */}
        <Grid item xs={12} md={6} sx={{ mt: 3, mb: 3 }}>
          <Box
            sx={{
              backgroundColor: '#b3e5fc',
              height: { xs: 'auto', md: '450px' }, // Adjust the height as needed
              padding: 4,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'background-color 0.3s ease',
              boxShadow: 4,
            }}
          >
            <div>
              <Typography variant="h4" gutterBottom sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography paragraph variant="body1" sx={{ fontSize: '18px' }}>
                RedX is dedicated to revolutionizing the agricultural, industrial, agro-chemical, and plywood sectors. Our mission is to provide high-quality, sustainable solutions that enhance productivity, ensuring a balance between technological innovation and environmental responsibility. Committed to customer satisfaction, we strive to be a trusted partner in growth for businesses worldwide. By fostering innovation, ethical practices, and community development, we aim to contribute to a resilient and prosperous global landscape. RedX — Transforming industries, cultivating sustainability, and building a future for generations to come.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/features/mission.jpg" alt="Our Mission" style={{ width: '100%', height: '100%', borderRadius: 12 }} />
        </Grid>

        {/* Vision Section */}
        
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', height: { xs: 'auto', md: '450px' } }}>
            <img src="/features/vission.jpg" alt="Our Vision" style={{ width: '80%', height: '100%', borderRadius: 12 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#69f0ae',
              height: { xs: 'auto', md: '450px' }, // Adjust the height as needed
              padding: 4,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'background-color 0.3s ease',
              boxShadow: 4,
            }}
          >
            <div>
              <Typography variant="h4" gutterBottom sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Typography paragraph variant="body1" sx={{ fontSize: '18px' }}>
                RedX envisions a sustainable future, pioneering innovation in agriculture, industry, agro-chemicals, and plywood. Guided by excellence, integrity, and environmental stewardship, we strive to redefine industry standards. Committed to empowering communities, our goal is to be a global leader, harmonizing technology and nature. Through cutting-edge solutions, we aim to optimize productivity, promote eco-friendly practices, and contribute to a thriving, interconnected world.
              </Typography>
            </div>
          </Box>
        </Grid>
        
        {/* Additional Mission Section */}

        <Grid item xs={12} md={6} sx={{ mt: 3, mb: 3 }}>
          <Box
            sx={{
              backgroundColor: '#b3e5fc',
              height: { xs: 'auto', md: '450px' }, // Adjust the height as needed
              padding: 4,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'background-color 0.3s ease',
              boxShadow: 4,
            }}
          >
            <div>
              <Typography variant="h4" gutterBottom sx={{ color: `${theme.palette.primary.main}`, fontWeight: 700 }}>
                Our Values
              </Typography>
              <Typography paragraph variant="body1" sx={{ fontSize: '18px' }}>
                At RedX, our values form the bedrock of our commitment to excellence. Integrity guides every interaction, ensuring transparency and trust. Innovation is our constant pursuit, driving advancements in agricultural, industrial, agro-chemical, and plywood solutions. Sustainability is ingrained in our ethos, promoting environmentally responsible practices. Customer-centricity defines our approach, delivering products that exceed expectations. Collaboration and inclusivity foster a diverse, dynamic, and inspired team. RedX values resilience, embracing challenges as opportunities for growth. Together, these principles underscore our dedication to quality, ethical business practices, and positive global impact.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', height: { xs: 'auto', md: '450px' } }}>
            <img src="/features/value.png" alt="Our Vision" style={{ width: '80%', height: '100%', borderRadius: 12 }} />
          </Box>
        </Grid>
      </Grid>
    </Container>


        </>
    )
}

export default About















// We pride ourselves on our extensive product range, spanning across 21 categories that include agricultural commodities, processed Agri products, Agri Inputs, Industrial Chemicals, and FMCG food products. This comprehensive approach allows us to cater to a wide array of needs, providing our customers with high-quality solutions.<br />
//                             At REDX, we prioritize a global footprint, enabling us to leverage robust sourcing networks. This, in turn, ensures that we consistently deliver top-notch products that align with the unique requirements of our customers. Our commitment extends beyond mere business operations – we actively engage with our stakeholders to foster sustainability throughout our value chain, with a keen focus on minimizing our carbon footprint.