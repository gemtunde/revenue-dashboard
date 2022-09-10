import React from 'react';
import styled from 'styled-components';
import { hoverEffect, cardShadow  } from '../utils';
//import {IoStatsChart} from 'react-icons/io5';
import Badge from './Badge';
import AvatarImage from '../assets/passport.jpg'

const Invoices = () => {
  return (
    <InvoicesContainer>
        <CardContent>
            <Invoice>
                <Info>
                    <Avatar>
                        <img 
                         src={AvatarImage} alt='invoice'
                        />
                    </Avatar>
                    <TextContainer>
                        <Title>Mo Salah</Title>
                        <SubTitle>Liverpool Football Club</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content='Paid' paid />
                    <Price>$1,345,666</Price>
                </Container>
            </Invoice>
            <Invoice>
                <Info>
                    <Avatar>
                        <img 
                         src={AvatarImage} alt='invoice'
                        />
                    </Avatar>
                    <TextContainer>
                        <Title>Raheem Sterling</Title>
                        <SubTitle>Chelsea Football Club</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content='Late' late />
                    <Price>$3,345,666</Price>
                </Container>
            </Invoice>
        </CardContent>
    </InvoicesContainer>
  )
}

export default Invoices;

const InvoicesContainer = styled.div`
width: 35rem;
border-radius: 1rem;
padding: 0.5rem;
margin-top: 1rem;
background-color: white;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover{
    box-shadow: ${hoverEffect};
}
  @media screen and (min-width: 320px) and (max-width:1080px){
     width: 80%;
     display: flex;
     justify-content: center;
     align-items: center;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width:1080px){
     margin:2rem 0;
  }
`;
const Invoice = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 0.4rem;
padding-top: 0.6rem;

  @media screen and (min-width: 320px) and (max-width:1080px){
     flex-direction: column;
     gap: 1rem;
  }
`;
const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 30%;

  @media screen and (min-width: 320px) and (max-width:1080px){
    
    flex-direction: column;
    width: 100%;
    gap: 0.6rem;
  }
`;
const Info = styled.div`
display: flex;
align-items: center;
width: 50%;

  @media screen and (min-width: 320px) and (max-width:1080px){
     flex-direction: column;
     width: 100%;
     text-align: center;
  }
`;
const Avatar = styled.div`
img{
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
}
`;
const TextContainer = styled.div`
margin-left: 1rem;
`;
const Title = styled.h4`
font-weight: 500;
`;
const SubTitle = styled.h5`
font-weight: 400;
`;
const Price = styled.div``;
//const InvoicesContainer = styled.div``;
//const InvoicesContainer = styled.div``;
//const InvoicesContainer = styled.div``;