import React from "react";
import styled from "styled-components";
import { ReactComponent as hamburger } from "../../assets/icons/hamburger.svg"
// import logo from "../../assets/icons/logo.svg"

const Header = () => {
    return ( 
        <Container>
            <H1>
                <a>아레브</a>
                {/* <Logo>ddsa
                    <source src = "logo.svg"/>
                </Logo> */}
            </H1>
            <RightMenu>
                <Share>공유하기</Share>
                <NavManu>
                    <hamburger>햄버거 왜 안보이냐</hamburger>
                </NavManu>
            </RightMenu>
            
        </Container>

    )              
}

const Container = styled.header`
    display : flex;
    justify-content : space-between;
    border-bottom: 1px solid #f6f6f6;

    /* width: 100%;
    min-width: 768px;
    height: 78px;
    top: 0;
    z-index: 110;
    background: #fff;
    color: #000; */

    /* justify-content: space-between; */
`;

const H1 = styled.h1`
    
`

const Logo = styled.image`
    display : block;
`
const RightMenu = styled.div`
    display : flex;
    align-items : center;
`

const Share = styled.button`

`
const NavManu = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    
    i {
        background-image : url(../../assets/icons/hamburger.svg);
        background-size: cover;
    }
`

export default Header;