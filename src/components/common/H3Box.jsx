import { FlexJustifyCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function H3Box({ variant, name, width, height, children, ...rest }) {
  switch (variant) {
    // applypage
    case 'h3*':
      return (
        <ApplySectionContainer>
          <Inner>
            <H3Container {...rest}>
              <h3>{name}</h3>
              <span>*</span>
            </H3Container>
            {children}
          </Inner>
        </ApplySectionContainer>
      );
    // reservepage
    case 'h3':
      return (
        <H3BoxContainer width={width} height={height} {...rest}>
          <h3>{children}</h3>
        </H3BoxContainer>
      );

    default:
      break;
  }
}

const ApplySectionContainer = styled.section`
  ${FlexJustifyCenter};
  width: 1250px;
  border-bottom: 1px solid #cbcbcb;
`;

const H3Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  width: 150px;
  height: 50px;
  span {
    color: red;
  }
`;

const H3BoxContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  font-size: 25px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export default H3Box;
