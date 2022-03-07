import { FlexColumn, FlexJustifyCenter } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ApplyCheck(props) {
	const [dong, setDong] = useState(false);
	const [uei, setUei] = useState(false);
	const onDong = (e) => {
		setDong(!dong);
	};
	const onUei = (e) => {
		setUei(!uei);
	};
	useEffect(() => {
		if (dong && uei) {
			props.getAgreed(true);
		} else {
			props.getAgreed(false);
		}
	}, [dong, uei]);

	return (
		<ApplyCheckContainer>
			<ApplyCheckInner>
				<ApplyCheckForm>
					<label>
						<input type="checkbox" value={dong} onChange={onDong} /> 동의?
					</label>
					<label>
						<input type="checkbox" value={uei} onChange={onUei} /> 보감
					</label>
				</ApplyCheckForm>
			</ApplyCheckInner>
		</ApplyCheckContainer>
	);
}

const ApplyCheckContainer = styled.section`
	${FlexJustifyCenter}
	border-bottom: 1px solid #cbcbcb;
`;

const ApplyCheckInner = styled.div`
	width: 1250px;
	margin: 30px 0;
`;

const ApplyCheckForm = styled.form`
	${FlexColumn}

	label {
		font-size: 20px;
		margin-bottom: 10px;
	}
`;

export default ApplyCheck;
