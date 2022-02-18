import SearchInput from 'components/common/SearchInput';
import React from 'react';
import styled from 'styled-components';

function LocationSearchBox() {
  return (
    <LocationSearchBoxContainer>
      <SearchInput width="400px" height="50px"></SearchInput>
    </LocationSearchBoxContainer>
  );
}

const LocationSearchBoxContainer = styled.div`
  /* width: 500px;
  height: 400px; */
`;

export default LocationSearchBox;
