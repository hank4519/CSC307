
import Table from './Table'
import Form from './Form'; 
import axios from 'axios';
import React, {useState, useEffect} from 'react';


/*
const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
];
*/

function MyApp() {
  const [characters, setCharacters] = useState([]);

    async function fetchAll(){
      try {
         const response = await axios.get('http://localhost:5001/users');
         return response.data.users_list;     
      }
      catch (error){
         //We're not handling errors. Just logging into the console.
         console.log(error); 
         return false;         
      }
    }
    useEffect(() => {
      fetchAll().then( result => {
         if (result)
            setCharacters(result);
       });
    }, [] );
    
    async function makePostCall(person){
      console.log('make [posy call')
      try {
         const response = await axios.post('http://localhost:5001/users', person);
         return response;
      }
      catch (error) {
         console.log(error);
         return false;
      }
   }

   function updateList(person) { 
     console.log('update list') 
    makePostCall(person).then( result => {
    if (result && result.status === 200)
       setCharacters([...characters, person] );
    });
 }

  function removeOneCharacter (index) {
      const updated = characters.filter((character, i) => {
          return i !== index
      });
      setCharacters(updated);
  }
  
  return (
      <div className="container">
          <Table characterData={characters} removeCharacter={removeOneCharacter} />
          <Form handleSubmit={updateList} /> 
      </div>
    )
}


export default MyApp;