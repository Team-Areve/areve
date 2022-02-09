import React from 'react';
import styled from 'styled-components';

function Select({ width, height, children, borderRadius, ...rest }) {
  return (
    <SelectStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </SelectStyled>
  );
}
const SelectStyled = styled.select`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: 20px;
  border: 1px solid #6667ab;
`;

export default Select;
