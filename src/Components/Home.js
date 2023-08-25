import React from 'react'
import Header from './Header';
import Middle from './Middle';
import Homethree from './HomeMiddle'
import Bottom1  from './Bottom1';
import Bottom2  from './Bottom2';
import Footer from './Footer';
import './App.css';
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='middle-element'>
      <Homethree/>
      </div>
      <Middle/>
      <Bottom1/>
      <Bottom2/>
      <Footer/>
    </div>
  )
}
export default Home;