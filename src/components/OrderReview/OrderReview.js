import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
// import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header/Header';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    // const history = useHistory();
    const navigate = useNavigate()

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        // navigate.push('/shipping'); v5
        navigate('/shipping');
    }

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;