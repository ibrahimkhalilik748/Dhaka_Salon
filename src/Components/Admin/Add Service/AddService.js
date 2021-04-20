import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const addService = {
            title: data.title,
            description: data.description,
            imageURL: imageURL,
            servicePrice: data.servicePrice
        };
        const url = `http://localhost:5000/addService`;


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

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="color">Add Service</h1>

            <input {...register("title")} type="text" name="title" placeholder="Please enter  title "/>

            <input {...register("servicePrice")} type="text" placeholder="Price" /> <br/>

            <input style={{ height: '100px', paddingTop: '0px' }} {...register("description")} type="text" placeholder="Description" />

            <input {...register("serviceImg")} type="file" onChange={handleImageUpload} /> <br/>


            <button className="btn btn-success mt-2">Submit</button>
        </form>






    );
};

export default AddService;