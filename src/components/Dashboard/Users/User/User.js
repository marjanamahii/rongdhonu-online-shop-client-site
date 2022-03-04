import React from 'react';

const User = ({ user }) => {
    const { displayName, email, role, _id } = user;
    return (
        <tr>
            <td>{_id}</td>
            <th>{displayName}</th>
            <td>{email}</td>
            <td>{role}</td>

        </tr>

    );
};

export default User;