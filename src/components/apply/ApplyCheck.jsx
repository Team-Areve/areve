import { FlexJustifyCenter, Inner } from "lib/styles/utilStyles";
import React, { useState } from "react";
import styled from "styled-components";

function ApplyCheck(props) {
	const [dong, setDong] = useState(false);
	const [uei, setUei] = useState(false);
	const onDong = (e) => {
		setDong(!dong);
		if (dong & uei) {
			props.getAgreedPolicy(true);
		}
	};
	const onUei = (e) => {
		setUei(!uei);
		if (dong & uei) {
			props.getAgreedPolicy(true);
		}
	};
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
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 10px;
	}
`;

export default ApplyCheck;
