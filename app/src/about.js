import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';






function About() {
//<img src={require('../src/react.gif')}></img>

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
      <h2 className='about-header'>+ Functional data - table</h2>
      <p className='about-text'>made in React ver. 18.2.0</p>
      
      
      
     
      


  

    </div>

    </div>

  </div>
  );
}

export default About;