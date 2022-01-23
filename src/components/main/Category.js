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
