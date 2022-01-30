import React, { useState } from "react";
import styled from "styled-components";
import { Close, EditIcon } from "assets/icons";

function MyProfile() {
  const [Nickname, setNickname] = useState("areve");
  const [NicknameEdit, setNicknameEdit] = useState(false);
  const Email = "admin@areve.com";
  const Birth = "2022.01.30";
  const Phone = "010-1234-5678";
  const RegisterDate = "2022.01.30";
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const nicknameEditToggleHandler = (e) => {
    setNicknameEdit(!NicknameEdit);
  };

  const nicknameEditHandler = (e) => {
    setNickname(e.target.value);
    //서버에 전송해서 중복값 찾기
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const passwordSubmitHandler = (e) => {
    console.log(Password);
    console.log(PasswordConfirm);
    //엑시오스 이용해서 비밀번호 변경 저거 보내기
  };

  return (
    <Layout>
      {/* 밖에부분 클릭하면 모달 창 사라지게 */}
      <Section>
        <CloseBtn>
          <Close width="30px" height="30px"></Close>
        </CloseBtn>
        <Profile>
          {NicknameEdit ? (
            <Input
              type="text"
              value={Nickname}
              onChange={nicknameEditHandler}
            ></Input>
          ) : (
            <UserNickname>{Nickname}</UserNickname>
          )}
          <EditNickname onClick={nicknameEditToggleHandler}>
            <EditIcon width="20px" height="20px"></EditIcon>
          </EditNickname>
        </Profile>
        <Table>
          <tbody>
            <Tr>
              <TableName>이메일</TableName>
              <TableData>{Email}</TableData>
            </Tr>
            <Tr>
              <TableName>생년월일</TableName>
              <TableData>{Birth}</TableData>
            </Tr>
            <Tr>
              <TableName>휴대폰 번호</TableName>
              <TableData>{Phone}</TableData>
            </Tr>
            <Tr>
              <TableName>가입일자</TableName>
              <TableData>{RegisterDate}</TableData>
            </Tr>
            <Tr>
              <TableName>비밀번호</TableName>
              <td>
                <InputPW
                  type="password"
                  placeholder="변경할 비밀번호를 입력하세요"
                  onChange={passwordHandler}
                ></InputPW>
              </td>
            </Tr>
            <tr>
              <TableName>비밀번호 확인</TableName>
              <td>
                <InputPW
                  type="password"
                  onChange={passwordConfirmHandler}
                ></InputPW>
              </td>
            </tr>
          </tbody>
        </Table>
        <Btn onClick={passwordSubmitHandler}>변경</Btn>
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: flex;
  align-items: center;
  animation: modal-bg-show 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Section = styled.section`
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
  animation: modal-show 0.3s;
`;

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 550px;
`;
const Profile = styled.div`
  width: 500px;
  height: 50px;
  border-bottom: 1px solid #cbcbcb;
  box-sizing: border-box;
  margin-left: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNickname = styled.div`
  font-size: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline;
  margin-bottom: 10px;
`;

const EditNickname = styled.button`
  height: 30px;
  width: 30px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #6667ab;
  box-sizing: border-box;
  font-size: 30px;
  display: inline;

  :focus {
    outline: none;
  }
`;

const Table = styled.table`
  margin: 30px auto;
  width: 450px;
  height: 360px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #cbcbcb;
  box-sizing: border-box;
`;

const TableName = styled.td`
  width: 150px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid #cbcbcb;
  box-sizing: border-box;
`;

const TableData = styled.td`
  width: 300px;
  height: 60px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
`;

const InputPW = styled.input`
  width: 280px;
  height: 40px;
  margin: 10px 0 0 10px;
  font-size: 20px;
  border: 0px;
  :focus {
    outline: none;
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  margin: -30px 0 0 425px;
  font-size: 17px;
  background-color: #6667ab;
  color: white;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
`;

export default MyProfile;
