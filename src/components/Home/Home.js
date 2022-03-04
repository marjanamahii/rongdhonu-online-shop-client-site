import React from 'react';
import AddReview from '../Dashboard/AddReview/AddReview';
import OrderReview from '../OrderReview/OrderReview';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header/Header';
import TopHeader from '../Shared/Header/TopHeader/TopHeader';
import Reviews from '../Shared/Reviews/Reviews/Reviews';
import Shop from '../Shop/Shop';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <div className="sticky-top">
                <Header></Header>
            </div>
            <HeroSection></HeroSection>
            <Shop />
            <Reviews />
            <Footer></Footer>
        </div>
    );
};

export default Home;