import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

function DetailMenu() {
  const menuName = ['상세정보', '주의사항', '위치', '판매자정보'];

  return (
    <DetailMenuContainer>
      {menuName.map((name) => (
        <Button key={name} width="25%" height="100%">
          {name}
        </Button>
      ))}
    </DetailMenuContainer>
  );
}

const DetailMenuContainer = styled.section`
  margin-top: 100px;
  height: 70px;
  border: 1px solid black;
`;
export default DetailMenu;
