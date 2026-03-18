import {
  Box,
  Container
} from '@mui/material';
import Slider from 'react-slick';
import Navbar from '../components/layout/Navbar';
import Categories from './Categories';
import Product from './Products';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomNav from '../components/common/BottomNav';

const carouselImages = [
  require('../assets/home-page1.jpg'),
  require('../assets/home-page2.jpg'),
  require('../assets/home-page3.jpg'),
  require('../assets/home-page4.webp'),
];

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

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8f9fa'
      }}
    >
      <Navbar
        title="YuvaShetkari"
        showSearch={true}
        showWallet={true}
        showNotifications={true}
        showFilter={true}
      />

      <Container
        maxWidth="lg"
        sx={{
          py: 2,
          px: {
            xs: 1,
            sm: 2,
            md: 3
          }
        }}
      >
        {/* Promo Banner Slider */}
        <Box
          sx={{
            mb: 3,
            maxWidth: {
              xs: '100%',
              md: '900px'
            },
            mx: 'auto'
          }}
        >
          <Slider {...sliderSettings}>
            {carouselImages.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  width: '100%',
                  height: {
                    xs: 200,
                    md: 320
                  },
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Promo ${idx}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Categories + Products */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: '1100px'
            },
            mx: 'auto'
          }}
        >
          <Categories />
          <Product />
        </Box>

        <BottomNav />
      </Container>
    </Box>
  );
};

export default Home;