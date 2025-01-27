import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../ContextApi/AppContext';
import '../../styles/Form/index.scss'
import { RxCross2 } from "react-icons/rx";


const Form = ({visible, showModal,setShowModal}) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        address: '',
        treatment: '',
        patient: '',
    });

    const [errors, setErrors] = useState({});

    const { data } = useContext(AppContext)

    const validateField = (id, value) => {
        switch (id) {
            case 'name':
                return value.trim() === '' ? 'Name is required' : '';
            case 'number':
                return !/^\d{10}$/.test(value) ? 'Enter a valid 10-digit number' : '';
            case 'address':
                return value.trim() === '' ? 'Address is required' : '';
            case 'treatment':
                return value === '' ? 'Please select a treatment type' : '';
            case 'patient':
                return value === '' ? 'Please select a patient type' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'number') {
            // Allow only numbers
            const numericValue = value.replace(/\D/g, ''); // Remove all non-digit characters
            setFormData((prevState) => ({
                ...prevState,
                [id]: numericValue,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }

        // Optionally handle errors (e.g., max length)
        setErrors((prevState) => ({
            ...prevState,
            [id]: validateField(id, value),
        }));
    };


    const formSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            postData()
            // Submit form logic here
        }
    };



    console.log(data);

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/contact", formData)
            if (response) {
                setFormData({
                    name: '',
                    number: '',
                    address: '',
                    treatment: '',
                    patient: ''
                })
            }
        }
        catch (error) {
            console.error('Error sending POST request:', error.message);
        }
    }
    
    return (

        <form className={`c-form ${showModal === true ? 'show' : 'hide'}`}  onSubmit={formSubmit}>
            <h2 className='c-form__heading'>Details</h2>

           {visible && (<div className='c-form__close' onClick={() => setShowModal(false)}>
                <RxCross2 />
            </div>) }

            <div className='c-form__inputWrap'>
                <input
                    className='c-form__input'
                    placeholder='Name'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type='text'
                    aria-invalid={!!errors.name}
                />
                {errors.name && <p className='c-form__error'>{errors.name}</p>}
            </div>
            <div className='c-form__inputWrap'>
                <input
                    className='c-form__input'
                    type='text' // Keep as text to allow custom validation and non-breaking behavior
                    placeholder='Phone Number'
                    id='number'
                    name='number'
                    maxLength={10}
                    value={formData.number}
                    onChange={handleChange}
                    aria-invalid={!!errors.number}
                />
                {errors.number && <p className='c-form__error'>{errors.number}</p>}
            </div>
            <div className='c-form__inputWrap -textarea'>
                <textarea
                    className='c-form__textarea'
                    placeholder='Address'
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    aria-invalid={!!errors.address}
                />
                {errors.address && (
                    <p className='c-form__error'>{errors.address}</p>
                )}
            </div>
            <div className='c-form__inputWrap'>
                <select
                    className='c-form__select'
                    name='treatment'
                    id='treatment'
                    value={formData.treatment}
                    onChange={handleChange}
                    aria-invalid={!!errors.treatment}
                >
                    <option disabled value=''>
                        Select
                    </option>
                    <option value='Hand'>Hand</option>
                    <option value='Leg'>Leg</option>
                    <option value='Face / Eye / Nose / Ear'>
                        Face / Eye / Nose / Ear
                    </option>
                    <option value='Other'>Other</option>
                </select>
                {errors.treatment && (
                    <p className='c-form__error'>{errors.treatment}</p>
                )}
            </div>

            {visible && (<div className='c-form__inputWrap'>
                <select
                    className='c-form__select'
                    name='patient'
                    id='patient'
                    value={formData.patient}
                    onChange={handleChange}
                    aria-invalid={!!errors.patient}
                >
                    <option disabled value=''>
                        Select
                    </option>
                    <option value='ECHS'>ECHS</option>
                    <option value='CGHS'>CGHS</option>
                </select>
                {errors.treatment && (
                    <p className='c-form__error'>{errors.treatment}</p>
                )}
            </div>)}
            <button type='submit' className='c-form__btn'>
                Book now
            </button>
        </form>
    )
}

export default Form
