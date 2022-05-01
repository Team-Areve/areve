import H3Box from "components/common/H3Box";
import { FlexColumn, FlexJustifyCenter } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ReserveCheck(props) {
	const [one, setOne] = useState(false);
	const [two, setTwo] = useState(false);
	const [three, setThree] = useState(false);

	useEffect(() => {
		if (one && two && three) {
			props.getAgreed(true);
		} else {
			props.getAgreed(false);
		}
	}, [one, two, three]);

	return (
		<ReserveCheckContainer>
			<H3Box variant="h3" height="50px" width="750px">
				서비스 동의
			</H3Box>
			<ReserveCheckInner>
				<label>
					<input type="checkbox" onChange={() => setOne(!one)} /> 위 공간의
					예약조건 확인 및 결제 진행 동의 (필수)
				</label>
				<label>
					<input type="checkbox" onChange={() => setTwo(!two)} /> 개인정보 제3자
					제공 동의 (필수)
				</label>
				<label>
					<input type="checkbox" onChange={() => setThree(!three)} /> 개인정보
					수집 및 이용 동의 (필수)
				</label>
			</ReserveCheckInner>
		</ReserveCheckContainer>
	);
}

const ReserveCheckContainer = styled.section`
	width: 750px;
	margin-top: 30px;
`;

const ReserveCheckInner = styled.form`
	${FlexColumn}
	margin-top: 40px;

	label {
		font-size: 20px;
		margin-bottom: 40px;
	}
`;

export default ReserveCheck;
