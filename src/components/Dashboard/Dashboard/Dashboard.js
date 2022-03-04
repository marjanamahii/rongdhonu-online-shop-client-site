import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    Outlet,

} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
const Dashboard = () => {
    const { logout, admin } = useAuth()
    return (
        <div className="">
            {
                admin ? <h1 className="text-center text-bg fw-bolder py-2">
                    Rongdhonu Shop Admin Panel
                </h1> : <h1 className="text-center text-bg fw-bolder py-2">
                    Welcome To Our Shop
                </h1>
            }
            <div className="d-none d-md-block">
                <div className="row mx-2">
                    <div className="col-lg-2 border-2 border-end h-100">
                        {
                            admin &&
                            <div>
                                <div className=" ">
                                    <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard"><i className="fas fa-th-large"></i> Dashboard</Link>
                                </div>
                                <div className=" ">
                                    <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/manageusers"><i className="fas fa-users-cog"></i> Manage Users</Link>
                                </div>
                                <div className=" ">
                                    <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addblog"><i class="fab fa-blogger"></i> Add Blog</Link>
                                </div>
                                <div className=" ">
                                    {/* <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addprojects"><i className="fas fa-plus-square"></i> Add Project</Link> */}
                                    <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addprojects"><i className="fas fa-plus-square"></i> Add Product</Link>
                                </div>
                                <div className=" ">
                                    <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addservice"><i className="fas fa-plus-circle"></i> Add Service</Link>
                                </div>

                            </div>
                        }
                        <div className=" ">
                            <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/orders"><i class="fas fa-shopping-cart"></i> MyOrders</Link>
                        </div>
                        {
                            admin &&
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/manageallorderes"><i class="fas fa-shopping-cart"></i> M. Orders</Link>
                            </div>
                        }
                        <div className=" ">
                            <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addreview"><i class="fas fa-star"></i> Add Review</Link>
                        </div>
                        <div className=" ">
                            <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/makeadmin"><i class="fas fa-star"></i> Make Admin</Link>
                        </div>

                        <div className=" ">
                            <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/home"><i className="fas fa-home"></i> Home</Link>
                        </div>
                        <div className=" ">
                            <Link onClick={logout} className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/"><i className="fas fa-sign-out-alt"></i> Log Out</Link>
                        </div>
                    </div>
                    <div className="col-lg-10">

                        <Outlet></Outlet>
                    </div>
                </div>

            </div>

            <div className="d-block d-md-none">
                <button className="btn text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel2">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel2">Dashboard</h5>
                        <button type="" className="btn text-light" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-times"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard"><i className="fas fa-th-large"></i> Dashboard</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/manageusers"><i className="fas fa-users-cog"></i> Manage Users</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/manageteam"><i className="fas fa-users"></i> Manage Team</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/addprojects"><i className="fas fa-plus-square"></i> Add Project</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/manageprojects"><i className="fas fa-pager"></i> M. Projects</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/dashboard/managereviews"><i className="fas fa-star"></i> Reviews</Link>
                            </div>
                            <div className=" ">
                                <Link className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/home"><i className="fas fa-home"></i> Home</Link>
                            </div>
                            <div className=" ">
                                <Link onClick={logout} className="text-decoration-none dashboard-menu p-2 d-block fs-5" to="/"><i className="fas fa-sign-out-alt"></i> Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;