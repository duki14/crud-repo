import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Contact() {


    return (
  <div className='main-container'>
  
    <div className='border-upper-contact'>
      <h1>Mail me.</h1> 
    </div>

<div className='body-container-contact'>

    <div className='toolbar-left-contact'>
      <Link to='/' style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
      <Link to='/about' style={{ textDecoration: 'none' }}><h3>About</h3></Link>
      <h3>Contact</h3>
    </div>

    <div className='text-container-contact'>
      <img src={require('../src/mail2.gif')} className='contact-image' alt='mail-gif'></img>
      <h2 className='contact-header'>+ Email</h2>
      <p className='contact-text'>damjan.jelisavcic14@gmail.com</p>

  

    </div>

    </div>

  </div>
  );
}

export default Contact;