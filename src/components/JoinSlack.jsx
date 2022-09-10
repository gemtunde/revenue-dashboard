import React from 'react'
import { FaSlack } from 'react-icons/fa';
import styled from 'styled-components';
import { darkThemeColor, hoverEffect, themeColor } from '../utils';


const JoinSlack = () => {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHead>Engage with clients</SlackHead>
            <SlackFoot>Join slack channel</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Join now</SlackJoin>
      </CardContent>
    </JoinChannel>
  )
}

export default JoinSlack;
const JoinChannel = styled.div`
background-color: ${darkThemeColor};
height: 50%;
margin-top: 7.5rem;
border-radius: 1rem;
display: flex;
align-items: center;
transition: 0.4s ease-in-out;
&:hover{
  box-shadow: ${hoverEffect};
}
`;
const CardContent = styled.div`
margin: 1rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Slack = styled.div`
display: flex;
`;
const SlackLogo = styled.div`
margin-right: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
svg{
  color:white;
  height: 3rem;
  width: 3rem;
}`;
const SlackJoin = styled.button`
background-color:${themeColor};
border: none;
outline: none;
padding: 1rem 2rem;
color: white;
border-radius: 0.5rem;
font-size: 1.2rem;
font-weight: bold;
cursor: pointer;

`;
const SlackText = styled.h2`
color: white;
`;
const SlackHead = styled.h5`
font-weight: 500;
`;
const SlackFoot = styled.h5`
font-weight: normal;
color: #e4e4e4;
`;