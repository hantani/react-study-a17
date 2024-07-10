import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #eb5b00;
  border-radius: 10px;
`;
const Dot = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  &::before {
    margin-bottom: 10px;
  }

  &::before,
  &::after {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

function Cards() {
  return (
    <Wrapper>
      <Card>25</Card>
      <Dot />
      <Card>00</Card>
    </Wrapper>
  );
}

export default Cards;
