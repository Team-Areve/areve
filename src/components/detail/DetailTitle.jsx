import { Delete, EditIcon } from "assets/icons";
import { categoryList } from "lib/categoryList";
import instance from "lib/Request";
import { palette } from "lib/styles/palette";
import { FlexJustifyCenter, FlexRow } from "lib/styles/utilStyles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DetailTitle(props) {
	const navigate = useNavigate();
	const onEdit = () => {
		instance({ method: "get", url: `modify/${props.itemNum}` }).then((res) => {
			console.log(res);
			window.location.replace(`/item/${props.itemNum}`);
		});
	};

	const onDelete = () => {
		instance({ method: "get", url: `delete/${props.itemNum}` }).then((res) => {
			console.log(res);
			navigate("/");
		});
	};

	return (
		<>
			<DetailName>
				{props.title}
				{props.isMine ? (
					<Btns>
						{/* <button onClick={onEdit}>
							<EditIcon width="40px" height="40px" fill={palette.gray} />
						</button> */}
						<button onClick={onDelete}>
							<Delete width="40px" height="40px" fill={palette.gray} />
						</button>
					</Btns>
				) : (
					<></>
				)}
			</DetailName>
			<DetailCateoryList>
				<DetailCategory>{categoryList[props.category].text}</DetailCategory>
				<DetailCategory>{props.sigungu}</DetailCategory>
			</DetailCateoryList>
		</>
	);
}
const DetailName = styled.h2`
	margin-top: 70px;
	font-size: 40px;
	display: flex;
	justify-content: space-between;
`;

const Btns = styled.div`
	width: 80px;
`;

const DetailCateoryList = styled.ul`
	${FlexRow}
`;
const DetailCategory = styled.li`
	${FlexJustifyCenter};
	align-items: center;
	padding: 0 30px 0 30px;
	height: 50px;
	margin-top: 40px;
	margin-right: 20px;
	font-size: 30px;
	border: 1px solid ${palette.MainColor};
`;
export default DetailTitle;
