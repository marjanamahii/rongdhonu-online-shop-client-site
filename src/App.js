// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import Payment from './components/Dashboard/Payment/Payment';
// import Inventory from './components/Inventory/Inventory';
// import Login from './components/Login/Login';
// import NotFound from './components/NotFound/NotFound';
// import OrderReview from './components/OrderReview/OrderReview';
// import Orders from './components/Orders/Orders';
// import PlaceOrder from './components/PlaceOrder/PlaceOrder';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Register from './components/Register/Register';
// import Footer from './components/Shared/Footer/Footer';
// import Header from './components/Shared/Header/Header';
// import Shipping from './components/Shipping/Shipping';
// import Shop from './components/Shop/Shop';
// import AuthProvider from './context/AuthProvider';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Orders from './components/Orders/Orders'
import Shipping from './components/Shipping/Shipping';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageUsers from './components/Dashboard/ManageUsers/ManageUsers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" exact element={<Home />}>
            </Route>
            <Route path="/shop" element={<Shop />}>
            </Route>
            <Route path="/orderreview" element={<OrderReview />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            {/* <Route path="/orders" element={<Orders />}>
            </Route> */}
            <Route path="/placeorder" element={<PlaceOrder />}>
            </Route>
            <Route path="/shipping" element={<Shipping />}>
            </Route>
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route path="/dashboard/addreview" element={<AddReview />} />
              <Route path="/dashboard/manageusers" element={<ManageUsers />} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} />
              {/* <Route path="/dashboard/manageusers" element={<AdminRoute><ManageUsers /></AdminRoute>} /> */}
              {/* <Route path="/dashboard" element={<DashboardHome />} /> */}
              {/* <Route path="/dashboard/manageprojects" element={<AdminRoute><ManageProjects /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/managereviews" element={<AdminRoute><ManageReviews /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/addprojects" element={<AdminRoute><AddProjects /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/manageteam" element={<AdminRoute><ManageTeam /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/manageservices" element={<AdminRoute><ManageServices /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/addservice" element={<AdminRoute><AddService /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/addreview" element={<AddReview />} /> */}
              {/* <Route path="/dashboard/addblog" element={<AdminRoute><AddBlogs /></AdminRoute>} /> */}
              <Route path="/dashboard/orders" element={<Orders />} />
              {/* <Route path="/dashboard/manageallorderes" element={<AdminRoute><ManageAllOrders /></AdminRoute>} /> */}
            </Route>

            {/* <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
            </Route>
          </Routes>
          <Footer /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
