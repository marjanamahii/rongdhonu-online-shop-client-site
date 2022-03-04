// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/logo.png';
// import './Header.css';


// const Header = () => {
//     const { user, logOut } = useAuth();
//     return (
//         <div className="header">
//             <img className="logo" src={logo} alt="" />
//             <nav>
//                 <NavLink to="/shop">Shop</NavLink>
//                 <NavLink to="/review">Order Review</NavLink>
//                 <NavLink to="/inventory">Manage Inventory</NavLink>
//                 <NavLink to="/payment">Payment</NavLink>
//                 <NavLink to="/dashboard">Dashboard</NavLink>
//                 {user.email && <NavLink to="/orders">Orders</NavLink>}
//                 {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
//                 {
//                     user.email ?
//                         <button onClick={logOut}>log out</button>
//                         :
//                         <NavLink to="/login">Login</NavLink>}
//             </nav>
//         </div>
//     );
// };

// export default Header;

// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import logo from '../../../images/logo.png';
import LoginModal from '../LoginModal/LoginModal';
import NavModal from '../NavModal/NavModal';
import './Header.css'

const Header = () => {
    const [openr, setOpenr] = useState(false);
    const handleOpenr = () => setOpenr(true);
    const handleCloser = () => setOpenr(false);

    const [openl, setOpenl] = useState(false);
    const handleOpenl = () => setOpenl(true);
    const handleClosel = () => setOpenl(false);
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar className="nav-bg text-center nav-bg" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">

                    </Navbar.Brand>
                    <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"

                        >
                            <Nav.Link as={Link} to="/home" className="menu-color mx-lg-4 fs-5">Home</Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="menu-color mx-lg-4 fs-5">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/orderreview" className="menu-color mx-lg-4 fs-5">Order Review</Nav.Link>
                            {/* <Nav.Link as={Link} to="/login" className="menu-color mx-lg-4 fs-5">Login</Nav.Link> */}
                            <Nav.Link as={Link} to="/contact" className="menu-color mx-lg-4 fs-5">Contact Us</Nav.Link>
                            {/* <Nav.Link as={Link} to="/orders" className="menu-color mx-lg-4 fs-5">Orders</Nav.Link> */}
                            {
                                !user.email && <Nav.Link as={Link} to="" onClick={handleOpenl} className="menu-color mx-lg-4 fs-5">Login</Nav.Link>
                            }
                            {
                                !user.email && <Nav.Link as={Link} to="/" className="menu-color mx-lg-4 fs-5" onClick={handleOpenr}>
                                    Register
                                </Nav.Link>
                            }
                            <NavModal
                                openr={openr}
                                handleCloser={handleCloser}
                                handleOpenr={handleOpenr}
                            ></NavModal>
                            <LoginModal
                                openl={openl}
                                handleClosel={handleClosel}
                                handleOpenl={handleOpenl}
                            ></LoginModal>
                            {
                                user.email && <Nav.Link as={Link} to="" className="menu-color mx-lg-4 fs-5">
                                    <div className="a">
                                        <div className="d-flex align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

                                            {
                                                user.photoURL ? <img className="userImg" src={user.photoURL} alt="" /> : <div className="fs-5 rounded-circle border" style={{ width: '35px', height: '35px' }}>
                                                    <i class="fas fa-user text-light"></i>
                                                </div>
                                            }
                                        </div>

                                        <div className="offcanvas offcanvas-end text-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                            <div className="offcanvas-header">
                                                <h5 id="offcanvasRightLabel" className='text-light'>Profile</h5>
                                                <button type="button" className="btn-close text-reset btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <div className="a">
                                                    <Link to="/orders" className="fs-5 border py-1 d-inline-block mb-3 profile-menu-box">
                                                        <i class="fas fa-laptop-house"></i><p className="m-0">My Orders</p>
                                                    </Link> <br />
                                                    <Link to="/dashboard" className="fs-5 border py-1 d-inline-block mb-3 profile-menu-box">
                                                        <i className="fas fa-th-large"></i><p className="m-0">Dashboard</p>
                                                    </Link>
                                                    <br />
                                                    <Link onClick={logout} to="/" className="fs-5 border py-1 d-inline-block mb-3 profile-menu-box">
                                                        <i className="fas fa-sign-out-alt"></i><p className="m-0">Log Out</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Nav.Link>


                            }





                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

