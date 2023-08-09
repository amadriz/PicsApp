import { useState } from 'react';


const SearchBar = ({ onSubmit }) => {

  const [term, setTerm] = useState('');
  
  //Esta funcion es para comunicase con el parent app.js
  //Se dispara si se da enter
  const handleFormSubmit = (event) => {
    //Disable the default behavior of the form
    event.preventDefault();
    //console.log('I need to tell the parent about some data');
    onSubmit(term);
  };

  //Esta funcion se dispara si se escribe en el input
  const handleChange = (event) => {
    //Cada vez que el usuario escriba algo en el input almacena en setTerm > term
    setTerm(event.target.value);
    //console.log(term);
  };
  
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={term} onChange={handleChange} />
    </form>
    
    
    
    </>
  )
}

export default SearchBar