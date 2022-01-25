<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';

const Category = () => {
  const categoryItems = [
    { type: '주거용', onClick: () => console.log(1) },
    { type: '사무실', onClick: () => console.log(2) },
    { type: '회의실', onClick: () => console.log(3) },
    { type: '연습실', onClick: () => console.log(4) },
    { type: '세미나실', onClick: () => console.log(5) },
    { type: '파티룸', onClick: () => console.log(6) },
    { type: '펜션', onClick: () => console.log(7) },
    { type: '호텔', onClick: () => console.log(8) },
    { type: '차량 렌트/린스 승계', onClick: () => console.log(9) },
    { type: '가전', onClick: () => console.log(10) },
    { type: '스튜디오', onClick: () => console.log(11) },
  ];
  return (
    <CategoryContainer>
      {categoryItems.map((item) => (
        <CategoryItem key={item.type}>
          {/* <button onClick={item.type === '사무실' ? item.onClick : null}> */}
          <button>
            <i></i>
            <div> {item.type} </div>
          </button>
        </CategoryItem>
      ))}
=======
import React from "react";
import styled from "styled-components";
import { palette } from "../../lib/styles/palette.js";
import CategoryIcon from "./CategoryIcon.js";

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryLineTop>
        <CategoryIcon text="주거" />
        <CategoryIcon text="사무실" />
        <CategoryIcon text="회의실" />
        <CategoryIcon text="연습실" />
        <CategoryIcon text="세미나실" />
        <CategoryIcon text="파티룸" />
      </CategoryLineTop>
      <CategoryLineBot>
        <CategoryIcon text="펜션" />
        <CategoryIcon text="호텔" />
        <CategoryIcon text="모텔" />
        <ForCarRent>
          <CategoryIconImage></CategoryIconImage>
          <CategoryIconText>차량 렌트/린스 승계</CategoryIconText>
        </ForCarRent>
        <CategoryIcon text="가전" />
        <CategoryIcon text="스튜디오" />
      </CategoryLineBot>
>>>>>>> test_H
    </CategoryContainer>
  );
};

<<<<<<< HEAD
const CategoryContainer = styled.section`
  display: flex;
  margin-top: 20vh;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryItem = styled.div`
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    i {
    }

    div {
    }
  }
=======
const CategoryContainer = styled.div`
  width: 1250px;
  height: 380px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryLineTop = styled.div`
  width: 1070px;
  height: 150px;
`;

const CategoryLineBot = styled.div`
  width: 1070px;
  height: 180px;
  display: flex;
  margin-top: 50px;
`;

const ForCarRent = styled.div`
  display: inline-block;
  width: 150px;
  height: 180px;
  border: 1px solid;
  margin: 0px 0px 0px 55px;
`;

const CategoryIconImage = styled.div`
  width: 120px;
  height: 120px;
`;

const CategoryIconText = styled.div`
  width: 150px;
  height: 20px;
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
>>>>>>> test_H
`;

export default Category;
