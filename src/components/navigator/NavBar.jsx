import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowBack, Setting } from "assets/icons";
import { Link } from "react-router-dom";
import { palette } from "lib/styles/palette";
import { UnLoggedInSideMenuData } from "./UnLoggedInSideMenuData";
import { LoggedInSideMenuData } from "./LoggedInSideMenuData";
import instance from "lib/Request";

function NavBar(props) {
	const [user, setUser] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const numBookmark = 0;
	const numChat = 0;
	const numReview = 0;

	const toggle = () => {
		props.getToggled(false);
	};
	const handleClickOutside = ({ target }) => {
		if (target.className === "sc-iAKWXU KNGPi") {
			props.getToggled(false);
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setLoggedIn(true);
			instance.defaults.headers.common[
				"Authorization"
			] = `Token ${localStorage.getItem("token")}`;
			instance({ method: "get", url: "user/token" }).then((res) => {
				setUser(res.data);
			});
		} else {
			setLoggedIn(false);
		}
	}, [localStorage.getItem("token")]);

	return (
		<>
			{props.toggled ? (
				<Layout>
					<Nav className={props.toggled ? "open" : "close"}>
						<BackBtn onClick={toggle}>
							<ArrowBack width="30px" height="30px"></ArrowBack>
						</BackBtn>
						<MyPage>
							<Link onClick={toggle} to="/mypage">
								<Setting width="30px" height="30px"></Setting>
							</Link>
						</MyPage>
						<Link onClick={toggle} to="/login">
							<LogIn>
								<UserName>
									{loggedIn ? user.nickname : "로그인/회원가입"}
								</UserName>
							</LogIn>
						</Link>
						<div
							style={{
								width: "400px",
								height: "150px",
								display: "flex",
								justifyContent: "space-around",
								boxSizing: "border-box",
								borderBottom: "1px solid #cbcbcb",
								backgroundColor: "white",
								padding: "25px 20px 25px 20px",
							}}
						>
							<Link onClick={toggle} to={loggedIn ? "/favorite" : "/login"}>
								<NumberItem>
									<Num>{numBookmark}</Num>
									<NumText>찜</NumText>
								</NumberItem>
							</Link>
							<Link onClick={toggle} to={loggedIn ? "/chatrooms" : "/login"}>
								<NumberItem>
									<Num>{numChat}</Num>
									<NumText>채팅</NumText>
								</NumberItem>
							</Link>
							<Link
								onClick={toggle}
								to={loggedIn ? "/mypage/review" : "/login"}
							>
								<NumberItem>
									<Num>{numReview}</Num>
									<NumText>후기</NumText>
								</NumberItem>
							</Link>
						</div>
						<ul style={{ backgroundColor: "white" }}>
							{loggedIn
								? LoggedInSideMenuData.map((item, index) => {
										return (
											<Item key={`LoggedIn_${index}`} className={item.cName}>
												<Link onClick={toggle} to={item.path}>
													<span
														style={{ fontSize: "20px", marginLeft: "30px" }}
													>
														{item.title}
													</span>
												</Link>
											</Item>
										);
								  })
								: UnLoggedInSideMenuData.map((item, index) => {
										return (
											<Item key={`LoggedOut_${index}`} className={item.cName}>
												<Link onClick={toggle} to={item.path}>
													<span
														style={{ fontSize: "20px", marginLeft: "30px" }}
													>
														{item.title}
													</span>
												</Link>
											</Item>
										);
								  })}
						</ul>
						<Footer>Designed By Team Areve</Footer>
					</Nav>
				</Layout>
			) : (
				<></>
			)}
		</>
	);
}

const Layout = styled.aside`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.3);
`;

const Nav = styled.aside`
	position: fixed;
	width: 400px;
	height: 100%;
	top: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #f5f5f5;
	animation: show 0.3s;
	@keyframes show {
		from {
			right: -400px;
		}
		to {
			right: 0px;
		}
	}

	.close {
		animation: close 0.3s;
		@keyframes close {
			from {
				right: 0px;
			}
			to {
				right: -400px;
			}
		}
	}
`;

const MyPage = styled.button`
	width: 50px;
	height: 50px;
	position: absolute;
	left: 350px;
	top: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LogIn = styled.div`
	width: 400px;
	height: 200px;
	background-color: ${palette.MainColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BackBtn = styled.button`
	width: 50px;
	height: 50px;
	position: absolute;
	left: 350px;
`;

const UserName = styled.span`
	font-size: 30px;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: white;
`;

const NumberItem = styled.div`
	height: 150px;
	display: flex;
	flex-direction: column;
`;

const Num = styled.div`
	font-size: 35px;
	width: 100px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NumText = styled.div`
	font-size: 20px;
	width: 100px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Item = styled.li`
	width: 400px;
	height: 50px;
	box-sizing: border-box;
	border-bottom: 1px solid #cbcbcb;
	display: flex;
	align-items: center;
`;

const Footer = styled.div`
	font-size: 10px;
	width: 400px;
	height: 50px;
	color: #cbcbcb;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0px;
`;

export default NavBar;
