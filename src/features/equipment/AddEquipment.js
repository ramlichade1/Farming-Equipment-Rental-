import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem
} from '@mui/material';

const categories = [
  'Tractor',
  'Seeder',
  'Harvester',
  'Sprayer'
];

const AddEquipment = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    pricePerDay: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Add Equipment
      </Typography>

      <TextField
        fullWidth
        label="Equipment Name"
        name="name"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        select
        fullWidth
        label="Category"
        name="category"
        margin="normal"
        onChange={handleChange}
      >
        {categories.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label="Price Per Day"
        name="pricePerDay"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Description"
        name="description"
        margin="normal"
        multiline
        rows={3}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Location"
        name="location"
        margin="normal"
        onChange={handleChange}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Save Equipment
      </Button>
    </Box>
  );
};

export default AddEquipment;