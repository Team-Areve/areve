import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import { DetailContainer, FlexRow } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Vertical from "components/item/Vertical";
import { categoryList } from "lib/categoryList";

function DetailRecommendation({ item }) {
	const [similar, setSimilar] = useState([]);
	useEffect(() => {
		instance({ method: "get", url: `item/similar/${item}` }).then((res) => {
			setSimilar([...res.data]);
		});
	}, []);

	return (
		<DetailContainer>
			<DetailRecommendationH3>이건 어떤신가요?</DetailRecommendationH3>
			<DetailRecommendationList>
				{similar.map((v, i) => {
					return v.itemnumber === item ? (
						<></>
					) : (
						<a key={`Vertical_${v.itemnumber}`} href={v.itemnumber}>
							<Vertical
								item={v}
								cat={categoryList[v.category].text}
								large={false}
							/>
						</a>
					);
				})}
			</DetailRecommendationList>
		</DetailContainer>
	);
}

const DetailRecommendationH3 = styled.h3`
	font-size: 30px;
	color: ${palette.MainColor};
`;

const DetailRecommendationList = styled.ol`
	${FlexRow}
	margin-top: 20px;
`;

const DetailRecommendationItem = styled.div``;
export default DetailRecommendation;
