import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryItem>
        <button>
          <i></i>
          <div>주거용</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>사무실</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>회의실</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>연습실</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>세미나실</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>파티룸</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>펜션</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>호텔</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>모텔</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>차량 렌트/린스 승계</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>가전</div>
        </button>
      </CategoryItem>

      <CategoryItem>
        <button>
          <i></i>
          <div>스튜디오</div>
        </button>
      </CategoryItem>
    </CategoryContainer>
  );
};

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
`;

export default Category;
