import React from 'react';
import styled from 'styled-components';
import Earnings from './Earnings';
import Info from './Info';
import Navbar from './Navbar';
import Projects from './Projects';

const MainContent = () => {
  return (
    <Container>
        <Navbar />
        <SubContainer>
            <SectionOne>
                <ColumnOne1>
                    <Earnings />
                    <Info />
                </ColumnOne1>
                <ColumnTwo1>
                    <TitleText>Your Projects</TitleText>
                    <Projects />
                </ColumnTwo1>
            </SectionOne>
            <SectionTwo>
                <ColumnOne2></ColumnOne2>
                <ColumnTwo2></ColumnTwo2>
            </SectionTwo>
        </SubContainer>
    </Container>
  )
}
export default MainContent;

const Container = styled.div`
width: 78%;
background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
border-top-right-radius: 2rem;
border-bottom-right-radius: 2rem;
margin: 1rem 8rem 1rem 4rem;

`;
const SubContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
width: 100%;
height: 80%;
margin: 0.5rem 0;

`;
const TitleText = styled.h3`
height: 20%;
`;
const SectionOne = styled.div`
display: flex;
justify-content: space-between;
height: 50%;
width: 100%;
gap: 2rem;
`;
const SectionTwo = styled.div`
display: flex;
height: 26vh;
gap: 2rem;

`;
const ColumnOne1 = styled.div`
display: flex;
gap: 3rem;
`;
const ColumnTwo1 = styled.div``;
const ColumnOne2 = styled.div``;
const ColumnTwo2 = styled.div``;
//const Container = styled.div``;
//const Container = styled.div``;