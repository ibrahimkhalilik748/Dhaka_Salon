import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const addService = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            photo: loggedInUser.photoURL,
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
                <textarea style={{ height: '150px', width: '300px', padding: '10px', marginLeft: '15px' }} {...register("review")} type="text" placeholder="Review" /><br/>


                <button className="btn btn-success  m-3">Submit</button>
            </form>
        </div>
    );
};

export default Review;