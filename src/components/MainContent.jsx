import React from 'react';
import styled from 'styled-components';
import Earnings from './Earnings';
import Info from './Info';
import Invoices from './Invoice';
import JoinSlack from './JoinSlack';
import Navbar from './Navbar';
import ProjectRecommendation from './ProjectRecommendation';
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
                <ColumnOne2>
                    <InvoiceContainer>
                        <TitleText>Latest invoice</TitleText>
                        <Invoices />
                    </InvoiceContainer>
                    <JoinSlack />
                </ColumnOne2>
                <ColumnTwo2>
                    <TitleText>Recommended Projects</TitleText>
                    <ProjectRecommendation />
                </ColumnTwo2>
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
 margin-left: 20rem;

@media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }

`;
const SubContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
width: 100%;
height: 80%;
margin: 0.5rem 0;

@media screen and (min-width: 320px) and (max-width:1080px){
    
    height: 100%;
  }
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

@media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const SectionTwo = styled.div`
display: flex;
height: 26vh;
gap: 2rem;

@media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    width: 100%;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
display: flex;
gap: 3rem;

@media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
@media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
    height: 60%;

    @media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
  }
`;
const ColumnTwo1 = styled.div`
display: flex;
flex-direction: column;
height: 115%;
width: 100%;

@media screen and (min-width: 320px) and (max-width:1080px){
    height: max-content;
    align-items: center;
    justify-content: center;
  }

`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
  }
`;
//const Container = styled.div``;
//const Container = styled.div``;