import React from 'react';
import zero from './images/zero-cost-sign-or-stamp-vector-28052060.jpg'

const profilecard = () => {
  return (
    <div className="profile-card" >
      <div className='image'>
        <img src={zero} alt='zero-cost' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
            Zero cost
      </h2>
        <p className='card-desc'>
              Price is the biggest turn down for anyone but we at SEED have no
              charges whatsover, it's all free.
        </p>
      </div>
        
    </div>
  );
};

export default profilecard;
