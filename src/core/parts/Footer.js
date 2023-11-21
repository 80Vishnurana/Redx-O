import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

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
          </Grid>

          {/* Second Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{textTransform: 'uppercase', color: `${theme.palette.common.white}` }}>
              Quick Links
            </Typography>
            {/* Add your Quick Links here */}
          </Grid>

          {/* Third Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ textTransform: 'uppercase', color: '#fff' }}>
              Contact Details
            </Typography>
            {/* Add your Contact Details here */}
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Typography variant="body2" style={{ color: `${theme.palette.common.white}` }}>
            © {new Date().getFullYear()} {theme.settings.name.default} | All Rights Reserved
            <br/>Developed & Maintained By Blue Brain Technologies.
          </Typography>
          <Typography variant="body2" style={{ color: `${theme.palette.common.white}` }}>
            
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
