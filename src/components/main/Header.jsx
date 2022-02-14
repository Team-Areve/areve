import Logo from "assets/images/Logo.png";
import React from "react";
import styled from "styled-components";
import { Hamburger } from "assets/icons";
import { Link } from "react-router-dom";

function Header({ history }) {
	const onc = (e) => {
		history.replace("/");
	};
	return (
		<HeaderBlock>
			<HeaderInner>
				<H1>
					<Link to={"/"}>
						<LogoImg src={Logo} />
					</Link>
				</H1>
				<RightMenu>
					<Share>
						<Link to={"/apply"}>공유하기</Link>
					</Share>
					<NavManu onClick={onc}>
						<Hamburger width="70px" height="70px"></Hamburger>
					</NavManu>
				</RightMenu>
			</HeaderInner>
		</HeaderBlock>
	);
}

const HeaderBlock = styled.header`
	display: flex;
	justify-content: center;
`;

const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1250px;
	height: 100px;
`;

const H1 = styled.h1`
	display: flex;
	align-items: center;
	background-image: Logo;
`;

const LogoImg = styled.img`
	width: 250px;
	height: 93.5px;
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
`;

const Share = styled.button`
	width: 150px;
	height: 100px;
	font-size: 25px;
`;
const NavManu = styled.button`
	width: 100px;
	height: 100px;
`;

export default Header;
