import React from "react";
import styled from "styled-components";
import { palette } from "../../../lib/styles/palette";

function PriceViewer(props) {
	const fontSize = props.isSmall ? { fontSize: "15px" } : { fontSize: "20px" };
	const perHour = props.perHour ? "원/시간" : "원/일";
	return (
		<Price style={fontSize}>
			{props.price}
			{perHour}
		</Price>
	);
}

const Price = styled.div`
	height: 30px;
	display: flex;
	align-items: flex-end;
	color: ${palette.MainColor};
`;

export default PriceViewer;
