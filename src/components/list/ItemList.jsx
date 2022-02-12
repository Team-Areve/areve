import Vertical from 'components/item/Vertical';
import { FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function ItemList() {
  return (
    <ItemListContainer>
      <ItemListInner>
        <Vertical></Vertical>
      </ItemListInner>
    </ItemListContainer>
  );
}

const ItemListContainer = styled.section`
  ${FlexJustifyCenter}
  margin-top: 30px;
`;
const ItemListInner = styled.div`
  width: 1250px;
`;

export default ItemList;
