import React from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Users from '../Users/Users/Users';
import './ManageUsers.css';
const ManageUsers = () => {
    return (
        <div>
            <h1 className="text-center fw-bolder py-2">
                Manage Users
            </h1>
            <MakeAdmin></MakeAdmin>
            <Users></Users>
        </div>
    );
};

export default ManageUsers;