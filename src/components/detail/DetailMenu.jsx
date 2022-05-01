import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function DetailMenu() {
	const menuName = ["상세정보", "위치", "후기", "판매자정보"];

	return (
		<DetailMenuContainer>
			{menuName.map((name) => (
				<Button key={name} width="25%" height="70px">
					{name}
				</Button>
			))}
		</DetailMenuContainer>
	);
}

const DetailMenuContainer = styled.article`
	margin: 25px 0;
	border-top: 1px solid ${palette.MainColor};
	border-bottom: 1px solid ${palette.MainColor};
`;
export default DetailMenu;
