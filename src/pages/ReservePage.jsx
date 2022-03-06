import React, { useState, useEffect } from "react";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ReserveInfo from "components/reserve/ReserveInfo";
import ReserveCaution from "components/reserve/ReserveCaution";
import ReserveOrderInfo from "components/reserve/ReserveOrderInfo";
import ReserveClientInfo from "components/reserve/ReserveClientInfo";
import ReserveCheck from "components/reserve/ReserveCheck";
import ReservePay from "components/reserve/ReservePay";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import instance from "lib/Request";
import styled from "styled-components";
import { FlexRow } from "lib/styles/utilStyles";

function ReservePage() {
	const { itemNum } = useParams();
	const [item, setItem] = useState("");
	useEffect(() => {
		instance({ method: "get", url: `/item/${itemNum}` }).then((res) => {
			setItem(res.data);
			console.log(res.data);
		});
	}, []);

	const [searchParams, setSearchParams] = useSearchParams();
	const startTime = searchParams.get("start");
	const endTime = searchParams.get("end");
	const price = searchParams.get("price");
	console.log(startTime, endTime, price);

	return item !== "" ? (
		<PageLayout>
			<H2Box>예약하기</H2Box>
			<ReserveContainer>
				<ReserveMain>
					<ReserveInfo item={item} />
					<ReserveCaution />
					<ReserveOrderInfo start={startTime} end={endTime} price={price} />
					<ReserveClientInfo />
					<ReserveCheck />
				</ReserveMain>
				<ReserveAside>
					<ReservePay />
				</ReserveAside>
			</ReserveContainer>
		</PageLayout>
	) : (
		<></>
	);
}

const ReserveContainer = styled.div`
	${FlexRow}
`;

const ReserveMain = styled.section`
	width: 750px;
	margin-right: 50px;
`;

const ReserveAside = styled.aside``;

export default ReservePage;
