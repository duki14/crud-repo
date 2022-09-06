
import './App.css';
import { useState } from 'react';

function App() {


  return (
  <div className='main-container'>
  
    <div className='border-upper'>
      <h1>Application</h1> 
    </div>

<div className='body-container'>

    <div className='toolbar-left'>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contact</h3>
    </div>

    <div className='text-container'>

      <div className='inputs'>
      <p>Name</p>
      <input type='text'></input>
      <p>User type</p>
      <select>
      <option >Employee</option>
      <option >Programmer</option>
      <option >Wizard</option>
      </select>
      <button type='button'>Search</button>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>User type</th>
          <th>Created date</th>
          <th>City</th>
          <th>Adress</th>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

    </div>

    </div>

  </div>
  );
}

export default App;
