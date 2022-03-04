import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {

    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const user = { email }

        fetch(`http://localhost:7000/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    reset();
                }
            })
    };

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    {...register("email")}
                    variant="standard" />
                <button type="submit" className="codepickjs-btn">Make Admin</button>
            </form>
            {success && <div className="alert alert-success d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
                <div>
                    Made Admin successfully!
                </div> </div>}

            {/* <form onSubmit={handleSubmit}></form>
            <TextField
                level="Email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
            <button type="submit" className="codepickjs-btn">Make Admin</button> */}

        </div>


    );
};

export default MakeAdmin;