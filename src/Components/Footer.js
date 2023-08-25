import React from 'react'

import Icon from './favicon-32x32.png'
import '@fortawesome/fontawesome-free/css/all.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='logof'>
            <img src={Icon} alt="icon" />
        </div>
        <div className='icons'>
            <a href='https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Ffind-friends%2F'><i class="fa fa-brands fa-square-facebook fa-xl"></i></a>
            <a href='https://twitter.com/SeedSocial_Seed'><i class="fa-brands fa-twitter fa-xl"></i></a>
            <a href='https://www.linkedin.com/company/seednurture/'><i class="fa-brands fa-linkedin fa-xl"></i></a>
            <a href='https://www.instagram.com/seedsocial.seed/'><i class="fa-brands fa-instagram fa-xl"></i></a>
        </div>
        <div className='link'>
            
            <a href="https://discord.gg/Zyveczt5bq">Discord</a>
            <a href="https://t.me/seednurtutingfuture">Telegram</a>
        </div>
        <div className='link'>
            <a href="mailto:contactusatseed@gmail.com">Email Us</a>
            <a href="#home">Back to Top</a>
        </div>
        <div className='register-btn'>
            <button><a href='http://localhost:3000/form'>Register Now</a></button>
            
        </div>
    </div>
  )
}
export default Footer;