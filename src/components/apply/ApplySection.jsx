import { FlexCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import H3Box from './H3Box';

function ApplySection({ name, children }) {
  return (
    <ApplySectionContainer>
      <Inner>
        <H3Box>{name}</H3Box>
        {children}
      </Inner>
    </ApplySectionContainer>
  );
}

const ApplySectionContainer = styled.section`
  ${FlexCenter};
  border-bottom: 1px solid #f6f6f6;
`;
export default ApplySection;
