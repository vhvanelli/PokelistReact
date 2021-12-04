import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Main from './components/Main';


const App = () => {
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

  const [pageApiUrl,setPageApiUrl] = useState({next:'', back:''})

  const [pokemons, setPokemons] = useState([])
  useEffect(()=>axios.get(apiUrl,).then(response => {
      setPokemons(response.data.results)
      setPageApiUrl({next : response.data.next, back: response.data.previous })
  }),[apiUrl])
  
  const handleNext = () =>{
      if(pageApiUrl.next != null){
          setApiUrl(pageApiUrl.next)}
  }
  const handleBack = () =>{
      if(pageApiUrl.back != null){
          setApiUrl(pageApiUrl.back)}
  }
  return ( 
  <>
    <Header backPage={handleBack} nextPage={handleNext}/>
    <Main listPokemons={pokemons} backPage={handleBack} nextPage={handleNext}/>
  </>
  );
}
 
export default App;