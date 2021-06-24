import React,{useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';


const sampleData   = [
   {


    name : 'Home',
    url  : "#"
   },
   {


    name : 'How it Works',
    url  : "#"
   },
   {


    name : 'Categories',
    url  : "#"
   },
   {


    name : 'Acheivements',
    url  : "#"
   },
   {


    name : 'Acheivements',
    url  : "#"
   },
]

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false);
    return (
        <Nav>
            <Container ><LogoIcon ></LogoIcon>
                <Humburger onClick={()=> setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Humburger>  
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                    {sampleData.map((data) => <MenuLink href={data.url}>{data.name}</MenuLink> )}
                        <Button>LOGIN</Button>
                    </LinkWrapper>
                </Menu>  
            </Container>
        </Nav>
    );
}

export default Navbar
const Container = styled.div`

  display:flex;
  justify-content:space-between;
  width :100%;
  align-items:center;
  flex-wrap:wrap;
  max-width:1100px;
  margin:auto;
  padding:2rem;
  svg{
    cursor : Pointer;
}
a{
    text-decoration:none;
    color:#000000;
    font-size:18px;
    font-family: Montserrat;
    padding:0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius:0.5rem;
    font-wegiht:500;
    &:hover{
        color:#EF6E25;
        background:#e7e9fc;
    }
}
`;
const Nav=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:3;
`;

const Menu=styled.div`
    diplay:flex;
    justy-content:space-between;
    align-item:center;
    position:relative;
    @media(max-width:768px){
        background-color: rgba(255, 255, 255, 0.9);
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(35px);
        backdrop-filter: blur(15px);
        background-color: rgba(255, 255, 255, 0.4);
        }
        border-radius: 1rem;
        margin-top: 1rem;
        box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;
const LinkWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuLink=styled.a`
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;
    &:hover {
        color: #7781d4;
        background: #e7e9fc;
    }
`;
const Button=styled.button`

    font-family: Montserrat;
    font-size:1rem;
    background :#EF6E25;
    border:none;
    padding :15px 45px;
    color:#fff;
    border-radius:1rem;
    box-shadow:0px 13px 24px -7px #EF6E25;
    transition: all 0.2s ease-in;
    margin-left:0.5rem;
    cursor:pointer;
    &:hover{
     box-shadow:0px 17px 16px -11px #EF6E25;
     transform:translateY(-5px);
        
    }
    @media(max-width:768px){

    }
`;
const Humburger=styled.div`
    display:none;
    flex-direction:column;
    cursor:pointer;
    span{
        height:2px;
        width:25px;
        background:#EF6E25;
        margin-bottom:4px;
        border-radius:5px;
    }
    @media(max-width:670px){
        display:flex;
    }

`;
