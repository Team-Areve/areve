import { palette } from "lib/styles/palette";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Horizontal from "components/item/Horizontal";
import instance from "lib/Request";
import { Link, useNavigate } from "react-router-dom";

function MainList() {
	const navigate = useNavigate();
	const [selected, setSelected] = useState(0);
	const [itemLists, setItemLists] = useState([]);
	const listManu = [
		{
			name: "인기",
		},
		{
			name: "최신",
		},
		{ name: "찜" },
	];

	const onSelect = (e) => {
		for (let i = 0; i < 3; i++) {
			if (listManu[i].name === e.target.innerText) {
				setSelected(i);
				if (i == 2 && !localStorage.getItem("token")) {
					navigate("/login");
					return;
				}
				getItem(i);
				break;
			}
		}
	};

	const getItem = async (selected) => {
		let x = await instance({
			method: "get",
			url: `/item/main/${selected}`,
		})
			.then((res) => {
				if (res.data.itemnumber) {
					setItemLists([res.data]);
					return;
				}
				setItemLists([...res.data]);
			})
			.catch(setItemLists([]));
	};

	useEffect(() => {
		getItem(selected);
	}, []);

	const onClickMore = () => {
		//추후 검색 결과 페이지로 이동
		navigate("/apply");
	};

	const selectedStyle = {
		backgroundColor: `${palette.MainColor}`,
		color: "white",
	};

	return (
		<MainListBlock>
			<MainListInner>
				<MainListMenu>
					{listManu.map((manu, idx) => (
						<ListItem
							key={`Menu_${idx}`}
							style={idx === selected ? selectedStyle : {}}
							onClick={onSelect}
						>
							{manu.name}
						</ListItem>
					))}
				</MainListMenu>
				<MainListItemBlock>
					{itemLists.map((v, i) => {
						return <Horizontal key={`Horizontal_${selected}_${i}`} item={v} />;
					})}
					<More onClick={onClickMore}>더 보기</More>
				</MainListItemBlock>
			</MainListInner>
		</MainListBlock>
	);
}

const MainListBlock = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 93px;
`;

const MainListInner = styled.div``;

const MainListMenu = styled.ul`
	display: flex;
	justify-content: flex-start;
	width: 980px;
	height: 50px;
	border-bottom: 1px solid ${palette.MainColor};
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 50px;
	font-size: 22px;

	:hover {
		background-color: ${palette.MainColor};
		color: white;
	}
`;

const MainListItemBlock = styled.ul`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const More = styled.button`
	text-align: center;
	width: 950px;
	height: 50px;
	line-height: 50px;
	vertical-align: middle;
	font-size: 25px;
	border-radius: 10px;
	border: 1px solid ${palette.MainColor};
`;

export default MainList;
