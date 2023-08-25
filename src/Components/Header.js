import React from 'react';
// import SEED from '../images/SEED1.png';
import SEED from './SEED1.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className='icon'>
            <img src={SEED} alt="Logo" />
        </div>
        {/* <div className='links'>
        <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Vision</a>
          <a href="/">Contact Us</a>
        </div> */}
        <div className='register-btn'>
            <button><a href='http://localhost:3000/form'>Register Now</a></button>
            
        </div>

    </div>
  )
}
export default Header;