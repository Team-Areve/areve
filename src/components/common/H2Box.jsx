import { palette } from 'lib/styles/palette';
import { FlexCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function H2Box({ children, ...rest }) {
  return (
    <H2BoxContainer {...rest}>
      <H2BoxInner>
        <h2>{children}</h2>
      </H2BoxInner>
    </H2BoxContainer>
  );
}

const H2BoxContainer = styled.div`
  ${FlexCenter};
`;
const H2BoxInner = styled.div`
  width: 1250px;
  font-size: 30px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  color: ${palette.MainColor};
  display: flex;
  justify-content: flex-start;
`;
export default H2Box;
