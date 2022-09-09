import React from 'react';
import styled from 'styled-components';
import { themeColor, hoverEffect, cardShadow  } from '../utils';
import {IoStatsChart} from 'react-icons/io5';
import Badge from './Badge';

const Info = () => {
  return (
    <InfoCard>
    <Card>
        <CardContent>
            <Row>
                <Digit>98</Digit>
                <InfoContainer>
                    <Title>Rank</Title>
                    <SubTitle>In Top 20%</SubTitle>
                </InfoContainer>
            </Row>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <Row>
                <Digit>32</Digit>
                <InfoContainer>
                    <Title>Projects</Title>
                    <SubTitle>5 completed </SubTitle>
                </InfoContainer>
            </Row>
            <Row justify>
                <Badge content='Mobile App' glow />
                <Badge content='Branding' glow />
            </Row>
        </CardContent>
    </Card>
    </InfoCard>
  )
}

export default Info;
const InfoCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    transition: 0.4s ease-in-out;
    box-shadow: ${cardShadow};

    &:hover{
    box-shadow: ${hoverEffect};
}
`;
const Card = styled.div`
border-radius: 1rem;
margin-bottom: 1rem;
background-color: rgba(183, 194, 243, 0.3);
`;
const CardContent = styled.div`
padding: 0.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.4rem;
${({justify})=>
justify && `
    justify-content:space-between;
    width:90%;
`}
`;
const Digit = styled.div`
background-color: ${themeColor};
padding: 0.8rem 1rem;
font-size:1.3rem;
border-radius: 1rem;
color: white;

`;
const InfoContainer = styled.div`
margin-left: 0.7rem;
`;
const Title = styled.h3`
color: black;
`;
const SubTitle = styled.h5`
color: #333333;
font-weight: normal;
`;