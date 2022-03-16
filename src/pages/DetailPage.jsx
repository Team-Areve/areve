import DetailImg from "components/detail/DetailImg";
import DetailLocation from "components/detail/DetailLocation";
import DetailMenu from "components/detail/DetailMenu";
import DetailRecommendation from "components/detail/DetailRecommendation";
import DetailReserveBox from "components/detail/DetailReserveBox";
import DetailReview from "components/detail/DetailReview";
import DetailSeller from "components/detail/DetailSeller";
import DetailText from "components/detail/DetailText";
import DetailTitle from "components/detail/DetailTitle";
import instance from "lib/Request";
import { FlexRow, PageLayout } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetailPage() {
	const { itemNum } = useParams();
	const [item, setItem] = useState("");

	useEffect(() => {
		instance({ method: "get", url: `/item/${itemNum}` }).then((res) => {
			setItem(res.data);
		});
	}, [itemNum]);

	return item !== "" ? (
		<PageLayout>
			<DetailTitle
				title={item.title}
				category={item.category}
				sigungu={item.sigungu}
				itemNum={itemNum}
				item={item}
			></DetailTitle>
			<DetailContainer>
				<DetailMain>
					<DetailImg
						img={[
							item.image1,
							item.image2,
							item.image3,
							item.image4,
							item.image5,
							item.image6,
							item.image7,
							item.image8,
						]}
						cntImg={item.cntImg}
					/>
					<DetailMenu />
					<DetailText id="content" content={item.content} />
					<DetailLocation id="location" />
					<DetailReview
						id="review"
						item={item.itemnumber}
						count={item.reviews}
						rate={item.rate}
					/>
					<DetailSeller
						id="seller"
						seller={item.writerName}
						sellerNum={item.writer}
					/>
					<DetailRecommendation item={item.itemnumber} />
				</DetailMain>
				<DetailReserveBoxPath>
					<DetailReserveBox
						minDate={item.startDate}
						maxDate={item.endDate}
						price={item.price}
						pricePerHour={item.pricePerHour}
						rate={item.rate}
						reviews={item.reviews}
						item={item}
					></DetailReserveBox>
				</DetailReserveBoxPath>
			</DetailContainer>
		</PageLayout>
	) : (
		<></>
	);
}

const DetailContainer = styled.div`
	${FlexRow}
`;
const DetailMain = styled.section`
	width: 750px;
	margin-right: 50px;
`;

const DetailReserveBoxPath = styled.aside``;

export default DetailPage;
