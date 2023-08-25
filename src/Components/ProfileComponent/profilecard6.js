import React from 'react';
import Apti from './images/Apti.jpg'

export const profilecard = () => {
  return (
    <div className='profile-card'>
      <div className='image'>
        <img src={Apti} alt='programming-languages' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
        Apptitude and CS subjects
      </h2>
        <p className='card-desc'>
                With our structured resources we help you to cover all major
                aptitude topics and CS subjects like Database and management
                systems, Opertating System and Computer Networks.
        </p>
      </div>
      </div>
  )
}
export default profilecard;