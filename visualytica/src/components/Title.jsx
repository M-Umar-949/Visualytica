import React from 'react';
import { Box, Typography, styled } from '@mui/material';

// Card container with shadow effect
const CardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px 60px',
  borderRadius: '40px',
  backgroundColor: '#ffffff',
  border: '2px solid #000000', // 🟩 Black stroke added
  boxShadow: '0 40px 40px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  transition: 'transform 0.3s ease', // ✅ Smooth transition
  overflow: 'hidden',
    // 🟡 Hover animation
  '&:hover': {
    transform: 'scale(1.08)',
  },
  // Drop shadow effect
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '2%',
    width: '96%',
    height: '30px',
    borderRadius: '50%',
    boxShadow: '0 15px 15px rgba(0, 0, 0, 0.2)',
    zIndex: -1,
  },
  // Responsive styling
  [theme.breakpoints.down('md')]: {
    padding: '30px 40px',
    borderRadius: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',              // 🔻 Reduce card width
    padding: '15px 13px',         // 🔧 Smaller padding for phones
    borderRadius: '20px',
  },
}));

// Title styling with Aboreto font
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Aboreto, cursive',
  fontSize: '3rem',
  fontWeight: 400,
  color: '#000000',
  textAlign: 'center',
  marginBottom: '30px',
  // Responsive font sizes
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginBottom: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
}));

// Description styling with Montaga font
const Description = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montaga, serif',
  fontSize: '1.25rem',
  fontWeight: 400,
  color: '#000000',
  lineHeight: 1.6,
  // Responsive font sizes
  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
}));

// InfoCard component
const InfoCard = ({ title, description }) => {
  return (
    <CardContainer>
      <Title variant="h1">{title}</Title>
      <Description variant="body1">{description}</Description>
    </CardContainer>
  );
};



export default InfoCard;