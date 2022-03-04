import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const AddReview = () => {
    const [defaultValue, setDefaultValue] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        fetch('http://localhost:7000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('reviews added')
                    reset()
                }

            })
    };

    useEffect(() => {
        setDefaultValue({ name: user.displayName, email: user.email, photo: user.photoURL })
    }, []);
    useEffect(() => {
        reset(defaultValue)
    }, [defaultValue]);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="review">Write Review :</label>
                <textarea id='rewiews' rows={5} {...register("reviews")} type='text' />
                <label htmlFor="rating">Give Rating : </label>
                <select id='rating' {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="text-center">
                    <button type="submit" className='codepickjs-btn w-50 mt-3' >Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;