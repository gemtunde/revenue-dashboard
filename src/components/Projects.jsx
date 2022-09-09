import React from 'react';
import styled from 'styled-components';
import { themeColor, hoverEffect, cardShadow  } from '../utils';
//import {IoStatsChart} from 'react-icons/io5';
//import Badge from './Badge';
import AvatarImage from '../assets/passport.jpg'


const Projects = () => {
  return (
    <MainProject>
        <Project>
            <Avatar>
                <img 
                    src={AvatarImage}
                    alt='image'
                    />
            </Avatar>
            <Detail>
                <Title>Software development for FG</Title>
                <SubTitle>70 days delivery</SubTitle>
            </Detail>
        </Project>
        <Project>
            <Avatar>
                <img 
                    src={AvatarImage}
                    alt='image'
                    />
            </Avatar>
            <Detail>
                <Title>Data Analysing for Samsung Mobile</Title>
                <SubTitle>20 days delivery timeline</SubTitle>
            </Detail>
        </Project>
        <AllProject>See all projects</AllProject>
    </MainProject>
  )
}

export default Projects;

const MainProject = styled.div`
 height: 70%;
 background-color: white;
 padding: 1rem;
 margin: 0;
 border-radius: 1rem;
 box-shadow: ${cardShadow};
 transition: 0.4s ease-in-out;
&:hover{
    box-shadow: ${hoverEffect};
}

`;
const Project = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
img{
    height: 4rem;
    width: 4rem;
    border-radius:4rem;
}
`;
const Detail = styled.div`
margin-left: 1rem;
`;
const Title = styled.h3`
font-weight: 500;
font-size: 1rem;
`;
const SubTitle = styled.h5`
font-weight: 300;
`;
const AllProject = styled.h5`
text-align: end;
color: ${themeColor};
cursor: pointer;
`;