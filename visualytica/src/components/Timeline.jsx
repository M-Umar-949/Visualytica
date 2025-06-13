import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const timelineData = [
    {
      phase: 1,
      period: "SEP-OCT",
      title: "Project planning, WEB ui prototyping & graph nature detection",
      color: "#6B8DD6"
    },
    {
      phase: 2,
      period: "NOV-DEC",
      title: "Graphs generation and customization",
      color: "#C4B896"
    },
    {
      phase: 3,
      period: "FEB-MAR",
      title: "Dynamic dashboard features development and Notebook download implementation",
      color: "#C67E7E"
    },
    {
      phase: 4,
      period: "APR-MAY",
      title: "Final integration and feature expansion",
      color: "#8FC4A7"
    }
  ];

  const MobileTimeline = () => (
    <Box sx={{ width: '100%' }}>
      {timelineData.map((item, index) => (
        <Box
          key={item.phase}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            mb: 4,
            position: 'relative'
          }}
        >
          {/* Left side - Phase circle and connector */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
            <Box
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'Aboreto, cursive',
                mb: 1
              }}
            >
              {item.phase}
            </Box>

            {/* Vertical line connector (except for last item) */}
            {index < timelineData.length - 1 && (
              <Box
                sx={{
                  width: '2px',
                  height: '80px',
                  backgroundColor: '#ddd',
                  mt: 1
                }}
              />
            )}
          </Box>

          {/* Right side - Content */}
          <Box sx={{ flex: 1, pt: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Aboreto, cursive',
                fontWeight: 'bold',
                mb: 1,
                color: item.color
              }}
            >
              {item.period}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Aboreto, cursive',
                color: '#666',
                lineHeight: 1.5
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Aboreto:wght@400;700&display=swap');
      `}</style>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Title */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontFamily: 'Aboreto, cursive',
            fontWeight: 'normal',
            letterSpacing: '0.1em',
            color: '#333',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          TIMELINE
        </Typography>

        {/* Timeline: Show SVG on Desktop, Custom on Mobile */}
        <Box sx={{ position: 'relative', minHeight: '400px' }}>
          {isMobile ? (
            <MobileTimeline />
          ) : (
            <Box
              component="img"
              src="/Timeline.svg" // Your saved SVG path
              alt="Timeline"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                mx: 'auto'
              }}
            />
          )}
        </Box>
      </Container>
    </>
  );
};

export default Timeline;
