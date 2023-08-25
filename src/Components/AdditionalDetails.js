import React, { useState, useEffect } from 'react';
import jsonData from './data.json';
import { useParams, useNavigate } from 'react-router-dom';

const AdditionalDetails = () => {
  const { enrollmentNo } = useParams();
  const user = jsonData.find((user) => user.Enrollment === enrollmentNo);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('No additional details available for this user');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleGoBack = () => {
    navigate('/admin');
  };

  const handleDisplayAdditionalDetails = () => {
    if (user.additionalDetails) {
      alert(user.additionalDetails);
    } else {
      setError('No additional details found for this user');
    }
  };

  return (
    <div>
      <h2>Additional Details</h2>
      <p>Name: {user.Name}</p>
      <p>Email: {user.Email}</p>
      <p>
        Languages:{' '}
        {user.Language.map((lang) => (
          <span className="language-tag" key={lang}>
            {lang} ,{' '}
          </span>
        ))}
      </p>
      <p>Enrollment No: {user.Enrollment}</p>
      <p>Year: {user.Year}</p>
      <p>Phone No: {user.Phone}</p>
      {error && <p className="error">{error}</p>}
      <button className="additional-details-button" onClick={handleDisplayAdditionalDetails}>
        Additional Details
      </button>
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default AdditionalDetails;
