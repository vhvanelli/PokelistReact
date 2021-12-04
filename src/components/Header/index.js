import React from 'react';

import { HeaderStyle, H1, P, Credits, Button, ContainerButtons } from './styles';
import ArrowSvg from './arrow.svg'


const Header = (props) => {
    return ( 
        <HeaderStyle>
            <Credits>
            <P>Desenvolvido por <a href='https://www.linkedin.com/in/vhvanelli/' target='_blank' rel="noreferrer">Victor Hugo Faria</a></P>
            </Credits>
            <ContainerButtons>
                <Button onClick={props.backPage} action={"back"}>
                    <img src={ArrowSvg} alt="seta" />
                </Button>
                <H1>Pokelist</H1>
                <Button onClick={props.nextPage} action={"next"}>
                    <img src={ArrowSvg} alt="seta" />
                </Button>
            </ContainerButtons>
        </HeaderStyle>
     );
}
 
export default Header;