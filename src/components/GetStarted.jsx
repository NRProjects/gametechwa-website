import React, { useState } from 'react';
import './GetStarted.css'

function GetStarted() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
    };


    return (
        <div className='get-started-container'>
            <div className='get-started-text'>
                <h1>Steps to Becoming a Client</h1>
                <p>1) Fill out the form below </p>
                <p>2) Look for an email with next steps (We usually get back within one business day)</p>
                <p>3) Email or call for any questions you may have</p>
            </div>

            <form className='get-started-form' id='getStartedForm' onSubmit={handleSubmit} action='/submit' method='post'>
                <div className='get-started-form-row'>
                    <div className='get-started-form-row-item'>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange}/>
                    </div>

                    <div className='get-started-form-row-item'>
                        <label htmlFor='address'>Address</label>
                        <input type='text' id='address' name='address' value={formData.address} onChange={handleInputChange}/>
                    </div>
                </div>


                <div className='get-started-form-row'>
                    <div className='get-started-form-row-item'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input type='text' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange}/>
                    </div>

                    <div className='get-started-form-row-item'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email' value={formData.email} onChange={handleInputChange}/>
                    </div>
                </div>

                <div className='get-started-form-submit'>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default GetStarted;