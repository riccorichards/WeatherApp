import { useContext } from "react";
import { styled } from "styled-components";
import Context from "./Context";

const StyleBtn = styled.button`


padding: 1.5%;
letter-spacing: 1.5px;
border-radius: 3.5px;
border: solid 1px black;
transition: all .2s ease-in;
cursor: pointer;
font-family: 'Wix Madefor Display', sans-serif;

&:hover {
	box-shadow: 0 0 5px;
}
`;


const ButtonSearch = () => {
	const getValues = useContext(Context)

	const inputValue = getValues.inputValue
	const setCountry = getValues.setCountry

	const fixedValue = () => {
		if (inputValue !== "") {
			setCountry(inputValue);
	}
}

	return (
		<>
			<StyleBtn onClick={() => fixedValue()}> 
				Search
			</StyleBtn>
		</>
	)
}

export default ButtonSearch;