import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const addService = {
            name: data.name,
            email: data.email,
            imageURL: imageURL,
        };
        const url = `http://localhost:5000/addAdmin`;


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

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4a163627099e61dacc4c10b56f1c0c29');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="color">Add Admin</h1>

            <input {...register("name")} type="text" placeholder="Name"/>

            <input {...register("email")} type="email" placeholder="Email" /> <br/>

            <input {...register("image")} type="file" onChange={handleImageUpload} /> <br/>


            <button className="btn btn-success mt-2">Submit</button>
        </form>
        </div>
    );
};

export default MakeAdmin;