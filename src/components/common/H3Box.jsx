import React from 'react';
import styled from 'styled-components';

function H3Box({ width, height, children, ...rest }) {
  return (
    <H3BoxContainer width={width} height={height} {...rest}>
      <h3>{children}</h3>
    </H3BoxContainer>
  );
}

const H3BoxContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  font-size: 25px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default H3Box;
