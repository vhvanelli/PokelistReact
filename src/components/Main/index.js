import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemon from '../Pokemon';
import { Container, PokemonsContainer,Button } from './styles';

const Main = () => {
    
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
        <Container>
            <Button onClick={handleBack}>Back</Button>
            <PokemonsContainer>
                {pokemons.map((Poke)=>{
                    const {name} = Poke
                    return <Pokemon key={`k-${name}`}>{name}</Pokemon>
                })}
            </PokemonsContainer>
            <Button onClick={handleNext}>Next</Button>
        </Container>
     );
}
    
export default Main;