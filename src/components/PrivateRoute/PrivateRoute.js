// import React from 'react';
// import useAuth from '../../hooks/useAuth';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, loading } = useAuth();
//     if (loading) return 'loading';
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => user.email ? children : <Redirect
//                 to={{
//                     pathname: "/login",
//                     state: { from: location }
//                 }}
//             ></Redirect>}
//         >

//         </Route>
//     );
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;