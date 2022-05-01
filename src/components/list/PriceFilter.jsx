import Input from "components/common/Input";
import useOutSideClick from "hooks/useOutSideClick";
import { palette } from "lib/styles/palette";
import { FlexAlignCenter, FlexRow } from "lib/styles/utilStyles";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PriceFilterList = [
	{
		text: "전체",
		value: "0",
	},
	{
		text: "~100,000원 미만",
		value: "1",
	},
	{
		text: "100,000원 ~ 200,000원",
		value: "2",
	},
	{
		text: "200,000원 ~ 300,000원",
		value: "3",
	},
	{
		text: "300,000원 이상",
		value: "4",
	},
];

function PriceFilter({ isOpen, onToggle, lower, upper, getLower, getUpper }) {
	const { targetEl } = useOutSideClick(isOpen, onToggle);
	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		if (selected === -1) {
			return;
		} else if (selected === "0") {
			getLower("");
			getUpper("");
		} else if (selected === "1") {
			getLower("0");
			getUpper("99999");
		} else if (selected === "2") {
			getLower("100000");
			getUpper("199999");
		} else if (selected === "3") {
			getLower("200000");
			getUpper("299999");
		} else if (selected === "4") {
			getLower("300000");
			getUpper("");
		}
	}, [selected]);

	const onLower = (e) => {
		if (isNaN(e.target.value)) {
			alert("숫자만 입력해주세요");
			getLower("");
			return;
		}
		getLower(e.target.value);
	};

	const onUpper = (e) => {
		if (isNaN(e.target.value)) {
			alert("숫자만 입력해주세요");
			getUpper("");
			return;
		}
		getUpper(e.target.value);
	};

	return (
		<PriceFilterContainer ref={targetEl}>
			<PriceFilterInner>
				<PriceInputForm>
					<Input
						width="150px"
						value={lower}
						onChange={(e) => onLower(e)}
					></Input>
					　~　
					<Input
						width="150px"
						value={upper}
						onChange={(e) => getUpper(e.target.value)}
					></Input>
				</PriceInputForm>
				<PriceCheckForm>
					{PriceFilterList.map(({ text, value }) => (
						<label key={text}>
							<Input
								type="radio"
								name="price"
								value={value}
								onChange={(e) => {
									setSelected(e.target.value);
								}}
							/>{" "}
							{text}
						</label>
					))}
				</PriceCheckForm>
			</PriceFilterInner>
		</PriceFilterContainer>
	);
}

const PriceFilterContainer = styled.div`
	position: absolute;
	top: 330px;
	font-size: 16px;
	line-height: 24px;
	transform: translateY(-20px);
	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
	border: 1px solid ${palette.grayLight};
	background-color: white;
	width: 390px;
	height: 250px;
	border-radius: 10px;
	${FlexAlignCenter};
	justify-content: center;
	z-index: 100;
`;

const PriceFilterInner = styled.div``;

const PriceInputForm = styled.form`
	${FlexRow}
	font-size: 20px;
	line-height: 50px;
	vertical-align: middle;
`;

const PriceCheckForm = styled.form`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	margin-top: 10px;

	Input {
		margin-top: 10px;
		width: 15px;
		height: 15px;
	}
`;
export default PriceFilter;
