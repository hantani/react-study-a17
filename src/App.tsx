import styled from "styled-components";
import Cards from "./components/Cards";
import Btn from "./components/Btn";
import RoundGoal from "./components/RoundGoal";
import { RecoilRoot } from "recoil";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eb5b00;
  box-sizing: border-box;
  padding-top: 100px;
`;
const Heading = styled.h1`
  color: white;
  font-size: 42px;
  text-align: center;
`;

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Heading>Pomodoro</Heading>
        <Cards />
        <Btn />
        <RoundGoal />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
