import React from 'react';
import styled from 'styled-components';
import {IoStatsChart} from 'react-icons/io5';
import { themeColor, hoverEffect, cardShadow  } from '../utils';

const Earnings = () => {
  return (
    <EarningsCard>
        <CardContent>
            <Chart>
                <IoStatsChart />
            </Chart>
            <EarningsText>Earnings</EarningsText>
            <Earning>$7,890</Earning>
            <EarningsIncrease>+ 29% in the previous month</EarningsIncrease>
        </CardContent>
    </EarningsCard>
  )
}

export default Earnings;
const EarningsCard = styled.div`
height: 100%;
width: 14rem;
background-color: ${themeColor};
padding: 1rem;
color: white;
transition: 0.4s ease-in-out;
border-radius:1rem;
&:hover{
    box-shadow: ${hoverEffect};
}

  @media screen and (min-width: 320px) and (max-width:1080px){
     width: 80%;
  }
`;
const CardContent = styled.div`
margin: 1rem;
//display: flex;
//flex-direction:column;
//gap:1;
`;
const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg{
        height: 4rem;
        width: 4rem;
    }
`;
const EarningsText = styled.h3`
text-align: center;
font-weight: normal;
padding: 0.4rem 0;
`;
const Earning = styled.h2`
text-align: center;
`;
const EarningsIncrease = styled.h5`
text-align: center;
font-weight: normal;
background-color: rgba(0, 0, 0, 0.2);
padding: 0.5rem;
border-radius:2rem ; 
`;