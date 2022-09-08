import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const MainContent = () => {
  return (
    <Container>
        <Navbar />
        <SubContainer>
            <SectionOne>
                <ColumnOne1></ColumnOne1>
                <ColumnTwo1></ColumnTwo1>
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

const Container = styled.div``;
const SubContainer = styled.div``;
const TitleText = styled.h3`

`;
const SectionOne = styled.div``;
const SectionTwo = styled.div``;
const ColumnOne1 = styled.div``;
const ColumnTwo1 = styled.div``;
const ColumnOne2 = styled.div``;
const ColumnTwo2 = styled.div``;
//const Container = styled.div``;
//const Container = styled.div``;