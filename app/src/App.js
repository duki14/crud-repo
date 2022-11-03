
import './App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';




function App() {

  

  // data setter --> my data is defined within an empty array
  const [data, setData] = useState([]);
  // querry selector(for searching my components)
  const [q, setQ] = useState("");
  // set complete number of users
  const [usertype, setUsertype] = useState(['All']);
  // data setter for dropdown & search bar --> specify keys for searching (Data.Name && Data.Surname)
  const [searchParam] = useState(['Name']);
  // setter for adding users (add button functionality)
  const [addFormData, setAddFormData] = useState({
    ID: '',
    Name: '',
    Surname: '',
    Usertype: '',
    CreatedDay: '',
    City: '',
    Adress: ''
  });
  // setting number of entries (.json data) shown by default --> currently (5)
  const [paginate, setpaginate] = useState(5);
 




  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // add form functionality --> good piece of reusable code
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
    ID : addFormData.ID,
    Name: addFormData.Name,
    Surname: addFormData.Surname,
    Usertype: addFormData.Usertype,
    CreatedDay: addFormData.CreatedDay,
    City: addFormData.City,
    Adress: addFormData.Adress
    };

    const newData = [...data, newContact];
    
    setData(newData);

  }


  // delete handle logic --> assigned to button onClick()
  // data.ID --> key(ID) from .json database 
  const handleDelete = (contactId) => {
    
    const newContacts = [...data];

    const index = data.findIndex((contact) => { return contact.ID === contactId});

    newContacts.splice(index, 1);

    setData(newContacts); 
    
  }



  /* no search button functionality code snippet for .fetch()

  useEffect(() => {

    fetch()

  },[])  */

  // url link
  const url = 'http://localhost:3000/data';

  // linked component --> for search button functionality
  const onSearch = () => {
    
    // input url that contains .json data in our local state / or has api key
    fetch(url)
    // takes an input function = the response that comes from our server/turns http response data into .json data
    .then((response) =>  response.json())
    // return our previous function input .json data and gives it to our app components
    .then((json) => setData(json))
    
    };




  // table components --> posting all my .json data
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
  // Name (parameter) --> has to match our .json data object key
  // Usertype (parameter) --> has to match our .json data object key
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


// pagination button logic --> set to load additional (3) entries
const loadMore = () => {
  setpaginate((previousValue) => previousValue + 3);
};



  return (
  <div className='main-container'>
  
    <div className='border-upper'>
      <h1>Application.</h1> 
    </div>

<div className='body-container'>

    <div className='toolbar-left'>
      <h3>Home</h3>
      <Link to='/about' style={{ textDecoration: 'none' }} ><h3>About</h3></Link>
      <Link to='/contact' style={{ textDecoration: 'none' }} ><h3>Contact</h3></Link>
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
      <button type='button' className='button-search'  value={q} onClick={(e) => {return onSearch(e.target.value)}}>Search</button>
      </div>
     
      <div className='table'>
        <Table data={search(data).slice(0,paginate)} handleDelete={handleDelete}/>
      </div>

      <div className='add'>
      <form onSubmit={handleAddFormSubmit}>
        <input type='text' name='ID' required='required' placeholder='enter Id' onChange={handleAddFormChange}></input>
        <input type='text' name='Name' required='required' placeholder='enter Name' onChange={handleAddFormChange}></input>
        <input type='text' name='Surname' required='required' placeholder='enter Surname'  onChange={handleAddFormChange}></input>
        <input type='text' name='Usertype' required='required' placeholder='enter Usertype' onChange={handleAddFormChange}></input>
        <input type='text' name='CreatedDay' required='required' placeholder='enter Created Day' onChange={handleAddFormChange}></input>
        <input type='text' name='City' required='required' placeholder='enter City' onChange={handleAddFormChange}></input>
        <input type='text' name='Adress' required='required' placeholder='enter Adress' onChange={handleAddFormChange}></input>
        <button type='submit' className='button-crud'>Add</button>
        <button type='button' className='button-crud' onClick={() => {return handleDelete(data.ID)}}>Delete</button>
      </form>
      </div>
      
      <button className='button-crud' onClick={loadMore}>Load More</button>

    </div>

    </div>

  </div>
  );
}


export default App;
