import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Switch,
    Button,
} from '@mui/material';
import {
    ArrowBack,
    Person,
    Email,
    Phone,
    LocationOn,
    Public,
    PinDrop,
    LocationCity,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', p: 2 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6" fontWeight={600} sx={{ ml: 12 }}>
                    Add Address
                </Typography>
            </Box>

            {/* Form Fields */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mb: 2,
                }}
            >
                <TextField
                    placeholder="Name"
                    fullWidth
                    InputProps={{ startAdornment: <Person sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="Email address"
                    fullWidth
                    InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="Phone number"
                    fullWidth
                    InputProps={{ startAdornment: <Phone sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="Address"
                    fullWidth
                    InputProps={{ startAdornment: <LocationOn sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="Zip code"
                    fullWidth
                    InputProps={{ startAdornment: <PinDrop sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="City"
                    fullWidth
                    InputProps={{ startAdornment: <LocationCity sx={{ mr: 1 }} /> }}
                />
                <TextField
                    placeholder="Country"
                    fullWidth
                    InputProps={{ startAdornment: <Public sx={{ mr: 1 }} /> }}
                />
            </Box>

            {/* Save Switch */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, }}>
                <Switch
                    defaultChecked
                    sx={{
                        '&.MuiSwitch-root .MuiSwitch-switchBase.Mui-checked': {
                            color: '#4CAF50',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#4CAF50',
                        },
                    }}
                />
                <Typography>Save this address</Typography>
            </Box>

            {/* Submit Button */}
            <Button
                variant="contained"
                fullWidth
                sx={{
                    background: 'linear-gradient(to right, #A1E05F, #4CAF50)',
                    color: 'white',
                    borderRadius: 2,
                    py: 1.3,
                    textTransform: 'none',
                    fontWeight: 600,
                }}
            >
                Add address
            </Button>
        </Box>
    );
};

export default AddAddress;
