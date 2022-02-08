import { palette } from 'lib/styles/palette';
import { FlexBetween, FlexJustifyCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function H2Box({ essential, children, ...rest }) {
  return (
    <H2BoxContainer {...rest}>
      <H2BoxInner>
        <h2>{children}</h2>
        {essential && <span>필수*</span>}
      </H2BoxInner>
    </H2BoxContainer>
  );
}

const H2BoxContainer = styled.div`
  ${FlexJustifyCenter};
`;
const H2BoxInner = styled.div`
  ${FlexBetween};
  width: 1250px;
  font-size: 30px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  color: ${palette.MainColor};

  span {
    position: relative;
    bottom: -36px;
    font-size: 20px;
    color: red;
  }
`;
export default H2Box;
