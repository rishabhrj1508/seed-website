import React from 'react';
import PAF from './images/PAF.png'

const profilecard = () => {
  return (
    <div className="profile-card" >
      <div className='image'>
        <img src={PAF} alt='Personalized' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
          Personalized Attention and Focus
      </h2>
        <p className='card-desc'>
            We understand that all humans are not same therefore we have a
            very active social groups with personalized attention and fastest
            support in the time of any difficulty.
        </p>
      </div>
        
    </div>
  );
};

export default profilecard;
