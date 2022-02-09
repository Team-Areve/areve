import React from 'react';
import styled from 'styled-components';
import { palette } from '../../lib/styles/palette.js';
import CategoryIcon from './CategoryIcon.jsx';

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryLineTop>
        <CategoryIcon source="assets/icons/categoryicons/1.webp" text="주거" />
        <CategoryIcon source="././assets/categoryicons/2" text="오피스/회의실" />
        <CategoryIcon source="././assets/categoryicons/3" text="파티룸" />
        <CategoryIcon source="././assets/categoryicons/4" text="스튜디오" />
        <CategoryIcon source="././assets/categoryicons/5" text="가진기기" />
        <CategoryIcon source="././assets/categoryicons/6" text="주방/생활 용품" />
      </CategoryLineTop>
      <CategoryLineBot>
        <CategoryIcon source="././assets/categoryicons/7" text="디지털기기" />
        <CategoryIcon source="././assets/categoryicons/8" text="가전 렌탈 승계" />
        <CategoryIcon source="././assets/categoryicons/9" text="차량 렌트/린스 승계" />
        <CategoryIcon source="././assets/categoryicons/10" text="구해요(공간)" />
        <CategoryIcon source="././assets/categoryicons/11" text="구해요(기타)" />
        <CategoryIcon source="././assets/categoryicons/12" text="교환해요" />
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

const CategoryIconImage = styled.img`
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
