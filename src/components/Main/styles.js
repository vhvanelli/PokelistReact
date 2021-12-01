import styled from "styled-components";

import bg from './background.png'

export const Container = styled.main`
    display:flex;
    justify-content: space-evenly;
    width: 100vw;
    height: calc(100vh - 155px);
    background: url(${bg});

    background-color: #222;
    `
export const PokemonsContainer = styled.div`
    background: rgba(0,0,0,0.7);
    width:max(50vw,400px);
    backdrop-filter: blur(6px);
    padding: 15px 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.7);
    overflow-y: scroll;
`
export const Button = styled.button`
    width: 190px;
    height: 80px;
    border-radius: 12px;
    background-color: #033570;
    color: #FFCC18;
    -webkit-text-stroke: 1px #0B5BA7;
    text-shadow: -3px 2px 0 #033570, 1px 1px 0 #F4F4F4;
    outline: none;
    border: 5px solid #1D1A1A;
    font-size: 40px;
    letter-spacing: 6px;
    align-self: center;
`