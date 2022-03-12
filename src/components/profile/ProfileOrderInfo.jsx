import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function ProfileOrderInfo({ order }) {
	const confirmTime = new Date(order.confirmTime);

	return (
		<Layout>
			<tbody>
				<tr>
					<TdTitle>구매자명</TdTitle>
					<TdData>{order.buyerName}</TdData>
				</tr>
				<tr>
					<TdTitle>이메일</TdTitle>
					<TdData>{order.buyerEmail}</TdData>
				</tr>
				<tr>
					<TdTitle>예약한 시간</TdTitle>
					<TdData>
						{order.startTime}부터
						<br />
						{order.endTime}까지
					</TdData>
				</tr>
				<tr>
					<TdTitle>예약 완료 시간</TdTitle>
					<TdData>{confirmTime.toLocaleString()}</TdData>
				</tr>
			</tbody>
		</Layout>
	);
}

const Layout = styled.table`
	width: 500px;
	height: 180px;
	font-size: 17px;
	margin-top: 10px;
`;

const TdTitle = styled.td`
	font-weight: bold;
`;

const TdData = styled.td`
	//color: ${palette.MainColor};
`;

export default ProfileOrderInfo;
