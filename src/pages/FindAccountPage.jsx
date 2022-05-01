import { PageLayout } from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import Input from "components/common/Input";
import Button from "components/common/Button";

function FindAccountPage() {
	const [selected, setSelected] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const submitHandler = () => {};

	return (
		<PageLayout>
			<Wrapper>
				<SelectedBox>
					<Text
						style={
							selected === false ? { color: palette.gray } : { color: "black" }
						}
						onClick={() => setSelected(true)}
					>
						이메일 찾기
					</Text>
					<Text
						style={
							selected === true ? { color: palette.gray } : { color: "black" }
						}
						onClick={() => setSelected(false)}
					>
						비밀번호 찾기
					</Text>
				</SelectedBox>
				{selected ? (
					<Form action="">
						<InputIndex>이름</InputIndex>
						<Input
							type="text"
							placeholder="이름"
							onChange={(e) => setName(e.target.value)}
							isFocus={true}
							width="700px"
							height="50px"
						/>
						<InputIndex>휴대폰 번호</InputIndex>
						<Input
							type="text"
							placeholder="휴대폰 번호"
							onChange={(e) => setPhone(e.target.value)}
							width="550px"
							height="50px"
						/>
						<Button
							variant="primary"
							width="130px"
							height="50px"
							style={{ fontSize: "20px", marginLeft: "20px" }}
						>
							인증하기
						</Button>
					</Form>
				) : (
					<Form action="">
						<InputIndex>이메일</InputIndex>
						<Input
							type="email"
							placeholder="이메일"
							onChange={(e) => setEmail(e.target.value)}
							width="700px"
							height="50px"
						/>
						<InputIndex>이름</InputIndex>
						<Input
							type="text"
							placeholder="이름"
							onChange={(e) => setEmail(e.target.value)}
							width="700px"
							height="50px"
						/>
						<InputIndex>휴대폰 번호</InputIndex>
						<Input
							type="text"
							placeholder="휴대폰 번호"
							onChange={(e) => setPhone(e.target.value)}
							width="550px"
							height="50px"
						/>
						<Button
							variant="primary"
							width="130px"
							height="50px"
							style={{ fontSize: "20px", marginLeft: "20px" }}
						>
							인증하기
						</Button>
					</Form>
				)}
				<Button
					variant="primary"
					width="700px"
					height="50px"
					style={{ fontSize: "20px", marginTop: "50px" }}
					onClick={submitHandler}
				>
					{selected ? "아이디 찾기" : "비밀번호 찾기"}
				</Button>
			</Wrapper>
		</PageLayout>
	);
}

const Wrapper = styled.div`
	width: 700px;
	height: 630px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const SelectedBox = styled.div`
	width: 700px;
	height: 70px;
	margin-top: 70px;
	display: flex;
	justify-content: space-between;
`;

const Text = styled.button`
	font-size: 30px;
	width: 350px;
	height: 70px;
	line-height: 70px;
	text-align: center;
	vertical-align: middle;
`;

const Form = styled.form`
	width: 700px;
`;

const InputIndex = styled.div`
	height: 25px;
	font-size: 15px;
	color: ${palette.MainColor};
	margin: 20px 0 0 0;
	display: flex;
`;

const But = styled.button`
	margin-top: 30px;
	width: 700px;
	height: 50px;
	font-size: 20px;
	color: white;
	background-color: ${palette.MainColor};
`;

export default FindAccountPage;
