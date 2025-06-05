import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Chip,
  Stack,
  Container,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { label: 'Tractor' },
  { label: 'Harvester' },
  { label: 'Seeder' },
  { label: 'Sprayer' },
  { label: 'Plough' },
];

const equipmentList = [
  { name: 'Tractor', price: '₹2500/day', image: 'https://via.placeholder.com/150' },
  { name: 'Harvester', price: '₹3000/day', image: 'https://via.placeholder.com/150' },
  { name: 'Seeder', price: '₹1800/day', image: 'https://via.placeholder.com/150' },
];

const carouselImages = [
  require('../assets/home-page1.jpg'),
  require('../assets/home-page2.jpg'),
  require('../assets/home-page3.jpg'),
  require('../assets/home-page4.webp'),
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <TextField
          fullWidth
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* 🔁 Carousel Promo Banner */}
        <Box sx={{ mb: 3 }}>
          <Slider {...sliderSettings}>
            {carouselImages.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  width: '100%',
                  height: 220,
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h6" sx={{ color: '#000', p: 1.5, }}>
                  20% off on your first purchase
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>

        <Typography variant="h6">Categories</Typography>
        <Stack direction="row" spacing={1} sx={{ my: 1, overflowX: 'auto' }}>
          {categories.map((cat) => (
            <Chip
              key={cat.label}
              label={cat.label}
              color={selectedCategory === cat.label ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(cat.label)}
              clickable
            />
          ))}
        </Stack>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Featured Equipment
        </Typography>

        <Stack spacing={2}>
          {equipmentList.map((item, idx) => (
            <Card key={idx} sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography color="text.secondary">{item.price}</Typography>
                  <Box>
                    <IconButton><FavoriteBorderIcon /></IconButton>
                    <IconButton><AddShoppingCartIcon /></IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
