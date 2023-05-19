import { useContext } from "react";
import { styled } from "styled-components";
import Context from "./Context";
const InputField = styled.input`
padding: 1.5%;
border-radius: 3.5px;
border: 1px solid black;
box-shadow: 0 0 2.5px;
font-family: 'Wix Madefor Display', sans-serif;
letter-spacing: 1.5px;

`;
const Search = () => {

	const getInput = useContext(Context)

	const inputValue = getInput.inputvalue
	const setInputValue = getInput.setInputValue
	
	const handlerInput = e => {
		setInputValue(e.target.value)
	}
	return (
		<>
			<InputField  onChange={handlerInput} value={inputValue}/>
		</>
	)
}

export default Search;