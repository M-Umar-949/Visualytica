import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, useMediaQuery, useTheme, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snack, setSnack] = useState({ open: false, severity: 'success', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSnack({ open: true, severity: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await res.json();
        setSnack({ open: true, severity: 'error', message: errorData.error || 'Failed to send message.' });
      }
    } catch (error) {
      setSnack({ open: true, severity: 'error', message: 'Network error. Please try again.' });
    }
  };

  const handleClose = () => setSnack(prev => ({ ...prev, open: false }));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4
        }}
      >
        {/* Left Logos */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '100%' : '40%'
          }}
        >
          <Box
            component="img"
            src="/FAST.png"
            alt="FAST Logo"
            sx={{
              width: isMobile ? '200px' : '400px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <Box
            component="img"
            src="/kdd.png"
            alt="KDD Lab Logo"
            sx={{
              width: isMobile ? '200px' : '400px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Box>

        {/* Right Contact Form */}
        <Box
          sx={{
            backgroundColor: '#E6A151',
            borderRadius: theme.shape.borderRadius * 2,
            p: isMobile ? 2 : 4,
            width: isMobile ? '90%' : '55%',
            mx: isMobile ? 'auto' : 0,
            textAlign: 'center',
            boxShadow: theme.shadows[4]
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: 'Aboreto, cursive',
              mb: 2,
              color: theme.palette.primary.contrastText,
              fontWeight: 'bold'
            }}
          >
            Interested in Visualytica?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme.palette.primary.contrastText,
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: 1.5,
              fontFamily: 'Montaga, serif',
              px: isMobile ? 1 : 0
            }}
          >
            We're actively collaborating with researchers, analysts, and early adopters.
            Get in touch to learn more, schedule a demo, or explore partnership opportunities.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius,
              p: isMobile ? 2 : 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              fontFamily: 'Montaga, serif',
            }}
          >
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              variant="outlined"
              size="small"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ backgroundColor: 'white' }}
            />
            <TextField
              fullWidth
              name="email"
              label="Your Email"
              variant="outlined"
              size="small"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ backgroundColor: 'white' }}
            />
            <TextField
              fullWidth
              name="message"
              label="Your Message"
              variant="outlined"
              size="small"
              multiline
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ backgroundColor: 'white' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                py: 1.5,
                backgroundColor: 'black',
                color: theme.palette.secondary.contrastText,
                '&:hover': { backgroundColor: '#333' },
                fontFamily: 'Aboreto, cursive',
                borderRadius: theme.shape.borderRadius,
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar open={snack.open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Footer;
