import { palette } from "lib/styles/palette";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Input({
	width,
	height,
	isFocus,
	borderRadius = "4px",
	type = "text",
	...rest
}) {
	const inputRef = useRef(null);

	useEffect(() => {
		if (isFocus) {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}
	}, [isFocus]);

	return (
		<InputStyled
			{...rest}
			borderRadius={borderRadius}
			width={width}
			height={height}
			ref={inputRef}
			type={type}
		/>
	);
}

const InputStyled = styled.input`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border: 1px solid ${palette.MainColor};
	padding: 5.5px 12px 5.5px 10px;
	border-radius: ${({ borderRadius }) => borderRadius};
	outline: none;
	font-size: 20px;
`;

export default Input;
