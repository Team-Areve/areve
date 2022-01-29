import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function H2Container({ children, ...rest }) {
  return (
    <H2Inner {...rest}>
      <H2Wrapper>
        <h2>{children}</h2>
      </H2Wrapper>
    </H2Inner>
  );
}

const H2Inner = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
`;
const H2Wrapper = styled.div`
  width: 1250px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  color: ${palette.MainColor};
  display: flex;
  justify-content: flex-start;
`;
export default H2Container;
