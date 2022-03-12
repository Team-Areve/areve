import Horizontal from "components/item/Horizontal";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/common/Button";
import ProfileReviewWriteModal from "./ProfileReviewWriteModal";
import ProfileOrderInfo from "./ProfileOrderInfo";
import { palette } from "lib/styles/palette";

function ProfileReviewListItem({ item, order, isLiked }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Layout>
			<Horizontal item={item} large={false} link={false} isLiked={isLiked} />
			<ProfileOrderInfo order={order} />
			<Div>
				{order.reviewWritten ? (
					<Text>작성완료</Text>
				) : (
					<Button
						variant="primary"
						width="150px"
						height="50px"
						onClick={() => {
							setIsOpen(true);
						}}
						style={{ fontSize: "20px" }}
					>
						작성하기
					</Button>
				)}
			</Div>
			{isOpen ? (
				<ProfileReviewWriteModal
					open={isOpen}
					onToggle={() => {
						setIsOpen(false);
					}}
					item={item}
					order={order}
				/>
			) : (
				<></>
			)}
		</Layout>
	);
}

const Layout = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	border-bottom: 1px solid #cdcdcd; ;
`;

const Text = styled.div`
	width: 150px;
	height: 50px;
	font-size: 20px;
	border-radius: 4px;
	border: 1px solid ${palette.MainColor};
	text-align: center;
	line-height: 50px;
	vertical-align: middle;
`;

const Div = styled.div`
	height: 180px;
	width: 150px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export default ProfileReviewListItem;
