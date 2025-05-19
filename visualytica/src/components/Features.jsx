import React from 'react';
import { Box, Typography, Grid, styled } from '@mui/material';

// Wrapper with background
const FeaturesWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '90vh',
  backgroundImage: 'url("/featuresbg.svg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 20px',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    // Remove background image on mobile for cleaner look
    backgroundImage: 'none',
    backgroundColor: '#f8f9fa',
    padding: '40px 16px',
    minHeight: 'auto',
    paddingTop: '60px',
    paddingBottom: '60px',
  },
}));

// Heading styling with Aboreto font
const FeatureHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Aboreto, cursive',
  fontSize: '3.5rem',
  fontWeight: 400,
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '40px',
  letterSpacing: '0.05em',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2.8rem',
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#2c3e50',
    fontWeight: 600,
  },
}));

// Base Feature Card styling
const FeatureCardBase = styled(Box)(({ theme }) => ({
  backgroundColor: '#E6A151',
  borderRadius: '32px',
  border: '2px solid #ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 20px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.15)',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.2)',
  },
  
  [theme.breakpoints.down('md')]: {
    padding: '24px 16px',
    borderRadius: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    // Mobile improvements
    backgroundColor: '#ffffff',
    border: '2px solid #E6A151',
    padding: '30px 20px',
    marginBottom: '15px',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(230, 161, 81, 0.15)',
    
    '&:hover': {
      transform: 'translateY(-3px)',
      backgroundColor: '#fffef9',
      boxShadow: '0 6px 20px rgba(230, 161, 81, 0.25)',
    },
  },
}));

// Large Feature Card (for outer cards)
const LargeFeatureCard = styled(FeatureCardBase)(({ theme }) => ({
  height: '320px',
  
  [theme.breakpoints.down('md')]: {
    height: '280px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '160px',
    width: '100%',
    maxWidth: '320px',
  },
}));

// Small Feature Card (for middle cards)
const SmallFeatureCard = styled(FeatureCardBase)(({ theme }) => ({
  height: '280px',
  
  [theme.breakpoints.down('md')]: {
    height: '240px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '160px',
    width: '100%',
    maxWidth: '320px',
  },
}));

// Icon container
const IconContainer = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
    marginBottom: '15px',
    backgroundColor: '#f1f5f9',
    borderRadius: '50%',
    border: '3px solid #E6A151',
    padding: '10px',
    
    '& img': {
      width: '100%',
      height: '100%',
      filter: 'brightness(0.8)',
    },
  },
}));

// Feature title styling with Montaga font
const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montaga, serif',
  fontSize: '1.5rem',
  fontWeight: 400,
  color: '#ffffff',
  textAlign: 'center',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    color: '#2c3e50',
    fontWeight: 500,
    lineHeight: 1.3,
  },
}));

// Custom grid container for feature cards layout
const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '40px',
  width: '100%',
  maxWidth: '1400px',
  
  [theme.breakpoints.down('md')]: {
    gap: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
    maxWidth: '100%',
    padding: '0 20px',
  },
}));

const Features = () => {
  // Feature data
  const featuresData = [
    {
      icon: "/icons/upload.svg", // Replace with your actual icon path
      title: "Upload network data",
      isLarge: true
    },
    {
      icon: "/icons/Visualize.svg", // Replace with your actual icon path
      title: "Visualize 15+ graphs",
      isLarge: false
    },
    {
      icon: "/icons/interactivit.svg", // Replace with your actual icon path
      title: "Analyze and interact graphs",
      isLarge: false
    },
    {
      icon: "/icons/dashboard.svg", // Replace with your actual icon path
      title: "Develop dashboards",
      isLarge: true
    }
  ];

  return (
    <FeaturesWrapper>
      <FeatureHeading variant="h2">TOP FEATURES</FeatureHeading>
      
      <FeaturesGrid>
        {featuresData.map((feature, index) => {
          const CardComponent = feature.isLarge ? LargeFeatureCard : SmallFeatureCard;
          
          return (
            <CardComponent key={index} sx={{ 
              flex: feature.isLarge ? '0 0 270px' : '0 0 240px',
              [theme => theme.breakpoints.down('md')]: {
                flex: feature.isLarge ? '0 0 230px' : '0 0 210px',
              },
              [theme => theme.breakpoints.down('sm')]: {
                flex: 'none',
              }
            }}>
              <IconContainer>
                <img src={feature.icon} alt={feature.title} />
              </IconContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
            </CardComponent>
          );
        })}
      </FeaturesGrid>
    </FeaturesWrapper>
  );
};

export default Features;