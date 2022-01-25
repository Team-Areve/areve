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
    </CategoryContainer>
  );
};

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
`;

export default Category;
