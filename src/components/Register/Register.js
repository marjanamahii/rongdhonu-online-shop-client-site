// import React from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//     return (
//         <div className="login-form">
//             <div>
//                 <h2>Register: Create Account</h2>
//                 <form onSubmit="">
//                     <input type="email" name="" id="" placeholder="Your Email" />
//                     <br />
//                     <input type="password" name="" id="" placeholder="Your Password" />
//                     <br />
//                     <input type="password" name="" id="" placeholder="Re-enter Password" />
//                     <br />
//                     <input type="submit" value="Submit" />
//                 </form>
//                 <p>Already have an account? <Link to="/login">Login</Link></p>
//                 <div>----------or-------------</div>
//                 <button className="btn-regular">Google Sign In</button>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();

    const { handleUserRegister } = useAuth();

    const onSubmit = (data) => {
        // handleUserRegister(data.email, data.password);
        console.log(data);
        handleUserRegister(data.email, data.password);
        alert('User registration successful!')
        reset();
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb-3">Registration Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input
                                className="input-field form-control"
                                name="email"
                                placeholder="Email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                className="input-field form-control"
                                name="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                        </div>


                        <input
                            className="submit-btn btn btn-danger mt-3"
                            type="submit"
                            value="Register"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;