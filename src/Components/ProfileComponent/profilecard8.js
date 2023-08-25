import React from 'react';
// import Interview from 'src\images\interview.jpg'
import Interview from './images/interview.jpg'


export const profilecard = () => {
  return (
    <div className='profile-card'>
      <div className='image'>
        <img src={Interview} alt='programming-languages' className='picture' />
      </div>
      <div className='text'>
      <h2 className='card-title'>
            Placement and Interview support.
      </h2>
        <p className='card-desc'>
            We keep students updated with latest off campus opportunities
            for jobs and intenrships through our social media and a support
            on how to crack the interview.
        </p>
      </div>
      </div>
  )
}
export default profilecard;