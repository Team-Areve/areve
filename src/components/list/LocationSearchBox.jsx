import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';

function LocationSearchBox() {
  return (
    <LocationSearchBoxContainer>
      <Input width="200px" height="50px"></Input>
    </LocationSearchBoxContainer>
  );
}

const LocationSearchBoxContainer = styled.div`
  /* width: 500px;
  height: 400px; */
`;

export default LocationSearchBox;
