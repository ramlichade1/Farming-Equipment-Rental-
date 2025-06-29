import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  ArrowBack,
  ExpandMore,
  ExpandLess,
  FilterList,
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material';

const Order = () => {
  const [openOrderId, setOpenOrderId] = useState(1);

  const orders = [
    {
      id: 1,
      number: '#90897',
      date: 'October 19 2021',
      items: 10,
      price: '$16.00',
      status: ['Order placed', 'Order confirmed', 'Order shipped'],
      pending: ['Out for delivery', 'Order delivered'],
    },
    {
      id: 2,
      number: '#90897',
      date: 'October 19 2021',
      items: 10,
      price: '$16.00',
      delivered: 'Aug 29 2021',
    },
    {
      id: 3,
      number: '#90897',
      date: 'October 19 2021',
      items: 10,
      price: '$16.00',
      delivered: 'Aug 29 2021',
    },
  ];

  const handleToggle = (id) => {
    setOpenOrderId(openOrderId === id ? null : id);
  };

  return (
    <Box sx={{ px: 2, py: 1 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <IconButton onClick={() => window.history.back()}>
          <ArrowBack />
        </IconButton>
        <Typography fontWeight={600}>My Order</Typography>
        <IconButton>
          <FilterList />
        </IconButton>
      </Box>

      {/* Orders List */}
      {orders.map((order) => (
        <Box
          key={order.id}
          sx={{
            bgcolor: '#F4F5F9',
            borderRadius: 2,
            mb: 2,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography fontWeight={600}>Order {order.number}</Typography>
              <Typography variant="caption">Placed on {order.date}</Typography>
              <Typography variant="caption" display="block">
                Items: {order.items} &nbsp;&nbsp; Items: {order.price}
              </Typography>
            </Box>
            {order.status ? (
              <IconButton onClick={() => handleToggle(order.id)}>
                {openOrderId === order.id ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            ) : (
              <CheckCircle sx={{ color: '#007E2F', mt: 1 }} />
            )}
          </Box>

          {/* Expanded Order Status */}
          {order.status && (
            <Collapse in={openOrderId === order.id}>
              <Divider />
              <List dense disablePadding sx={{ px: 2 }}>
                {order.status.map((step, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <CheckCircle sx={{ color: '#007E2F', fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography fontWeight={600}>{step}</Typography>}
                      secondary="Oct 20 2021"
                    />
                  </ListItem>
                ))}
                {order.pending.map((step, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <RadioButtonUnchecked sx={{ color: 'gray', fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography fontWeight={500} color="text.secondary">
                          {step}
                        </Typography>
                      }
                      secondary="pending"
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}

          {/* Delivered Order */}
          {order.delivered && (
            <Typography sx={{ px: 2, pb: 1, color: '#B0B0B0', fontWeight: 600 }}>
              • Order Delivered &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order.delivered}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Order;
