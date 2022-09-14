import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';




function About() {


    return (
  <div className='main-container'>
  
    <div className='border-upper-about'>
      <h1>The app.</h1> 
    </div>

<div className='body-container-about'>

    <div className='toolbar-left-about'>
      <Link to='/app'style={{ textDecoration: 'none' }} ><h3>Home</h3></Link>
      <h3>About</h3>
      <Link to='/contact'style={{ textDecoration: 'none' }} ><h3>Contact</h3></Link>
    </div>

    <div className='text-container-about'>
      <h1 className='about-header'>React</h1>
      <p className='about-text'>ver. 18.2.0</p>
     
      


  

    </div>

    </div>

  </div>
  );
}

export default About;