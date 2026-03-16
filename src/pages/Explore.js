import { Box, Container } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Categories from './Categories';
import Product from './Products';
import BottomNav from '../components/common/BottomNav';
import promoImage from '../assets/ExploreImg.jpg';

const Explore = () => {
  return (
    <Box
      sx={{
        pb: 10,
        minHeight: '100vh',
        bgcolor: '#f8f9fa'
      }}
    >
      {/* Top Navbar */}
      <Navbar
        title="Explore"
        showSearch={false}
        showWallet={false}
        showNotifications={false}
        showFilter={true}
        showHeart={true}
      />

      {/* Page Content */}
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          px: {
            xs: 1,
            sm: 2,
            md: 3
          }
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: '1100px'
            },
            mx: 'auto'
          }}
        >
          {/* Categories */}
          <Categories />

          {/* Promo Image */}
          <Box
            sx={{
              width: '100%',
              height: {
                xs: 140,
                md: 280
              },
              borderRadius: 3,
              overflow: 'hidden',
              my: 2
            }}
          >
            <Box
              component="img"
              src={promoImage}
              alt="Special Offer"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Product Listing */}
          <Product />
        </Box>
      </Container>

      {/* Bottom Navigation */}
      <BottomNav />
    </Box>
  );
};

export default Explore;