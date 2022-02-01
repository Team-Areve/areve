import React from "react";
import styled from "styled-components";
import Header from "components/main/Header";
import { palette } from "lib/styles/palette";

function ReviewManagePage() {
  var rating = 4.89;
  var positive = [
    {
      rate: 4,
      comment: "좋았다",
    },
    {
      rate: 5,
      comment: "가나다라마바사",
    },
    {
      rate: 3,
      comment: "평균",
    },
  ];

  var negative = [
    { rate: 2, comment: "별로" },
    { rate: 1, comment: "가나다라마바사" },
  ];

  return (
    <Layout>
      <Header></Header>
      <Title>{rating}점</Title>
      <Table>
        <thead>
          <Th>긍정적 평가 :)</Th>
        </thead>
        <tbody>
          {positive.map((item) => {
            return (
              <tr>
                <Td key={item.key}>
                  <Comment>{item.comment}</Comment>
                  <Rate>{item.rate}점</Rate>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Table>
        <thead>
          <Th>부정적 평가 :(</Th>
        </thead>
        <tbody>
          {negative.map((item) => {
            return (
              <tr>
                <Td key={item.key}>
                  <Rate>{item.rate}점</Rate>
                  <Comment>{item.comment}</Comment>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
}

const Layout = styled.main`
  width: 1250px;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 500px;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
  margin: 70px 0 30px 375px;
  font-size: 30px;
  text-align: center;
  color: ${palette.MainColor};
`;

const Table = styled.div`
  width: 625px;
  display: inline-block;
  vertical-align: top;
`;

const Th = styled.th`
  width: 625px;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;
  font-size: 25px;
  font-weight: 500;
`;

const Td = styled.td`
  width: 625px;
  height: 50px;
`;

const Rate = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  font-size: 20px;
  margin-left: 20px;
  display: inline-block;
  color: ${palette.MainColor};
`;

const Comment = styled.div`
  width: 554px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  font-size: 20px;
  display: inline-block;
`;

export default ReviewManagePage;
