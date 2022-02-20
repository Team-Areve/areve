import React from "react";
import styled from "styled-components";
import { Star } from "../../../assets/icons";

function RatingViewer(props) {
	const style = props.isSmall
		? {
				iconSize: "17px",
				wrapper: { height: "15px" },
				rate: { height: "20px", fontSize: "15px" },
		  }
		: {
				iconSize: "22px",
				wrapper: { height: "30px" },
				rate: { height: "30px", fontSize: "20px" },
		  };
	return (
		<Wrapper style={style.wrapper}>
			<Star
				width={style.iconSize}
				height={style.iconSize}
				fill="#FFB800"
			></Star>
			<Rate style={style.rate}>{props.rating}</Rate>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin: 0 2px 0 2px;
`;

const Rate = styled.div`
	display: flex;
	align-items: flex-end;
`;

export default RatingViewer;
