import React from "react";
import styled from "styled-components";
import { FavoriteIcon } from "../../../assets/icons";

function LikeViewer(props) {
	const style = props.isSmall
		? {
				iconSize: "17px",
				wrapper: { height: "15px" },
				count: { height: "20px", fontSize: "15px" },
		  }
		: {
				iconSize: "20px",
				wrapper: { height: "30px" },
				count: { height: "30px", fontSize: "20px" },
		  };
	return (
		<Wrapper style={style.wrapper}>
			<FavoriteIcon
				width={style.iconSize}
				height={style.iconSize}
				fill="6667ab"
			></FavoriteIcon>
			<Count style={style.count}>{props.like}</Count>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin: 0 2px 0 2px;
`;

const Count = styled.div`
	display: flex;
	align-items: flex-end;
`;

export default LikeViewer;
