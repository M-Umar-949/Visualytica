import React, { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItem, ListItemText, Link, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Features', 'Tech', 'Team', 'Timeline', 'Demo', 'Newsletter'];

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, fontFamily: 'Aboreto, cursive', mt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((text, index) => (
          <ListItem button key={index}>
            <Link 
              href={`#${text.toLowerCase()}`} 
              underline="none" 
              sx={{ color: 'black', width: '100%' }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
        zIndex: 1000,
        backgroundColor: 'transparent',
      }}
    >
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            fontFamily: 'Aboreto, cursive',
            color: 'white',
            fontSize: '0.9rem'
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              underline="none"
              sx={{
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  color: '#E6A151'
                }
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Nav;
