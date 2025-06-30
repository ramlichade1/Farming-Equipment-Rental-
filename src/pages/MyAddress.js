import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Grid,
    Switch,
    Button,
    Paper,
} from '@mui/material';
import {
    ArrowBack,
    Add,
    LocationOn,
    ExpandMore,
    Person,
    Home,
    LocationCity,
    Public,
    Phone,
    PinDrop,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MyAddress = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', p: 2 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                    My Address
                </Typography>
                <IconButton onClick={() => navigate('/add-address')}>
                    <Add />
                </IconButton>
            </Box>

            {/* Address Card 1 - Default */}
            <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
                <Typography
                    variant="caption"
                    fontWeight={600}
                    sx={{ bgcolor: '#E0F4E5', color: '#007E2F', px: 1, borderRadius: 1, display: 'inline-block', mb: 1 }}
                >
                    DEFAULT
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <LocationOn sx={{ color: '#007E2F' }} />
                    <Box>
                        <Typography fontWeight={600}>Russell Austin</Typography>
                        <Typography variant="body2">
                            28th Crescent Day, LA Port<br />
                            California, United States 77571
                        </Typography>
                        <Typography fontWeight={600} mt={1}>
                            +1 202 555 0142
                        </Typography>
                    </Box>
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <ExpandMore />
                    </IconButton>
                </Box>

                {/* Form Section */}
                <Grid container spacing={1} mt={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder="Name" InputProps={{ startAdornment: <Person sx={{ mr: 1 }} /> }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder="Address" InputProps={{ startAdornment: <Home sx={{ mr: 1 }} /> }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth placeholder="City" InputProps={{ startAdornment: <LocationCity sx={{ mr: 1 }} /> }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth placeholder="Zip code" InputProps={{ startAdornment: <PinDrop sx={{ mr: 1 }} /> }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder="Country" InputProps={{ startAdornment: <Public sx={{ mr: 1 }} /> }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder="Phone number" InputProps={{ startAdornment: <Phone sx={{ mr: 1 }} /> }} />
                    </Grid>
                </Grid>

                {/* Make Default */}
                <Box display="flex" alignItems="center" mt={2}>
                    <Switch defaultChecked sx={{ color: '#007E2F' }} />
                    <Typography>Make default</Typography>
                </Box>
            </Paper>

            {/* Address Card 2 */}
            <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
                <Box display="flex" alignItems="center" gap={1}>
                    <LocationOn sx={{ color: '#007E2F' }} />
                    <Box>
                        <Typography fontWeight={600}>Jissca Simpson</Typography>
                        <Typography variant="body2">
                            28th Crescent Day, LA Port<br />
                            California, United States 77571
                        </Typography>
                        <Typography fontWeight={600} mt={1}>
                            +1 202 555 0142
                        </Typography>
                    </Box>
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <ExpandMore />
                    </IconButton>
                </Box>
            </Paper>

            {/* Save Button */}
            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: 3,
                    background: 'linear-gradient(to right, #A1E05F, #4CAF50)',
                    color: 'white',
                    borderRadius: 2,
                    py: 1.2,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: 16,
                }}
            >
                Save settings
            </Button>
        </Box>
    );
};

export default MyAddress;
