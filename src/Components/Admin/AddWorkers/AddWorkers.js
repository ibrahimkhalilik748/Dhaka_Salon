import React, { useState } from 'react';
import './AddWorkers.css'

const AddWorkers = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFiles = e.target.files[0];
        setFile(newFiles);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/AddWorkers', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="adminForm">
            <div class="form-group">
                    <label for="exampleInputName"><h6>Name</h6></label>
                    <input onBlur={handleBlur} type="text" name="name" class="form-control" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"><h6>Email address</h6></label>
                    <input onBlur={handleBlur} type="email" name="email" class="form-control" placeholder="Enter email" />
                </div>
               <br/>
                <div >
                    <input onChange={handleFileChange} type="file"/>
                </div><br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddWorkers;