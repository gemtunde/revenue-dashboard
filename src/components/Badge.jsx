import React from 'react';
import styled from 'styled-components';
import { themeColor, darkThemeColor } from '../utils';

const Badge = ({
    content, 
    glow=false,
     paid=false, 
     late=false}) => {
  return (
    <Div
    paid={paid}
    late={late}
     glow={glow}>
        {content}
        </Div>
  )
}

export default Badge
const Div = styled.div`
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: white;
    background-color: ${themeColor};
    cursor: pointer;

    ${({glow})=> 
    glow && `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
        color:#2f233d;
        background-color:rgba(189,134,245,0.192)
    `}
    ${({paid})=> 
    paid && `
        color:#70e000;
        background-color:#70e00041
    `}
    ${({late})=> 
    late && `
        color:#ff595e;
        background-color:#ff595e41
    `}
`;