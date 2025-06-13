import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Demo = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '600px', md: '1000px' },
          backgroundImage: 'url("/demobg.svg")', // Your SVG background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Aboreto, cursive',
              color: '#fff',
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' },
              // textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Demo Video
          </Typography>

         { /* Video */}
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/lKXikJkgbK8?loop=1&playlist=lKXikJkgbK8"
            allow="autoplay; encrypted-media"
            allowFullScreen
            sx={{
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              outline: 'none'
            }}
          />
        </Container>
      </Box>
    </>
  );
};

export default Demo;
