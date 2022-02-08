import { FlexAlignCenter } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';

function TextLength({ width, height, currentLen, maxLen }) {
  return (
    <TextLengthBox width={width} height={height}>
      <span>{currentLen}</span>
      <span>/{maxLen}</span>
    </TextLengthBox>
  );
}

const TextLengthBox = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};

  ${FlexAlignCenter};
  font-size: 20px;
`;
export default TextLength;
