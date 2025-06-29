import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  Info,
  ShoppingBag,
  Favorite,
  LocationOn,
  CreditCard,
  ReceiptLong,
  Notifications,
  Logout,
  ArrowForwardIos,
  CameraAlt,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  const navigate = useNavigate();

  const handleNavigation = (label) => {
    if (label === 'About me') navigate('/about');
    else if (label === 'My Favorites') navigate('/favorites');
    else if (label === 'My Orders') navigate('/my-orders');
  };

  const menuItems = [
    { icon: <Info />, label: 'About me' },
    { icon: <ShoppingBag />, label: 'My Orders' },
    { icon: <Favorite />, label: 'My Favorites' },
    { icon: <LocationOn />, label: 'My Address' },
    { icon: <CreditCard />, label: 'Credit Cards' },
    { icon: <ReceiptLong />, label: 'Transactions' },
    { icon: <Notifications />, label: 'Notifications' },
    { icon: <Logout />, label: 'Sign out' },
  ];

  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', pb: 10 }}>
      {/* White Top Curve Background */}
      <Box
        sx={{
          bgcolor: 'white',
          height: 120,
          borderBottomLeftRadius: '100%',
          borderBottomRightRadius: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Avatar alt="Olivia Austin" src="" sx={{ width: 100, height: 100 }} />
            <IconButton
              sx={{
                bgcolor: '#007E2F',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 28,
                height: 28,
              }}
            >
              <CameraAlt sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
          <Typography fontWeight={600} mt={1}>
            Olivia Austin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            oliviaaustin@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Menu List */}
      <Box sx={{ px: 2, mt: 8 }}>
        <List sx={{ bgcolor: '#F4F5F9' }}>
          {menuItems.map((item, idx) => (
            <ListItem
              key={idx}
              button
              onClick={() => handleNavigation(item.label)}
            >
              <ListItemIcon sx={{ color: '#007E2F' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              <ListItemSecondaryAction>
                <ArrowForwardIos fontSize="small" sx={{ color: '#B0B0B0' }} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <BottomNav />
    </Box>
  );
};

export default Profile;
