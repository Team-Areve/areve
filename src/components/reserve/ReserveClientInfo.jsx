import H3Box from "components/common/H3Box";
import H4 from "components/common/H4";
import Input from "components/common/Input";
import { FlexJustifyCenter, FlexRow } from "lib/styles/utilStyles";
import React from "react";
import styled from "styled-components";

function ReserveClientInfo({ setName, setPhone, setEmail, setDemand }) {
	return (
		<ReserveClientInfoContainer>
			<ReserveClientInfoBox>
				<H3Box variant="h3" height="50px">
					주문자 정보
				</H3Box>
				<ReserveClientInfoWrapper>
					<H4>예약자</H4>
					<Input
						width="550px"
						height="50px"
						borderRadius="10px"
						onChange={(e) => setName(e.target.value)}
					></Input>
				</ReserveClientInfoWrapper>
				<ReserveClientInfoWrapper>
					<H4>연락처</H4>
					<Input
						width="550px"
						height="50px"
						borderRadius="10px"
						onChange={(e) => setPhone(e.target.value)}
					></Input>
				</ReserveClientInfoWrapper>
				<ReserveClientInfoWrapper>
					<H4>이메일</H4>
					<Input
						width="550px"
						height="50px"
						borderRadius="10px"
						onChange={(e) => setEmail(e.target.value)}
					></Input>
				</ReserveClientInfoWrapper>
				<ReserveClientInfoWrapper>
					<H4>요청사항</H4>
					<Input
						width="550px"
						height="200px"
						borderRadius="10px"
						onChange={(e) => setDemand(e.target.value)}
					></Input>
				</ReserveClientInfoWrapper>
			</ReserveClientInfoBox>
		</ReserveClientInfoContainer>
	);
}
const ReserveClientInfoContainer = styled.section`
	${FlexJustifyCenter}
	margin-top: 30px;
`;

const ReserveClientInfoBox = styled.div`
	width: 750px;
	h4 {
		margin-top: 10px;
	}
`;

const ReserveClientInfoWrapper = styled.div`
	${FlexRow}
	justify-content: space-between;
	margin-bottom: 10px;
`;

export default ReserveClientInfo;
