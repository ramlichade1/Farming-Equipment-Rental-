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
    switch (label) {
      case 'About me':
        navigate('/about');
        break;
      case 'My Favorites':
        navigate('/favorites');
        break;
      case 'My Orders':
        navigate('/my-orders');
        break;
      case 'My Address':
        navigate('/my-address');
        break;
      case 'Notifications':
        navigate('/notifications');
        break;
      default:
        break;
    }
  };

  const menuItems = [
    { icon: <Info />, label: 'About me' },
    { icon: <ShoppingBag />, label: 'My Orders' },
    { icon: <Favorite />, label: 'My Favorites' },
    { icon: <LocationOn />, label: 'My Address' },
    { icon: <Notifications />, label: 'Notifications' },
    { icon: <Logout />, label: 'Sign out' },
  ];

  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', pb: 9 }}>
      {/* Top White Half-Circle */}
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
          {/* Profile Avatar + Camera Icon */}
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
          {/* Name & Email */}
          <Typography fontWeight={600} mt={1}>
            Olivia Austin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            oliviaaustin@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Profile Menu Options */}
      <Box sx={{ px: 2, mt: 8 }}>
        <List>
          {menuItems.map((item, idx) => (
            <ListItem key={idx} button onClick={() => handleNavigation(item.label)}>
              <ListItemIcon sx={{ color: '#007E2F' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              <ListItemSecondaryAction>
                <ArrowForwardIos fontSize="small" sx={{ color: '#B0B0B0' }} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Navigation */}
      <BottomNav />
    </Box>
  );
};

export default Profile;
