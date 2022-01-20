import React from "react";
import styled from "styled-components";
import { Hamburger } from "../../assets/icons";
// import { LogoImage } from "../../assets/images";

function Header() {
    return ( 
        <HeaderBlock>
            <H1>
                <a>아레브
                    {/* <LogoImage></LogoImage> */}
                </a>
            </H1>
            <RightMenu>
                <Share>공유하기</Share>
                <NavManu>
                    <Hamburger></Hamburger>
                </NavManu>
            </RightMenu>
            
        </HeaderBlock>

    )              
}

const HeaderBlock = styled.header`
    display : flex;
    justify-content : space-between;
    width: 1250px;
    height: 100px;
    vertical-align : center;

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
    /* background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    
    i {
        background-image : url(../../assets/icons/hamburger.svg);
        background-size: cover;
    } */
`

export default Header;