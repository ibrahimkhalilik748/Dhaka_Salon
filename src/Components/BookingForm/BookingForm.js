import React from 'react';
import { useForm } from "react-hook-form";
import './BookingForm.css';


const BookingForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className="adminForm" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                <button>Book</button>
            </form>
        </div>
    );
};

export default BookingForm;