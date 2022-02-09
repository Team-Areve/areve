import H3Box from 'components/common/H3Box';
import Input from 'components/common/Input';
import TextLength from 'components/common/TextLength';
import useForm from 'hooks/useForm';
import { FlexColumn, FlexRow } from 'lib/styles/utilStyles';
import React, { useState } from 'react';
import styled from 'styled-components';

function ApplyCaution() {
  const [caution, setCaution] = useState({
    first: '',
    second: '',
    third: '',
    four: '',
    five: '',
  });

  const { onChange } = useForm(caution, setCaution);

  return (
    <H3Box variant="h3*" name="주의사항">
      <ApplyCautionInner>
        {Object.keys(caution).map((sequence, index) => (
          <ApplyCautionBox key={index}>
            <ApplyCautionInput
              width="1020px"
              name={sequence}
              height="50px"
              value={caution[sequence]}
              key={sequence}
              onChange={onChange}
            />
            <TextLength
              currentLen={caution[sequence].length}
              maxLen="40"
              height="50px"
              key={index}
            ></TextLength>
          </ApplyCautionBox>
        ))}
      </ApplyCautionInner>
    </H3Box>
  );
}

const ApplyCautionInput = styled(Input)`
  margin-bottom: 10px;
`;

const ApplyCautionInner = styled.div`
  ${FlexColumn};
`;

const ApplyCautionBox = styled.div`
  ${FlexRow}
`;

export default ApplyCaution;
