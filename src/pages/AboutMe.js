import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    InputAdornment,
    Button
} from '@mui/material';
import {
    ArrowBack,
    Person,
    Email,
    Phone,
    Lock,
    Visibility,
    VisibilityOff
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const AboutMe = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', p: 2 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>

                <Typography variant="h6" fontWeight={600} ml={13}>
                    About me
                </Typography>
            </Box>

            {/* Personal Details */}
            <Typography fontWeight={600} gutterBottom>
                Personal Details
            </Typography>

            <Box display="flex" flexDirection="column" gap={2} mb={4}>
                <TextField
                    fullWidth
                    placeholder="Russell Austin"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    placeholder="russell.partner@gmail.com"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    placeholder="+1 202 555 0142"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Phone />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Change Password */}
            <Typography fontWeight={600} gutterBottom>
                Change Password
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                    fullWidth
                    type="password"
                    placeholder="Current password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    type="password"
                    placeholder="Confirm password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Save Button */}
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
    );
};

export default AboutMe;
