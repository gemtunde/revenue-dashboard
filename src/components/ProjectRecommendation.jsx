import React from 'react';
import styled from 'styled-components';
import { themeColor, hoverEffect, cardShadow  } from '../utils';
//import {IoStatsChart} from 'react-icons/io5';
import Badge from './Badge';
import AvatarImage from '../assets/passport.jpg'

const ProjectRecommendation = () => {
  return (
    <RecommendProject>
        <CardContent>
            <Detail>
                <InfoContainer>
                    <Avatar>
                        <img 
                            src={AvatarImage}
                            alt='recommend'
                        />
                    </Avatar>
                    <Info>
                        <InfoName>Graham Potter</InfoName>
                        <InfoUpdate>Updated 23min ago </InfoUpdate>
                    </Info>
                </InfoContainer>
                <Badge content='Design' />
            </Detail>
            <Title>Chelsea Football Club is an English professional football club.</Title>
            <ProjectInfo>
                The club competes in the Premier League, the top division of English football. 
            </ProjectInfo>
            <ProjectContainer>
                <Price>$43,000/Year</Price>
                <Badge content='Full Time' clean />
            </ProjectContainer>
        </CardContent>
    </RecommendProject>
  )
}

export default ProjectRecommendation;

const RecommendProject = styled.div`
border-radius: 1rem;
padding: 1rem;
height: 130%;
background-color: white;
width: 20vw;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover{
  box-shadow: ${hoverEffect};
}
  @media screen and (min-width: 320px) and (max-width:1080px){
     width: 80%;
     height: max-content;
     margin: 2rem 0;
  }
`;
const CardContent = styled.div`
margin: 0.4rem;
`;
const Detail = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

  @media screen and (min-width: 320px) and (max-width:1080px){
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
     gap: 0.2rem;
     margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
display: flex;
align-items: center;
`;
const Avatar = styled.div`
margin-right: 1rem;
img{
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
}
`;
const Info = styled.div``;
const InfoName = styled.h3`
font-weight: 500;
font-size: 1rem;
`;
const InfoUpdate = styled.h5`
font-weight: 300;
`;
const Title = styled.h4`
font-weight: 400;
`;
const ProjectInfo = styled.p`
margin: 0;
padding: 0;
font-size: 0.9rem;
margin-bottom: 0.5rem;
color: #3b3b3b;
`;
const ProjectContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 1rem;
padding: 0.5rem 1rem;
border-radius: 1rem;
background-color: rgba(146, 166, 255, 0.3);
 @media screen and (min-width: 320px) and (max-width:1080px){
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
  } 
`;
const Price = styled.div``;