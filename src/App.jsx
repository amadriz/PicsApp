import { useState } from 'react'

import SearchBar from './components/SearchBar';

//Import search images
import searchImages from './api.js';
//Import image list
import ImageList from './components/ImageList';





import './App.css'

function App() {
  
  const [images, setImages] = useState([]);
  
  //Con esta funcion le mandamos parametros al componente hijo searchbar
  const handleSubmit = async(term) => {
    //console.log('Search term: ', term);
    const rs = await searchImages(term);
    console.log(rs);
    //Update state with result
    setImages(rs);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
      <ImageList images={images} />
    </>
  )
}

export default App
