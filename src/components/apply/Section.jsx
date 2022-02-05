import React from 'react';
import styled from 'styled-components';

function Section({ ...rest }) {
  return <SectionContainer></SectionContainer>;
}

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  label {
    display: block;
    margin-bottom: 10px;
  }
`;

export default Section;
