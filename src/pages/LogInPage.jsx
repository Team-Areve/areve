import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { palette } from "../lib/styles/palette.js";
import { Link, useNavigate } from "react-router-dom";
import instance from "lib/Request.js";

function LogInPage() {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const findUrl = "";
	const navigate = useNavigate();

	const emailHandler = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const submitHandler = () => {
		if (Email === "" || Password === "") {
			alert("이메일/비밀번호를 입력해주세요");
		}

		instance({
			method: "post",
			url: "/login/",
			data: { email: Email, password: Password },
		}).then((res) => {
			const token = res.data.Token;
			localStorage.setItem("token", token);
			instance.defaults.headers.common["Authorization"] = token
				? `Token ${token}`
				: null;
			navigate(-1);
		});
	};

	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			submitHandler();
		}
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			localStorage.removeItem("token");
			navigate("/");
		}
	}, []);

	return (
		<LogInLayout>
			<Wrapper>
				<Text>로그인'^'</Text>
				<Form action="">
					<InputIndex>이메일</InputIndex>
					<Input
						type="email"
						placeholder="이메일"
						onChange={emailHandler}
						onKeyPress={onKeyPress}
					></Input>
					<InputIndex>비밀번호</InputIndex>
					<Input
						type="password"
						placeholder="비밀번호"
						onChange={passwordHandler}
						onKeyPress={onKeyPress}
					></Input>

					<BottomLine>
						<Remember>
							<input type="checkbox" value="Remember"></input>
							<span>이메일 저장하기</span>
						</Remember>
						<OtherButtons>
							<GoToOtherPage>
								<Link to="/register">회원가입</Link>
							</GoToOtherPage>
							<GoToOtherPage style={{ marginLeft: "10px" }}>
								<Link to="/">이메일/비밀번호 찾기</Link>
							</GoToOtherPage>
						</OtherButtons>
					</BottomLine>
					<But onClick={submitHandler}>로그인</But>
				</Form>
			</Wrapper>
		</LogInLayout>
	);
}

const LogInLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 700px;
	height: 630px;
	display: flex;
	flex-direction: column;
`;

const Text = styled.div`
	display: flex;
	font-size: 30px;
	width: 700px;
	height: 70px;
	margin-top: 70px;
	align-items: center;
	justify-content: center;
`;

const Form = styled.div`
	width: 700px;
	height: 350px;
`;

const InputIndex = styled.div`
	height: 25px;
	font-size: 15px;
	color: ${palette.MainColor};
	margin: 20px 0 0 50px;
	display: flex;
`;

const Input = styled.input`
	:focus {
		outline: 2px solid ${palette.MainColor};
	}

	:placehorder {
		font-size: 20px;
		color: #666666;
	}
	margin-left: 50px;
	width: 600px;
	height: 50px;
	font-size: 20px;
	padding-left: 10px;
	box-sizing: border-box;
	border: 1px solid ${palette.MainColor};
`;

const But = styled.button`
	margin: 30px 0 0 50px;
	width: 600px;
	height: 50px;
	font-size: 20px;
	color: white;
	background-color: ${palette.MainColor};
`;

const BottomLine = styled.div`
	margin: 10px 0 0 50px;
	width: 600px;
	height: 30px;
	display: flex;
	justify-content: space-between;
`;

const Remember = styled.div`
	width: 250px;
	height: 30px;
`;

const OtherButtons = styled.div`
	height: 30px;
	display: flex;
`;

const GoToOtherPage = styled.div`
	height: 30px;
	font-size: 15px;
`;

export default LogInPage;
