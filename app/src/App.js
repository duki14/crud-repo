
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  // data setter --> my data is defined within an empty array
  const [data, setData] = useState([]);
  // querry selector(for components)
  const [q, setQ] = useState([]);

  // useEffect --> fire up my api data func (done when changes occur)
  useEffect(() =>{
    // input url that contains .json data in our local state / or has api key
    fetch('http://localhost:3000/data')
    // takes an input function = the response that comes from our server/turns http response data into .json data
    .then(response => {return response.json()})
    // return our previous function input .json data and gives it to our app components
    .then((json) => {return setData(json)})
  },[]);

  // table component
  function Table({data}){

    const columns = data[0] && Object.keys(data[0]);

    return(
      <>
      <table cellPadding={4} cellSpacing={4}>
         <thead>
            <tr>{data[0] && columns.map((heading) =>{
              return <th>{heading}</th>
            })}</tr>
         </thead>
         <tbody>
          {data.map((row) =>{
            return <tr>{columns.map((column1) =>{return <td>{row[column1]}</td>})}</tr>
          })}
         </tbody>
      </table>
      </>
    )
    
  }



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

      <div className='table'>
        <Table data={data}/>
      </div>

    </div>

    </div>

  </div>
  );
}

export default App;
