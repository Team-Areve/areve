import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

function DetailMenu() {
  const menuName = ['상세정보', '주의사항', '위치', '판매자정보'];

  return (
    <DetailMenuContainer>
      {menuName.map((name) => (
        <Button key={name} width="25%" height="70px">
          {name}
        </Button>
      ))}
    </DetailMenuContainer>
  );
}

const DetailMenuContainer = styled.article`
  margin: 25px 0;
  border: 1px solid black;
`;
export default DetailMenu;
