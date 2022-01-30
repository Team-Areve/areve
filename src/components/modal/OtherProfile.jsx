import React from "react";
import styled from "styled-components";
import { Close, EditIcon } from "assets/icons";
import { Link } from "react-router-dom";

function OtherProfile() {
  const Nickname = "other user";
  const Email = "admin@areve.com";
  const Birth = "2022.01.30";
  const isAdult = true;
  const Rating = "4.89";
  const Sharing = "15";
  const RegisterDate = "2022.01.30";

  return (
    <Layout>
      {/* 밖에부분 클릭하면 모달 창 사라지게 */}
      <Section>
        <CloseBtn>
          <Close width="30px" height="30px"></Close>
        </CloseBtn>
        <Profile>
          <UserNickname>{Nickname}</UserNickname>
        </Profile>
        <Table>
          <tbody>
            <Tr>
              <TableName>이메일</TableName>
              <TableData>{Email}</TableData>
            </Tr>
            <Tr>
              <TableName>19+</TableName>
              <TableData>{isAdult ? "O" : "X"}</TableData>
            </Tr>
            <Tr>
              <TableName>평점</TableName>
              <TableData>
                <Link style={{ textAlign: "right" }} to="/">
                  {Rating}
                </Link>
              </TableData>
            </Tr>
            <Tr>
              <TableName>공유 목록</TableName>
              <TableData>
                <Link style={{ textAlign: "right" }} to="/">
                  {Sharing}
                </Link>
              </TableData>
            </Tr>
            <tr>
              <TableName>가입일자</TableName>
              <TableData>{RegisterDate}</TableData>
            </tr>
          </tbody>
        </Table>
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

export default OtherProfile;
