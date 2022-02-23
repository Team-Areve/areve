import instance from "lib/Request";
import { FlexJustifyCenter, FlexRow } from "lib/styles/utilStyles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewTableColumn from "./ReviewTableColumn";

function ReviewTable() {
	const [positive, setPositive] = useState([]);
	const [negative, setNegative] = useState([]);
	useEffect(() => {
		instance({ method: "get", url: "review/token" }).then((res) => {
			let p = [];
			let n = [];
			for (let data of res.data) {
				if (data.score < 3) {
					n.push(data);
				} else {
					p.push(data);
				}
			}

			if (n.length !== 0) setNegative(n);
			else
				setNegative([
					{ score: "-", content: "아무 리뷰도 없네요...", reviewnumber: -1 },
				]);

			if (p.length !== 0) setPositive(p);
			else
				setPositive([
					{ score: "-", content: "아무 리뷰도 없네요...", reviewnumber: -2 },
				]);
		});
	}, []);

	return (
		<ReviewTableContainer>
			<ReviewTableInner>
				<ReviewTableColumn review={positive}>긍정적 평가 :)</ReviewTableColumn>
				<ReviewTableColumn review={negative}>부정적 평가 :(</ReviewTableColumn>
			</ReviewTableInner>
		</ReviewTableContainer>
	);
}

const ReviewTableContainer = styled.section`
	${FlexJustifyCenter}
`;

const ReviewTableInner = styled.div`
	${FlexRow}
	justify-content:space-between;
	width: 1250px;
`;

export default ReviewTable;
