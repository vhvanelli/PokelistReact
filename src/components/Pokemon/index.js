import React from 'react';

import { PokemonStyle } from './styles';
const Pokemon = (props) => {
    return <PokemonStyle><h3>{props.children}</h3></PokemonStyle>
}
 
export default Pokemon;