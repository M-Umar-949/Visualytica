import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden', // Prevent wrapper overflow

  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none',
    backgroundColor: '#f8f9fa',
    padding: '40px 0',
    minHeight: 'auto',
    paddingTop: '60px',
    paddingBottom: '60px',
  },
}));

// Container to control max width
const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1400px',
  padding: '0 20px',
  
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
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
    fontSize: '2.2rem',
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
    backgroundColor: '#ffffff',
    border: '2px solid #E6A151',
    padding: '24px 16px',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(230, 161, 81, 0.15)',
    width: '100%',
    maxWidth: '280px',
    
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
  width: '270px',
  
  [theme.breakpoints.down('lg')]: {
    width: '250px',
    height: '300px',
  },
  [theme.breakpoints.down('md')]: {
    width: '220px',
    height: '280px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '180px',
    width: '100%',
    maxWidth: '280px',
  },
}));

// Small Feature Card (for middle cards)
const SmallFeatureCard = styled(FeatureCardBase)(({ theme }) => ({
  height: '280px',
  width: '240px',
  marginTop: '40px',
  
  [theme.breakpoints.down('lg')]: {
    width: '220px',
    height: '260px',
  },
  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '240px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: '180px',
    width: '100%',
    maxWidth: '280px',
    marginTop: '0', // Reset margin on mobile
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
  lineHeight: 1.3,
  
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

// Fixed grid container for feature cards layout
const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  width: '100%',
  maxWidth: '1200px',
  
  [theme.breakpoints.down('lg')]: {
    gap: '25px',
    maxWidth: '1000px',
  },
  [theme.breakpoints.down('md')]: {
    gap: '20px',
    maxWidth: '1000px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    maxWidth: '100%',
    padding: '0',
  },
}));

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Feature data
  const featuresData = [
    {
      icon: "/icons/upload.svg",
      title: "Upload network data",
      isLarge: true
    },
    {
      icon: "/icons/Visualize.svg",
      title: "Visualize 15+ graphs",
      isLarge: false
    },
    {
      icon: "/icons/interactivit.svg",
      title: "Analyze and interact graphs",
      isLarge: false
    },
    {
      icon: "/icons/dashboard.svg",
      title: "Develop dashboards",
      isLarge: true
    }
  ];

  return (
    <FeaturesWrapper>
      <ContentContainer>
        <FeatureHeading variant="h2">TOP FEATURES</FeatureHeading>
        
        <FeaturesGrid>
          {featuresData.map((feature, index) => {
            const CardComponent = feature.isLarge ? LargeFeatureCard : SmallFeatureCard;
            
            return (
              <CardComponent key={index}>
                <IconContainer>
                  <img src={feature.icon} alt={feature.title} />
                </IconContainer>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </CardComponent>
            );
          })}
        </FeaturesGrid>
      </ContentContainer>
    </FeaturesWrapper>
  );
};

export default Features;