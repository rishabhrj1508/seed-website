import React from 'react';
import Form from './Components/Form';
import Admin from './Components/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
// import Feedback from './Components/Feedback';
// import AdditionalDetails from './Components/AdditionalDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Form" element={<Form />} />\
        <Route path='/Adminlogin' element ={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route exact path="/admin" component={Admin} />
        {/* <Route path="/additional-details/:id" component={AdditionalDetails}/> */}

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
