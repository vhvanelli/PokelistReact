import React from 'react';

import Pokemon from '../Pokemon';
import { Container, PokemonsContainer,Button } from './styles';

const Main = (props) => {

    const pokemons = props.listPokemons

    return ( 
        <Container>
            <Button onClick={props.backPage}>Back</Button>
            <PokemonsContainer>
                {pokemons.map((Poke)=>{
                    const {name} = Poke
                    return <Pokemon key={`k-${name}`}>{name}</Pokemon>
                })}
            </PokemonsContainer>
            <Button onClick={props.nextPage}>Next</Button>
        </Container>
     );
}
    
export default Main;