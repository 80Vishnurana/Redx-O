import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const navigationMenuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Products', link: '/products' },
  { label: 'Gallery', link: '/gallery'},
  { label: 'Contact', link: '/contact' },
];


export const userMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];


const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  
}));


const StyledLinkButton = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.white, // White color
  borderBottom: `3px solid transparent`, // Initially transparent border
  transition: 'border-color 0.3s ease-out', // Transition for smooth effect
  '&:hover': {
    borderBottom: `2px solid ${theme.palette.highlight.default}`, // Change border color on hover
  },
}));

export const renderMenuItem = (item, onClick) => (
  <StyledMenuItem key={item.label} onClick={onClick}>
    <StyledLinkButton component={Link} to={item.link}>
      <Typography textAlign="center">{item.label}</Typography>
    </StyledLinkButton>
  </StyledMenuItem>
);
export const renderLogoItem = (item, onClick) => (
  <StyledMenuItem key={item.label} onClick={onClick}>
    <StyledLinkButton component={Link} to={item.link}>
      <Typography textAlign="center">{item.label}</Typography>
    </StyledLinkButton>
  </StyledMenuItem>
);
