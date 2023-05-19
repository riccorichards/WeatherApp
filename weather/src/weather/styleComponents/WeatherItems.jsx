import styled from "styled-components";

export const WeatherItems = styled.div`
box-shadow: 0 0 2px;
flex: 3;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

& p {
	font-size: 32px;
	font-family: 'Raleway', sans-serif;
	-webkit-box-reflect: below 1px linear-gradient(transparent, #0009);
    line-height: 18px;
    text-shadow: 0 0.2px 2px #ace1c0;
}

& pre {
	font-size: 18px;
	margin-top: 10px;
}

& img {
	width: 80px;
}
`;