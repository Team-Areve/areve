import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../lib/styles/palette.js";
import Header from "../components/main/Header";
import axios from "axios";

function LogInPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const serverUrl = "";
  const registerUrl = "";
  const findUrl = "";

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Email, Password);

    let body = {
      Type: "LogIn",
      User_id: Email,
      User_password: Password,
    };

    axios.post(serverUrl, body).then((res) => console.log(res));
  };

  return (
    <LogInLayout>
      <Header></Header>
      <Wrapper>
        <Text>로그인'^'</Text>
        <Form action="">
          <InputIndex>이메일</InputIndex>
          <Input
            type="email"
            placeholder="이메일"
            onChange={emailHandler}
          ></Input>
          <InputIndex>비밀번호</InputIndex>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={passwordHandler}
          ></Input>

          <BottomLine>
            <Remember>
              <input type="checkbox" value="Remember"></input>
              <span>이메일 저장하기</span>
            </Remember>
            <OtherButtons>
              <GoToOtherPage href={registerUrl}>회원가입</GoToOtherPage>
              <GoToOtherPage href={findUrl} style={{ marginLeft: "10px" }}>
                이메일/비밀번호 찾기
              </GoToOtherPage>
            </OtherButtons>
          </BottomLine>
          <Submit onChange={submitHandler}>로그인</Submit>
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

const Form = styled.form`
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

const Submit = styled.button`
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

const GoToOtherPage = styled.a`
  height: 30px;
  font-size: 15px;
`;

export default LogInPage;
