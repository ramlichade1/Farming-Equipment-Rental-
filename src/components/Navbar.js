// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, Paper } from '@mui/material';
import { NotificationsNone, AttachMoney, Tune, Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2, pt: 1 }}>
        {/* Left: Title */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 600, color: "#007E2F" }}>
          Farmers
        </Typography>

        {/* Right Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 1,
              py: 0.5,
              borderRadius: 4,
              backgroundColor: '#eaf7e7',
              gap: 0.5,
            }}
          >
            <AttachMoney sx={{ color: 'green', fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              50
            </Typography>
          </Paper>

          <IconButton size="small" sx={{ backgroundColor: '#f3f8f2' }}>
            <NotificationsNone sx={{ color: 'green' }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Search + Filter Row */}
      <Box sx={{ px: 2, pb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 0.5,
            borderRadius: 8,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Search sx={{ color: 'gray' }} />
          <InputBase placeholder="Search.." sx={{ ml: 1, flex: 1 }} />
        </Paper>

        <IconButton sx={{ backgroundColor: '#e8f5e9' }}>
          <Tune sx={{ color: 'green' }} />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Navbar;
