import transitions from "assets/styles/transitions";
import React from "react";
import styled from "styled-components";
import { Close } from "assets/icons";

function ModalTemplate({
	width,
	height,
	isModal,
	onToggleModal,
	children,
	...rest
}) {
	return (
		<ModalTemplateWrapper onMouseDown={onToggleModal} {...rest}>
			<Inner
				onMouseDown={(e) => {
					console.log(e);
					e.stopPropagation();
				}}
				width={width}
				height={height}
				isModal={isModal}
			>
				<CloseBtn onClick={onToggleModal}>
					<Close width="30px" height="30px"></Close>
				</CloseBtn>
				{children}
			</Inner>
			<Background />
		</ModalTemplateWrapper>
	);
}

const ModalTemplateWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
`;

const Inner = styled.div`
	position: absolute;
	z-index: 9999;
	background-color: white;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: 12px;
	animation: ${transitions.fadeIn} 0.4s ease-in-out;
	position: relative;
`;

const CloseBtn = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0px;
`;

const Background = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	background-color: black;
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0.4;
`;

export default ModalTemplate;
