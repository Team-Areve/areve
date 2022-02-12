import { categoryList } from "lib/categoryList.js";
import { FlexJustifyCenter } from "lib/styles/utilStyles.js";
import React from "react";
import styled from "styled-components";
import CategoryIcon from "./CategoryIcon.jsx";

function Category() {
	return (
		<CategoryContainer>
			<CategoryInner>
				{categoryList.map((categoryItem) => (
					<CategoryIcon categoryItem={categoryItem} key={categoryItem.text} />
				))}
			</CategoryInner>
		</CategoryContainer>
	);
}

const CategoryContainer = styled.section`
	${FlexJustifyCenter}
	margin-top: 50px;
`;

const CategoryInner = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 1250px;
`;

export default Category;
