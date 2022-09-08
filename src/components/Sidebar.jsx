import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import { darkThemeColor, darkSidebarColor } from '../utils';
import AvatarImage from '../assets/passport.jpg'
import {FaWallet} from 'react-icons/fa';
import {AiOutlinePieChart} from 'react-icons/ai';
import {RiHomeLine, RiFileCopyLine} from 'react-icons/ri';

const Sidebar = () => {
  return (
    <Container>
        <ProfileContainer>
            <Avatar
                src={AvatarImage}
                alt='name'
            />
            <Name>Tunde Elesho</Name>
            <Badge content='Reactjs Dev' />
        </ProfileContainer>
        <LinksContainer>
            <Links>
                <Link>
                    <RiHomeLine />
                    <h3>Dashboard</h3>
                </Link>
                <Link>
                    <RiFileCopyLine />
                    <h3>Projects</h3>
                </Link>
                <Link>
                    <FaWallet />
                    <h3>Invoices</h3>
                </Link>
                <Link>
                    <AiOutlinePieChart />
                    <h3>Reports</h3>
                </Link>
            </Links>
            <ContactContainer>
                <span>Having Troubles?</span>
                <a href='#'>Contact Us</a>
            </ContactContainer>
        </LinksContainer>
    </Container>
  )
}

export default Sidebar
const Container = styled.div`
    width: 22%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: ${darkSidebarColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

`;
const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Avatar = styled.img`
    height: 7rem;
    width: 70%;
    border-radius: 50%;
    margin-top: 20%;
    //object-fit:cover;
`;
const Name = styled.h1`
color: white;
font-weight: 400;
font-size: 2rem;
margin:0.8rem 0 0.5rem 0;
`;
const LinksContainer = styled.div`
background-color: ${darkThemeColor};
height: 100%;
width: 100%;
border-radius: 2rem;
`;
const Links = styled.ul`
list-style-type:none;
display: flex;
flex-direction:column;
height: 60%;
padding-top: 2rem;
`;
const Link = styled.li`
margin-left: 25%;
margin-bottom: 2rem;
display: flex;
color: #e4e4e4;
cursor: pointer;

    h3{
        font-weight: 300;
    }
    svg{
        font-size: 1.1rem;
        margin-right: 3%;
    }
`;
const ContactContainer = styled.div`
    width: 60%;
    background-color: ${darkSidebarColor};
    color: white;
    height: 15%;
    margin: auto auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    span{
        padding: 0.3rem;
    }
    a{
        color: white;
        padding: 0.3rem;
        text-decoration:none;
    }
`;