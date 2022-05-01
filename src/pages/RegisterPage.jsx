import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { palette } from "../lib/styles/palette.js";
import instance from "lib/Request.js";
import { useNavigate } from "react-router-dom";
import LocationSelect from "components/modals/LocationSelect.jsx";

function RegisterPage() {
	// 비밀번호 규칙에 맞지 않으면 에러 메시지 띄우기
	// 형식에 안 맞을 때마다 인풋 밑에 살짝 메시지 띄우기 가능 스페이스 클라우드 처럼
	// 실시간 감지

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [birth, setBirth] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");
	const [location, setLocation] = useState("");
	const [sigungu, setSigungu] = useState("");
	const [postcode, setPostcode] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const emailHandler = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};
	const passwordConfirmHandler = (e) => {
		e.preventDefault();
		setPasswordConfirm(e.target.value);
	};

	const nameHandler = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const nicknameHandler = (e) => {
		e.preventDefault();
		setNickname(e.target.value);
	};

	const birthHandler = (e) => {
		e.preventDefault();
		setBirth(e.target.value);
	};
	const phoneHandler = (e) => {
		e.preventDefault();
		setPhone(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			alert("pw dif");
			return;
		}

		instance({
			method: "post",
			url: "/signup/",
			data: {
				email: email,
				password: password,
				name: name,
				nickname: nickname,
				birth: birth,
				phone: phone,
				location: location,
				sigungu: sigungu,
				postcode: postcode,
			},
		}).then((res) => {
			if (res.status === 200) {
				const accessToken = res.data.Token;
				instance.defaults.headers.common[
					"Authorization"
				] = `Token ${accessToken}`;
				localStorage.setItem("token", accessToken);
				const like = res.data.Like;
				localStorage.setItem("like", like);
				const sgg = res.data.Sigungu;
				localStorage.setItem("sigungu", sgg);
				navigate("/");
			}
		});
	};

	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			submitHandler();
		}
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	return (
		<RegisterLayout>
			<Wrapper>
				<Text>회원가입'^'</Text>
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
						onChange={passwordHandler}
						placeholder="비밀번호"
						onKeyPress={onKeyPress}
					></Input>
					<Input
						style={{ marginTop: "20px" }}
						type="password"
						onChange={passwordConfirmHandler}
						placeholder="비밀번호 확인"
						onKeyPress={onKeyPress}
					></Input>
					<InputIndex>닉네임</InputIndex>
					<Input
						type="text"
						placeholder="닉네임"
						onChange={nicknameHandler}
						onKeyPress={onKeyPress}
					></Input>
					<InputIndex>이름</InputIndex>
					<Input
						type="text"
						placeholder="이름"
						onChange={nameHandler}
						onKeyPress={onKeyPress}
					></Input>
					<InputIndex>생년월일</InputIndex>
					<Input
						type="date"
						onChange={birthHandler}
						onKeyPress={onKeyPress}
					></Input>
					<InputIndex>지역</InputIndex>
					<Input
						type="text"
						value={sigungu}
						onClick={() => setIsOpen(true)}
					></Input>
					{isOpen ? (
						<LocationSelect
							isOpen={isOpen}
							getIsOpen={(v) => setIsOpen(v)}
							getLocation={(v) => setLocation(v)}
							getSigungu={(v) => setSigungu(v)}
							getPostcode={(v) => setPostcode(v)}
						/>
					) : (
						<></>
					)}
					<InputIndex>휴대전화</InputIndex>
					<Input
						style={{ width: "460px" }}
						onChange={phoneHandler}
						type="text"
						onKeyPress={onKeyPress}
					></Input>
					<AuthrizePhone>휴대폰 인증</AuthrizePhone>
					<Submit onClick={submitHandler}>가입하기</Submit>
				</Form>
			</Wrapper>
		</RegisterLayout>
	);
}

const RegisterLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
`;

const Wrapper = styled.div`
	width: 700px;
	height: 970px;
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

const Form = styled.form`
	width: 700px;
	height: 680px;
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

const AuthrizePhone = styled.button`
	margin-left: 20px;
	width: 120px;
	height: 50px;
	background-color: ${palette.MainColor};
	color: white;
	font-size: 15px;
`;

const Submit = styled.button`
	margin: 50px 0 0 50px;
	width: 600px;
	height: 50px;
	font-size: 20px;
	color: white;
	background-color: ${palette.MainColor};
`;

export default RegisterPage;
