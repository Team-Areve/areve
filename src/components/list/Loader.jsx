import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderWrap = styled.div`
	width: 1250px;
	height: 100px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

const Loader = () => {
	return (
		<LoaderWrap>
			<ReactLoading type="spin" color="#6667ab" />
		</LoaderWrap>
	);
};

export default memo(Loader);
