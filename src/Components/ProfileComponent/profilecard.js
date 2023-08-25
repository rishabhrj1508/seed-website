import React from 'react';
import Fresh from './images/Fresh Perspective and Innovative Approach.png'

const ProfileCard = () => {
  return (
    <div className="profile-card" >
      <div className='image'>
        <img src={Fresh} alt='fresh-perspective' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
        Fresh Perspective and Innovative Approach
      </h2>
        <p className='card-desc'>
              As we ourselves college students we understand what is lacking and
              area of improvements, therefore we carefully designed the program
              for best results.
        </p>
      </div>
        
    </div>
  );
};

export default ProfileCard;
