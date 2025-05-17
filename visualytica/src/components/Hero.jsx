import React from 'react';
import { Box, styled } from '@mui/material';

const HeroWrapper = styled(Box)({
  width: '100%',
  height: '800px',
  position: 'relative',
  overflow: 'hidden',
});

// Use the SVG as background image (acts as the shape)
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

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroShapeContainer />
    </HeroWrapper>
  );
};

export default Hero;
