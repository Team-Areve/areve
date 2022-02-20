import React from "react";
import { PageLayout } from "lib/styles/utilStyles";
import H2Box from "components/common/H2Box";
import ReserveInfo from "components/reserve/ReserveInfo";
import ReserveCaution from "components/reserve/ReserveCaution";
import ReserveOrderInfo from "components/reserve/ReserveOrderInfo";
import ReserveClientInfo from "components/reserve/ReserveClientInfo";

function ReservePage() {
	return (
		<PageLayout>
			<H2Box>예약하기</H2Box>
			<ReserveInfo />
			<ReserveCaution />
			<ReserveOrderInfo />
			<ReserveClientInfo />
		</PageLayout>
	);
}

export default ReservePage;
