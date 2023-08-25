import React from 'react';

import tran from './images/transparency.jpg'

const profilecard = () => {
  return (
    <div className="profile-card" >
      <div className='image'>
        <img src={tran} alt='transparency' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
        Proactive Communication and Transparency
      </h2>
        <p className='card-desc'>
              We don’t do delay. Drop your query anytime we respond in one
              business day furthermore we have 100 percent transparency in the
              program.
        </p>
      </div>
        
    </div>
  );
};

export default profilecard;
