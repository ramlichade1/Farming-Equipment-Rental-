import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  InputBase
} from '@mui/material';
import {
  NotificationsNone,
  AttachMoney,
  Tune,
  Search,
  FavoriteBorder
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({
  title = 'Farmers',
  showSearch = true,
  showWallet = true,
  showNotifications = true,
  showFilter = true,
  showHeart = false,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        bgcolor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {/* 🔝 Top Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={showSearch ? 1 : 0}>
        <Typography variant="h6" fontWeight={600} color="green">
          {title}
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          {showWallet && (
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 1,
                py: 0.5,
                borderRadius: 3,
                bgcolor: '#eaf7e7',
                gap: 0.5,
              }}
            >
              <AttachMoney sx={{ color: 'green', fontSize: 20 }} />
              <Typography variant="body2" fontWeight={600}>50</Typography>
            </Paper>
          )}

          {showNotifications && (
            <IconButton size="small" sx={{ bgcolor: '#f3f8f2' }}>
              <NotificationsNone sx={{ color: 'green' }} />
            </IconButton>
          )}

          {showHeart && (
            <IconButton
              size="small"
              sx={{ bgcolor: '#f3f8f2' }}
              onClick={() => navigate('/favorites')} // ← Navigate on click
            >
              <FavoriteBorder sx={{ color: 'green' }} />
            </IconButton>
          )}


          {showFilter && !showSearch && (
            <IconButton size="small" sx={{ bgcolor: '#f3f8f2' }}>
              <Tune sx={{ color: 'green' }} />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* 🔍 Search Row */}
      {showSearch && (
        <Box display="flex" alignItems="center" gap={1}>
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 0.5,
              borderRadius: 8,
              bgcolor: '#f5f5f5',
            }}
          >
            <Search sx={{ color: 'gray' }} />
            <InputBase placeholder="Search.." sx={{ ml: 1, flex: 1 }} />
          </Paper>

          {showFilter && (
            <IconButton sx={{ bgcolor: '#e8f5e9' }}>
              <Tune sx={{ color: 'green' }} />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
