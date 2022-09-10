import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';


const Navbar = () => {
  return (
    <NavbarContainer>
        <Text>
            GoodDay,
            <span>
                gemtunde
            </span>
        </Text>
        <InputContainer>
            <Icon>
                <FiSearch />
            </Icon>
            <Input type='text' placeholder='Search for projects...'/>
        </InputContainer>
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
width: 60%;
//position: fixed;
//margin-bottom: 20rem;
//background-color: #f2f2f2;

  @media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    margin-bottom: 1rem;
    //position: relative;
  }
`;
const Text = styled.h1`
span{
    font-weight: 500;
    color: #484258;
}

  @media screen and (min-width: 320px) and (max-width:1080px){
 margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
display: flex;
`;
const Icon = styled.div`
height: 3rem;
width: 3rem;
background-color: #dce4ff;
display: flex;
justify-content: center;
align-items: center;
border-top-left-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
    svg{
        color: #555555;
    }
`;
const Input = styled.input`
border: none;
background-color: #dce4ff;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
&:focus{
    border: none;
    outline: none;
}

`;