import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const addService = {
            name: data.name,
            email: data.email,
            review: data.review,
        };
        const url = `https://stormy-savannah-45858.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => console.log('server side response', res))
        console.log(data)
    };
    return (
        <div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="color text-start">Review</h1>

                <input {...register("name")} type="text" placeholder="Name" />

                <input {...register("email")} type="email" placeholder="Email" /> <br />

                <input style={{ height: '100px', paddingTop: '0px' }} {...register("review")} type="text" placeholder="Review" /> <br/>


                <button className="btn btn-success mt-2">Submit</button>
            </form>
        </div>
    );
};

export default Review;