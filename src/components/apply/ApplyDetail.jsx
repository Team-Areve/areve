import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import TextLength from 'components/common/TextLength';
import { FlexColumn } from 'lib/styles/utilStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

function ApplyDetail() {
  const [detail, setDetail] = useState('');
  const onChange = (e) => {
    setDetail(e.target.value);
  };
  return (
    <H3Box variant="h3*" name="상세설명">
      <ApplyDetailBinder>
        <Input
          width="1080px"
          height="230px"
          name="detail"
          value={detail}
          onChange={onChange}
        />
        <TextLengthBox>
          <TextLength currentLen={detail.length} maxLen="500"></TextLength>
        </TextLengthBox>
      </ApplyDetailBinder>
    </H3Box>
  );
}

const ApplyDetailBinder = styled.div`
  ${FlexColumn}
`;

const TextLengthBox = styled.div`
  position: relative;
  left: 1016px;
`;

export default ApplyDetail;
