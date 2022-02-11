import React from 'react';
import styled from 'styled-components';

function Select({ width, height, children, borderRadius, fontSize, ...rest }) {
  return (
    <SelectStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
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
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
`;

export default Select;
