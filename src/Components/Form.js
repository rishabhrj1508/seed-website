import React, { useState, useRef } from 'react';
import { db } from './firebase-config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';



const Form = () => {
  const form = useRef();
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [year, setYear] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [numLanguages, setNumLanguages] = useState(0);
  const [languages, setLanguages] = useState([]);

  const userCollectionRef = collection(db, 'users');
  const navigate = useNavigate();

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      Name: name,
      Year: year,
      Email: email,
      Enrollment: enrollment,
      Language: languages,
      Phone: phone,
    });
  };

  const checkEmailExists = async (email) => {
    const emailQuery = query(userCollectionRef, where('Email', '==', email));
    const querySnapshot = await getDocs(emailQuery);
    return !querySnapshot.empty;
  };

  const handleNumLanguagesChange = (e) => {
    const count = parseInt(e.target.value);
    setNumLanguages(count);
    setLanguages(Array(count).fill(''));
  };

  const handleLanguageChange = (e, index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = e.target.value;
    setLanguages(updatedLanguages);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEnrollment = (enrollment) => {
    const enrollmentRegex = /^\d{8}$/;
    return enrollmentRegex.test(enrollment);
  };

  const validateYear = (year) => {
    const yearNum = parseInt(year);
    return yearNum >= 0 && yearNum <= 4;
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    

    emailjs.sendForm('service_lzdisy8', 'template_ve0xuyk', form.current, 'ecf616B2hIuFFut9u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });



    // Perform validation checks
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (!validateName(name)) {
      alert('Please enter a valid name (only alphabets and spaces allowed).');
      return;
    }

    if (enrollment.trim() === '') {
      alert('Please enter your enrollment number.');
      return;
    }

    if (!validateEnrollment(enrollment)) {
      alert('Please enter a valid 8-digit enrollment number.');
      return;
    }

    if (year.trim() === '') {
      alert('Please enter your year.');
      return;
    }

    if (!validateYear(year)) {
      alert('Please enter a valid year (0-4).');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (phone.trim() === '') {
      alert('Please enter your phone number.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (numLanguages <= 0) {
      alert('Please enter a valid number of languages.');
      return;
    }

    // Check if the email already exists
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      alert('Email already exists. Please enter a different email.');
      return;
    }

    // If all validations pass and the email is not found, proceed with creating the user
    createUser();
    alert('You are successfully registered!');
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      
      <form ref={form}  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="from_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="to_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="enrollment">Enrollment Number:</label>
          <input
            type="number"
            id="enrollment"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numLanguages">Number of Languages:</label>
          <input
            type="number"
            id="numLanguages"
            value={numLanguages}
            onChange={handleNumLanguagesChange}
            min="0"
            required
          />
        </div>

        {languages.map((language, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`language${index}`}>Language {index + 1}:</label>
            <input
              type="text"
              id={`language${index}`}
              value={language}
              onChange={(e) => handleLanguageChange(e, index)}
            />
          </div>
        ))}

        <button className="button">
        <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  );
};

export default Form;
