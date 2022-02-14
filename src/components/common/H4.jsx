import React from 'react';
import styled from 'styled-components';

function H4({ variant, name, width, height, children, ...rest }) {
  return (
    <H4Box>
      <h4>{children}</h4>
      <span>*</span>
    </H4Box>
  );
}

const H4Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  span {
    color: red;
  }
`;

export default H4;
