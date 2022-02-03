import { FlexCenter, Inner } from 'lib/styles/utilStyles';
import React from 'react';
import styled from 'styled-components';
import ApplyH3Box from './ApplyH3Box';

function ApplySection({ name, children }) {
  return (
    <ApplySectionContainer>
      <Inner>
        <ApplyH3Box>{name}</ApplyH3Box>
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
