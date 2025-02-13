import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = styled.header`
background-color: #1C0825;
margin: auto;
height: 70px;
width: 80%;
position: sticky;
display: flex;
flex-direction: row;
justify-content: space-between;
top: 0;
z-index: 1;`

export const H1 = styled.h1`
color: #FB563E;
font-family: "Questrial";
font-size: 20px;
margin-top: 40px;
font-weight: bold;
display: flex;
align-items: center;

@media (min-width: 1024px){
    font-size: 20px;
}`

export const HomeLink = styled(Link)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
text-decoration: none;
display: flex;
justify-content: flex-start;
border: none;
margin-top: 40px;
&:hover {
    opacity: 0.3;
}
`

export const NavigationLink = styled(NavLink)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-decoration: none;
display: flex;
width: fit-content;
margin: auto;

&:hover {
    opacity: 0.3;
}
`

export const Button = styled.button`
color: #FB563E;
background-color: #1C0825;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
border: none;
display: flex;
margin: auto;
cursor: pointer;

&:hover {
    opacity: 0.3;
}
`