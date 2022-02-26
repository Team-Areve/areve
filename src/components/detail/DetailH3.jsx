import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function DetailH3({ children }) {
  return <DetailH3wrapper>ㅁ{children}</DetailH3wrapper>;
}

const DetailH3wrapper = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: ${palette.MainColor};
`;

export default DetailH3;
