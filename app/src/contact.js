import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Contact() {


    return (
  <div className='main-container'>
  
    <div className='border-upper-contact'>
      <h1>Mail us.</h1> 
    </div>

<div className='body-container-contact'>

    <div className='toolbar-left-contact'>
      <Link to='/app' style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
      <Link to='/about' style={{ textDecoration: 'none' }}><h3>About</h3></Link>
      <h3>Contact</h3>
    </div>

    <div className='text-container-contact'>

  

    </div>

    </div>

  </div>
  );
}

export default Contact;