import React, { useState } from 'react';
import '../../../styles/_main.scss';
import '../../../styles/Home/Nav/index.scss';
import Logo from '../../../assets/logo.png';
import RightArrow from '../../../assets/icon_rightArrow.svg';
import axios from 'axios'

const Nav = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    treatment: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (id, value) => {
    switch (id) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'number':
        return !/^\d{10}$/.test(value) ? 'Enter a valid 10-digit number' : '';
      case 'address':
        return value.trim() === '' ? 'Address is required' : '';
      case 'treatment':
        return value === '' ? 'Please select a treatment' : '';
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

  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData)
      if (response) {
        setFormData({
          name: '',
          number: '',
          address: '',
          treatment: '',
        })
    }
    }
    catch (error) {
    console.error('Error sending POST request:', error.message);
  }
}

return (
  <div className='navbar-hero'>
    {/* Navbar */}
    <span className='black-layer'></span>
    <nav className='navbar'>
      <div className='navbar__left'>
        <img className='navbar__left-logo' src={Logo} alt='Logo' />
      </div>
      <ul className='navbar__mid'>
        <li className='navbar__mid-list'>
          <a className='navbar__mid-list-links' href='#'>
            Home
          </a>
          <a className='navbar__mid-list-links' href='#'>
            About us
          </a>
          <a className='navbar__mid-list-links' href='#'>
            Services
          </a>
          <a className='navbar__mid-list-links' href='#'>
            Pages
          </a>
          <a className='navbar__mid-list-links' href='#'>
            Blog
          </a>
        </li>
      </ul>
      <a href='#' className='c-btn arrow-anim animHover'>
        <span className='c-btn_text'>Contact us</span>
        <img
          className='c-btn_icon'
          width={18}
          height={18}
          src={RightArrow}
          alt='right-arrow'
        />
      </a>
    </nav>

    {/* Hero Section */}
    <section className='hero'>
      <div className='hero__desc'>
        <h1 className='hero__desc-heading'>
          Providing an Exceptional Patient Experience
        </h1>
        <p className='hero__desc-subheading'>
          Welcome, where exceptional patient experiences are our priority.
          With compassionate care, state-of-the-art facilities, and a
          patient-centered approach, we're dedicated to your well-being. Trust
          us with your health and experience the difference.
        </p>
        <a href='#' className='c-btn hero__desc-btn arrow-anim animHover'>
          <span className='c-btn_text'>Services</span>
          <img
            className='c-btn_icon'
            width={18}
            height={18}
            src={RightArrow}
            alt='right-arrow'
          />
        </a>
      </div>

      {/* Form */}
      <form className='c-form' onSubmit={formSubmit}>
        <h2 className='c-form__heading'>Details</h2>

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
        <button type='submit' className='c-form__btn'>
          Book now
        </button>
      </form>
    </section>
  </div>
);
};

export default Nav;
