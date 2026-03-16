// Notifications.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    allow: true,
    email: false,
    order: false,
    general: true,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', px: 2, pt: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate(-1)} size="small">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" fontWeight={600} sx={{ ml: 1 }}>
          Notifications
        </Typography>
      </Box>

      {/* Notification Switch Sections */}
      {[
        { key: 'allow', label: 'Allow Notifications' },
        { key: 'email', label: 'Email Notifications' },
        { key: 'order', label: 'Order Notifications' },
        { key: 'general', label: 'General Notifications' },
      ].map((item, index) => (
        <Box
          key={item.key}
          sx={{
            bgcolor: 'white',
            p: 2,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography fontWeight={600}>{item.label}</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
              </Typography>
            </Box>
            <Switch
              checked={settings[item.key]}
              onChange={() => handleToggle(item.key)}
              sx={{ color: '#007E2F' }}
            />
          </Box>
        </Box>
      ))}

      {/* Save Settings Button */}
      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            background: 'linear-gradient(to right, #A4E057, #00B84C)',
            textTransform: 'none',
            borderRadius: 2,
          }}
        >
          Save settings
        </Button>
      </Box>
    </Box>
  );
};

export default Notifications;
