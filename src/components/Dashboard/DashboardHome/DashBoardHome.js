import React from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../../../hooks/useOrders';
import useProjects from '../../../../hooks/useProjects';
import useReviews from '../../../../hooks/useReviews';
import useUsers from '../../../../hooks/useUsers';
import Order from '../../Orders/Order/Order';
import Orders from '../../Orders/Orders/Orders';
import './DashboardHome.css';
const DashboardHome = () => {
    const { projects } = useProjects();
    const { orders } = useOrders();
    const { reviews } = useReviews();
    const { users } = useUsers();
    return (
        <div className="container">
            <h1 className="text-center fw-bolder py-2">
                Dashboard
            </h1>
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Projects</h2>
                        <h1>{projects.length}</h1>
                        <Link to="/dashboard/manageprojects">
                            <button className="codepickjs-btn">Manage All Projects</button>
                        </Link>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Orders</h2>
                        <h1>{orders.length}</h1>
                        <Link to="/dashboard/manageallorders">
                            <button className="codepickjs-btn">Manage All Orders</button>
                        </Link>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Users</h2>
                        <h1>{users.length}</h1>
                        <Link to="/dashboard/manageusers">
                            <button className="codepickjs-btn">Manage All Users</button>
                        </Link>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Reviews</h2>
                        <h1>{reviews.length}</h1>
                        <Link to="/dashboard/managereviews">
                            <button className="codepickjs-btn">Manage All Reviews</button>
                        </Link>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default DashboardHome;