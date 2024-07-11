import styled from "styled-components";
import { roundState, goalState } from "../atoms";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 50px;
`;
const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Numbers = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  margin-bottom: 7px;
`;
const Title = styled.div`
  color: white;
  font-size: 20px;
`;

function RoundGoal() {
  const round = useRecoilValue(roundState);
  const goal = useRecoilValue(goalState);

  return (
    <Wrapper>
      <SmallWrapper>
        <Numbers>{round}/4</Numbers>
        <Title>ROUND</Title>
      </SmallWrapper>
      <SmallWrapper>
        <Numbers>{goal}/12</Numbers>
        <Title>GOAL</Title>
      </SmallWrapper>
    </Wrapper>
  );
}

export default RoundGoal;
