import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    // const history = useHistory();
    const navigate = useNavigate()
    // https://quiet-sierra-06050.herokuapp.com
    useEffect(() => {
        fetch(`http://localhost:7000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    // navigate.push('/login'); v5
                    navigate('/login')
                }

            })
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >{order.name} : {order.email}</li>)}
            </ul>
        </div>
    );
};

export default Orders;