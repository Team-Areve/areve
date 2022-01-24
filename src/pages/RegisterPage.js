import React from "react";
import styled from "styled-components";
import { palette } from "../lib/styles/palette.js";
import Header from "../components/main/Header";

function RegisterPage() {
  // 비밀번호 규칙에 맞지 않으면 에러 메시지 띄우기
  // 형식에 안 맞을 때마다 인풋 밑에 살짝 메시지 띄우기 가능 스페이스 클라우드 처럼

  return (
    <RegisterLayout>
      <Header></Header>
      <Wrapper>
        <Text>회원가입'^'</Text>
        <Form action="">
          <InputIndex>이메일</InputIndex>
          <Input type="email" name="User_id" placeholder="이메일"></Input>
          <InputIndex>비밀번호</InputIndex>
          <Input
            type="password"
            name="User_password"
            placeholder="비밀번호"
          ></Input>
          <Input
            style={{ marginTop: "20px" }}
            type="password"
            name="User_password_confirm"
            placeholder="비밀번호 확인"
          ></Input>
          <InputIndex>생년월일</InputIndex>
          <Input type="date" name="User_birth"></Input>
          <InputIndex>휴대전화</InputIndex>
          <Input
            style={{ width: "460px" }}
            type="text"
            name="User_phonenumber"
          ></Input>
          <AuthrizePhone>휴대폰 인증</AuthrizePhone>
          <Submit>가입하기</Submit>
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
`;

const Wrapper = styled.div`
  width: 700px;
  height: 970px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  font-size: 25px;
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
