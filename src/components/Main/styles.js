import styled from "styled-components";

import bg from './background.png'

export const Container = styled.main`
    display:flex;
    justify-content: space-evenly;
    width: 100vw;
    height: calc(100vh - 155px);
    background: url(${bg});
    position: relative;
    background-color: #222;
    `
export const PokemonsContainer = styled.div`
    background: rgba(0,0,0,0.7);
    width:max(50vw,400px);
    backdrop-filter: blur(6px);
    padding: 15px 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.7);
    overflow-y: scroll;
    @media screen and (max-width:768px){
        width: 80vw;
    }
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #333;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #D32B2B;
        border-radius: 3px;
    }

`
export const Button = styled.button`
    width: 190px;
    height: 80px;
    font-family: 'Pokemon', sans-serif;
    cursor: pointer;
    border-radius: 12px;
    background-color: #D32B2B;
    color: #FFCC18;
    -webkit-text-stroke: 1px #0B5BA7;
    text-shadow: -3px 2px 0 #033570, 1px 1px 0 #F4F4F4;
    outline: none;
    border: none;
    font-size: 40px;
    letter-spacing: 6px;
    align-self: center;
    border: 2px solid #222;
    @media screen and (max-width:768px){
        display: none;
    }
    :hover{
        border: 3px solid #111;
    }
    :active{
        background-color: #fa5454;
    }
`