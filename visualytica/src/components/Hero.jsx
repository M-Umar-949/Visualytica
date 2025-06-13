import React, { useEffect, useRef } from 'react';
import { Box, Typography, styled } from '@mui/material';

const HeroWrapper = styled(Box)({
  width: '100%',
  height: '800px',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width:600px)': {
    height: '600px',
  },
});

const HeroShapeContainer = styled(Box)({
  width: '100%',
  height: '100%',
  maskImage: 'url("/Hero.svg")',
  WebkitMaskImage: 'url("/Hero.svg")',
  maskSize: 'cover',
  WebkitMaskSize: 'cover',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
  backgroundImage: 'url("/network.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const ContentContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 0px',
  zIndex: 1,
  textAlign: 'center', // Ensure all content is centered
});

const BrandContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Ensure content is centered horizontally
  marginBottom: '16px',
  gap: '16px',
  width: '100%', // Take full width to ensure proper centering
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '8px', // Reduce gap on mobile
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: '80px',
  [theme.breakpoints.down('sm')]: {
    height: '60px',
    marginBottom: '4px', // Add slight spacing below logo on mobile
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '4rem',
  fontWeight: 700,
  color: '#ffffff',
  textAlign: 'center',
  margin: 0, // Remove any default margins
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const Tagline = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montaga, serif',
  fontSize: '1.99rem',
  fontWeight: 400,
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '300px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    marginBottom: '160px', // Reduced to better fit mobile screen
    padding: '0 8px', // Add some padding for better text containment
    lineHeight: '1.4', // Improved line height for better readability
  },
}));

const MarqueeContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '240px',
  left: 0,
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    bottom: '180px', // Position higher up on mobile
  },
}));

const MarqueeContent = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'marquee 60s linear infinite',
  '& span': {
    fontFamily: 'Montaga, serif',
    fontSize: '1.99rem',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem', // Smaller text on mobile
    },
  },
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
}));

const Bullet = styled('span')(({ theme }) => ({
  margin: '0 12px',
  opacity: 0.8,
  [theme.breakpoints.down('sm')]: {
    margin: '0 8px', // Smaller spacing on mobile
  },
}));

const Hero = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const content = marqueeRef.current;
      content.innerHTML += content.innerHTML;
    }
  }, []);

  const marqueeText =
    'Data-Driven Decisions • Real-Time Insights • Custom Visualizations • Interactive Network Maps • Discover Hidden Connections • Transform Complexity into Clarity • Built for Analysts & Researchers • Intuitive Graph Exploration • Visual Intelligence at Scale • Turn Data into Stories • Seamless UX for Complex Data • Visualize Relationships Instantly • Uncover Systemic Patterns • Designed for Exploratory Analysis • From Raw Data to Deep Insight';

  const marqueeItems = marqueeText.split('•').map((item) => item.trim());

  return (
    <HeroWrapper>
      <HeroShapeContainer />
      <ContentContainer>
        <BrandContainer>
          <Logo src="/icons/whiteLogo.svg" alt="Visualytica Logo" />
          <BrandName variant="h1">Visualytica</BrandName>
        </BrandContainer>
        <Tagline variant="h2">Visualize Complexity. Discover Insights.</Tagline>
      </ContentContainer>

      <MarqueeContainer>
        <MarqueeContent ref={marqueeRef}>
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index < marqueeItems.length - 1 && <Bullet>•</Bullet>}
            </React.Fragment>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </HeroWrapper>
  );
};

export default Hero;