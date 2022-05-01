import { palette } from "lib/styles/palette";
import styled from "styled-components";

function LocationSearchSuggestion({
	addressList,
	getText,
	onToggle,
	getLocation,
}) {
	const onTextSet = (loc, sigungu) => {
		getText(loc);
		getLocation(sigungu);
		onToggle();
	};

	const render = () => {
		let renderText = [];
		let res = [];
		let idx = 0;
		for (let v of addressList) {
			if (
				v.siNm === undefined &&
				v.sggNm === undefined &&
				v.emdNm === undefined
			) {
				continue;
			}
			let temp = v.siNm + " " + v.sggNm + " " + v.emdNm;
			if (!renderText.includes(temp)) {
				res.push(
					<li key={`addressList${idx}`}>
						<button onClick={() => onTextSet(temp, v.emdNm)}>{temp}</button>
					</li>
				);
				renderText.push(temp);
				idx += 1;
			}
		}
		return res;
	};

	return (
		<LocationSearchSuggestionContainer>
			<LocationSearchSuggestionInner>{render()}</LocationSearchSuggestionInner>
		</LocationSearchSuggestionContainer>
	);
}

const LocationSearchSuggestionContainer = styled.div`
	z-index: 100;
	font-size: 16px;
	position: absolute;
	top: 300px;
	line-height: 24px;
	//transform: translateY(-20px);
	//transition: opacity 1s ease, transform 1 ease, visibility 1s;
	border: 1px solid ${palette.grayLight};
	background-color: white;
	width: 400px;
	height: 200px;
	padding: 20px 0 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const LocationSearchSuggestionInner = styled.ol``;

export default LocationSearchSuggestion;
