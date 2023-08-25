import React from 'react';
import Dsa from './images/DSA.jpg';

export const profilecard = () => {
  return (
    <div className='profile-card'>
      <div className='image'>
        <img src={Dsa} alt='programming-languages' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
            Data Structures and Algorithms.
      </h2>
        <p className='card-desc'>
        Data Structures and algorithms are veryb important to become a
                great software developer we provide the best quality of practice
                in less quantity so that you can achieve your goal as quickly as
                possible.
        </p>
      </div>
      </div>
  )
}
export default profilecard;