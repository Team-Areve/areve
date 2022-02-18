import React from "react";
import styled from "styled-components";
import { ReviewIcon } from "../../../assets/icons";
import { palette } from "../../../lib/styles/palette";

function ReviewViewer(props) {
	const style = props.isSmall
		? {
				iconSize: "17px",
				wrapper: { height: "15px" },
				counter: { height: "20px", fontSize: "15px" },
		  }
		: {
				iconSize: "20px",
				wrapper: { height: "30px" },
				counter: { height: "30px", fontSize: "20px" },
		  };
	return (
		<Wrapper style={style.wrapper}>
			<ReviewIcon
				width={style.iconSize}
				height={style.iconSize}
				fill={palette.MainColor}
			></ReviewIcon>
			<Count style={style.counter}>{props.review}</Count>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin: 0 0 0 2px;
`;

const Count = styled.span`
	display: flex;
	align-items: flex-end;
`;

export default ReviewViewer;
