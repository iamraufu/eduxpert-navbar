import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import FeaturedSection from './FeaturedSection';
// import HeroSection from './HeroSection';

const Home = () => {
    return (
        <main>
            <Navbar />
            {/* <HeroSection /> */}
            <FeaturedSection />
        </main>
    );
};

export default Home;