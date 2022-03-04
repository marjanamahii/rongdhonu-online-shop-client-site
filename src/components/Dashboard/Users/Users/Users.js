import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import User from '../User/User';

const Users = () => {
    const { users, spinner } = useUsers();
    return (
        <div>
            {
                spinner && <div class="d-flex justify-content-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        users.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default Users;