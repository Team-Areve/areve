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
	const [searchParams, setSearchParams] = useSearchParams();
	const startTime = searchParams.get("start");
	const endTime = searchParams.get("end");
	const timeDiff = searchParams.get("dif");
	const price = searchParams.get("price");

	const { itemNum } = useParams();
	const [user, setUser] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [demand, setDemand] = useState("");
	const [item, setItem] = useState("");
	const [policyAgreed, setPolicyAgreed] = useState(false);

	useEffect(() => {
		instance({ method: "get", url: `/item/${itemNum}` }).then((res) => {
			setItem(res.data);
		});

		instance.defaults.headers.common[
			"Authorization"
		] = `Token ${localStorage.getItem("token")}`;
		instance({ method: "get", url: "user/token" }).then((res) => {
			setUser(res.data);
		});
	}, []);

	useEffect(() => {
		setName(user.name);
		setPhone(user.phonenumber);
		setEmail(user.email);
	}, [user]);

	const navigate = useNavigate();
	const onReserve = () => {
		if (policyAgreed === false) {
			alert("서비스 동의 사항에 동의해주세요.");
			return;
		}

		instance.defaults.headers.common[
			"Authorization"
		] = `Token ${localStorage.getItem("token")}`;
		instance({
			method: "post",
			url: "makeorder/",
			data: {
				seller: item.writer,
				itemnumber: item.itemnumber,
				startTime: startTime,
				endTime: endTime,
				price: price,
				name: name,
				phone: phone,
				email: email,
				demand: demand,
			},
		}).then((res) => {
			navigate(`/item/${item.itemnumber}`);
		});
	};

	return item !== "" ? (
		<PageLayout>
			<H2Box>예약하기</H2Box>
			<ReserveContainer>
				<ReserveMain>
					<ReserveInfo item={item} />
					<ReserveOrderInfo start={startTime} end={endTime} price={price} />
					<ReserveClientInfo
						name={name}
						setName={setName}
						phone={phone}
						setPhone={setPhone}
						email={email}
						setEmail={setEmail}
						setDemand={setDemand}
					/>
					<ReserveCaution />
					<ReserveCheck getAgreed={(value) => setPolicyAgreed(value)} />
				</ReserveMain>
				<ReserveAside>
					<ReservePay
						startDate={startTime}
						endDate={endTime}
						price={item.price}
						timeDiff={timeDiff}
						perHour={item.pricePerHour}
						resultPrice={price}
						onReserve={onReserve}
					/>
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
