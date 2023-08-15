import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './GetStarted.css'
const BACKEND_URL = 'https://backend.gametechwa.com';
const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

function validateAddress(address) {
    return address.trim() !== '';
}

function Popup({ message, isSuccess, closePopup, isVisible }) {
    return (
        <div className={`get-started-popup ${isVisible ? 'active' : ''} ${isSuccess ? 'success' : 'error'}`}>
            <div className='get-started-popup-box'>
                <div className='get-started-popup-icon-container'>
                    <Icon className='get-started-popup-icon' icon={isSuccess ? "carbon:checkmark" : "bx:error"} color="white" width="70" />
                </div>
                <span className='get-started-popup-text'>{message}</span>
                <button className='get-started-popup-button' onClick={closePopup}>CLOSE</button>
            </div>
        </div>
    );
}

function GetStarted() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validations = [
            { check: !formData.name, message: 'Please fill out the name' },
            { check: !validateAddress(formData.address), message: 'Please enter a valid address' },
            { check: !PHONE_REGEX.test(formData.phoneNumber), message: 'Please enter a valid phone number' },
            { check: !EMAIL_REGEX.test(formData.email), message: 'Please enter a valid email' }
        ];

        for (const validation of validations) {
            if (validation.check) {
                setPopupMessage(validation.message);
                setShowPopup(true);
                return;
            }
        }

        try {
            let response = await fetch(`${BACKEND_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formData)
            });

            let result = await response.text();

            if (response.ok) {
                setPopupMessage('Success! We will be in touch shortly.');
                setIsSuccess(true);
            } else {
                setPopupMessage(`Error: ${result}`);
                setIsSuccess(false);
            }
            setShowPopup(true);
        } catch (error) {
            console.log('Error:', error);
            setPopupMessage(`Error: ${error}`);
            setIsSuccess(false);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        
        setTimeout(() => {
            setIsSuccess(false);
        }, 500);
    };

    const formFields = [
        [
            { id: 'name', label: 'Full Name', type: 'text', name: 'name', value: formData.name },
            { id: 'address', label: 'Address', type: 'text', name: 'address', value: formData.address }
        ],
        [
            { id: 'phoneNumber', label: 'Phone Number', type: 'text', name: 'phoneNumber', value: formData.phoneNumber },
            { id: 'email', label: 'Email', type: 'email', name: 'email', value: formData.email }
        ]
    ];


    return (
        <div className='get-started-container'>
            <Popup message={popupMessage} isSuccess={isSuccess} closePopup={closePopup} isVisible={showPopup} />
            
            <div className='get-started-text'>
                <h1>Steps to Becoming a Client</h1>
                <p>1) Fill out the form below </p>
                <p>2) Look for an email with next steps (We usually get back within one business day)</p>
                <p>3) Email or call for any questions you may have</p>
            </div>

            <form className='get-started-form' id='getStartedForm' onSubmit={handleSubmit}>
                {formFields.map((row, rowIndex) => (
                    <div className='get-started-form-row' key={rowIndex}>
                        {row.map(field => (
                            <div className='get-started-form-row-item' key={field.id}>
                                <label htmlFor={field.id}>{field.label}</label>
                                <input type={field.type} id={field.id} name={field.name} value={field.value} onChange={handleInputChange} />
                            </div>
                        ))}
                    </div>
                ))}
                <div className='get-started-form-submit'>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default GetStarted;