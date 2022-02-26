import React from 'react';
import OrderReview from '../OrderReview/OrderReview';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Shop />
            <OrderReview />
        </div>
    );
};

export default Home;