import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { navigationMenuItems, renderMenuItem } from './FooterQuikLink';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  const theme = useTheme();
  const LogoImage = styled('img')({
    height: '80px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)',
      boxShadow: `0 0 10px ${theme.palette.highlight.default}`,
    },
  });
  const StyledTypography = styled(Typography)({
    borderBottom: `3px solid transparent`, // Initially transparent border
    borderRadius: "5px",
    transition: 'border-color 0.3s ease-out', // Transition for smooth effect
    '&:hover': {
      borderBottom: `2px solid ${theme.palette.highlight.default}`, // Change border color on hover
    },
  });
  const StyledBox = styled(Box)({
    
    borderBottom: `3px solid transparent`, // Initially transparent border
    borderRadius: "5px",
     pb: 0.5,
    transition: 'border-color 0.3s ease-out', // Transition for smooth effect
    '&:hover': {
      borderBottom: `2px solid ${theme.palette.primary.main}`, // Change border color on hover
    },
  });


  return (
    <footer style={{ backgroundColor: theme.palette.navigation.default, padding: '40px 0', color: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* First Section */}
          <Grid item xs={12} sm={4}>
            <LogoImage src="/redxlogo.png" alt="Logo" />
            <Typography variant="h3" gutterBottom style={{ color: `${theme.palette.highlight.default}` }} sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: `${theme.palette.secondary.main}`,
              textDecoration: 'none',
            }}>
              {theme.settings.name.default}
            </Typography>
            <Box sx={{
              pt: 3, letterSpacing: '10px', display: 'flex'
            }}>
              <StyledBox >
                <a
                
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >

                  <InstagramIcon sx={{
                    fontSize: '35px',
                    mx:1,
                 
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    }
                  }} />
                </a>
              </StyledBox>
              <StyledBox>
                <a
                  href="https://twitter.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <TwitterIcon
                    sx={{
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                      fontSize: '35px', 
                      mx:1,
                      '&:hover': {
                        transform: 'scale(1.2)',
                        boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                      }
                    }}
                  />
                </a>
              </StyledBox>
              <StyledBox>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <FacebookIcon sx={{
                    fontSize: '35px',mx:1,
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    }
                  }} />
                </a>
              </StyledBox>
              <StyledBox>
                <a
                  href="https://www.linkedin.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <LinkedInIcon sx={{
                    fontSize: '35px', mx:1,
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
                    }
                  }} />
                </a>
              </StyledBox>
            </Box>
          </Grid>

          {/* Second Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ textTransform: 'uppercase', color: `${theme.palette.common.white}` }}>
              Quick Links
            </Typography>

            <Box >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >

              </IconButton>
            </Box>
            <Box sx={{ width: '80px', marginLeft: 1 }} >
              {navigationMenuItems.map((page) => renderMenuItem(page,))}
            </Box>
          </Grid>

          {/* Third Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ textTransform: 'uppercase', color: '#fff' }}>
              Contact Details
            </Typography>
            {/* Add your Contact Details here */}
            <Box sx={{ display: "flex", py: 1 }}>
              <Box sx={{ height: '22px', width: '25px', mr: 1, pt: '4px' }}>
                <img src='/footer/telephone.png' alt='' height={'100%'} width={'100%'} />
              </Box>
              <StyledTypography variant='h6'>9671872890</StyledTypography>
            </Box>
            <Box sx={{ display: "flex", py: 1 }}>
              <Box sx={{ height: '22px', width: '25px', mr: 1, pt: '4px' }}>
                <img src='/footer/mail.png' alt='' height={'100%'} width={'100%'} />
              </Box>
              <StyledTypography variant='h6'>
                info@redx.com
              </StyledTypography>
            </Box>
            <Box sx={{ display: "flex", py: 1 }}>
              <Box sx={{ height: '22px', width: '25px', mr: 1, pt: '4px' }}>
                <img src='/footer/mail.png' alt='' height={'100%'} width={'100%'} />
              </Box>
              <StyledTypography variant='h6'>
                Black@redx.com
              </StyledTypography>
            </Box>

            <Box sx={{ display: "flex" }}>

              <Box sx={{ height: '22px', width: '25px', mr: 1, pt: '4px' }}>
                <img src='/footer/location.png' alt='' height={'100%'} width={'100%'} />
              </Box>
              <StyledTypography variant='h6'>
                Noida sec 2 B12
              </StyledTypography>
            </Box>

          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Grid container justifyContent="center" style={{ marginTop: '40px' }}>
          <Typography variant="body2" style={{ color: `${theme.palette.common.white}` }}>
            © {new Date().getFullYear()} {theme.settings.name.default} | All Rights Reserved
            <br />Developed & Maintained By Blue Brain Technologies.
          </Typography>
          <Typography variant="body2" style={{ color: `${theme.palette.common.white}` }}>

          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
