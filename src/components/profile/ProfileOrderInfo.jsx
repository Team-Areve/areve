import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function ProfileOrderInfo({ order }) {
	const confirmTime = new Date(order.confirmTime);

	return (
		<Layout>
			<tbody>
				<tr>
					<td>구매자명</td>
					<TdData>{order.buyerName}</TdData>
				</tr>
				<tr>
					<td>이메일</td>
					<TdData>{order.buyerEmail}</TdData>
				</tr>
				<tr>
					<td>예약한 시간</td>
					<TdData>
						{order.startTime}부터
						<br />
						{order.endTime}까지
					</TdData>
				</tr>
				<tr>
					<td>예약 완료 시간</td>
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
`;

const TdData = styled.td`
	color: ${palette.MainColor};
`;

export default ProfileOrderInfo;
