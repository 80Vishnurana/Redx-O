import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { navigationMenuItems, renderMenuItem } from './MenuItems';

import { useTheme } from '@mui/material/styles';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const LogoImage = styled('img')({
    height: '60px',
    marginRight: '20px',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.2)',
      boxShadow: `0 0 10px ${theme.palette.highlight.default}`,
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: theme.palette.navigation.default }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', height: theme.settings.navHeight.default }}>
          <Link to="/">
            {/* Wrap LogoImage with Link component */}
            <LogoImage src="/redxlogo.png" alt="Logo" />
          </Link>
          <Typography
            variant="h4"
            noWrap
            component={Link} // Use Link component for the text as well
            to="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: `${theme.palette.secondary.main}`,
              textDecoration: 'none',
            }}
          >          
            {theme.settings.name.default}    
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                style: {
                  background: 'black', // Set the background color to black
                },
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navigationMenuItems.map((page) => renderMenuItem(page, handleCloseNavMenu))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navigationMenuItems.map((page) => renderMenuItem(page, handleCloseNavMenu))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
