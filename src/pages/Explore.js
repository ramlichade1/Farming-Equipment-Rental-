import { Box, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Categories from './Categories';
import Product from './Products';
import BottomNav from '../components/BottomNav';
import promoImage from '../assets/ExploreImg.jpg';

const Explore = () => {
    return (
        <Box sx={{ pb: 10 }}>
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
            <Container maxWidth="sm" sx={{ pt: 2 }}>
                {/* Categories */}
                <Categories />

                {/* Promo Image */}
                <Box
                    sx={{
                        width: '100%',
                        height: 140,
                        borderRadius: 3,
                        overflow: 'hidden',
                        my: 2,
                    }}
                >
                    <Box
                        component="img"
                        src={promoImage}
                        alt="Special Offer"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                {/* Product Listing */}
                <Product />

            </Container>

            {/* Bottom Navigation */}
            <BottomNav />
        </Box>
    );
};

export default Explore;
