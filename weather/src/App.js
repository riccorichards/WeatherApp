import Weather from './weather/Weather';
import styled from 'styled-components';

const MainContainer = styled.main`
background-color: #0f9a8b;
min-width: 400px;
height: 400px;
border-radius: 7px;
display: flex;
flex-direction: column;
border: 1px solid;
box-shadow: 0 0 15px;
justify-content: space-around;


@media screen and (max-width: 430px){
  min-width: 300px;
}
@media screen and (max-width: 300px){
  min-width: 250px;
}
@media screen and (max-height: 430px){
  max-height: 100vh;
}
`;
function App() {
  return (
    <MainContainer>
      <Weather />
    </MainContainer>
  );
}

export default App;
