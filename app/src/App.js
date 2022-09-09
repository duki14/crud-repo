
import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {


  // data setter --> my data is defined within an empty array
  const [data, setData] = useState([]);
  // querry selector(for components)
  const [q, setQ] = useState("");
  // set complete number of users
  const [usertype, setUsertype] = useState(['All']);
  // data setter for dropdown --> specify keys for searching
  const [searchParam] = useState(['Name','Surname']);


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

   
  // search logic --> indexOf(q) > -1  matches our two strings (search input with db.json data) and returns the first character(letter) that matches our input
  // if there is no search match --> we get negative one (-1)
  // Name (parameter) --> has to match our .json data objet key
  // Usertype (parameter) --> has to match our .json data objet key
  /* only searchbar functionality
  const search = (rows) =>{
    return rows.filter((row) =>{
      return row.Name.toLowerCase().indexOf(q) > -1})
    }
  */

  const search = (rows) =>{

    return rows.filter((row) =>{

      if(row.Usertype == usertype){
        return searchParam.some((newitem) =>{
          return (
            row[newitem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
          )
        })
      }
        else if(usertype == 'All'){
          return searchParam.some((newitem) =>{
          return (
            row[newitem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
          )
        })
        }
  })
};


  return (
  <div className='main-container'>
  
    <div className='border-upper'>
      <h1>Application.</h1> 
    </div>

<div className='body-container'>

    <div className='toolbar-left'>
      <h3>Home</h3>
      <Link to='/about'><h3>About</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
    </div>

    <div className='text-container'>

      <div className='inputs'>
      <p>Name</p>
      <input type='text' value={q} onChange={(e) => {return setQ(e.target.value)}}></input>
      <p>User type</p>
      <select onChange={(e) =>{return setUsertype(e.target.value)}}>
      <option>All</option>
      <option>Employee</option>
      <option>Programmer</option>
      <option>Wizard</option>
      </select>
      <button type='button'>Search</button>
      </div>
     
      <div className='table'>
        <Table data={search(data)}/>
      </div>

    </div>

    </div>

  </div>
  );
}


export default App;
