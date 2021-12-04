import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #D32B2B;
    width: 100vw;
    height: 155px;
    display: flex;
    flex-direction: column;
` 
export const Credits =  styled.div`
    background-color: #2f2f2f;
    width: 100vw;
    height: 20px;
    border-bottom: 2px solid black;
`
export const P = styled.p`
    color:#e4e4e4;
    a{
        color: #df4f;
        cursor: pointer;
    }
`
export const H1 = styled.h1`
    font-family: 'Pokemon', sans-serif;
    text-align:center;
    display: inline-block;
    color: #FFCC18;
    -webkit-text-stroke: 1px #0B5BA7;
    letter-spacing: 6px;
    font-size: 4em;
    text-shadow: -3px 2px 0 #033570, 1px 1px 0 #F4F4F4;
    @media screen and (max-width:768px){
        font-size: max(10vw, 2.4em);
    }
`
export const Button = styled.button`
    display: none;

    @media screen and (max-width:768px){
    display: flex;
    width: max(9vw,13px);
    background-color: transparent;
    border: none;
    outline: none;
    justify-content: center;
    align-items: center;
        img{
            background-color: transparent;
            width: max(9vw,13px);
            transform: rotateZ(${props => props.action == 'back'?"180deg":"0deg"});
        }
    }
`
export const ContainerButtons = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
`