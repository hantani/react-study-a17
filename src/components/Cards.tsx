import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { secondState, minuteState } from "../atoms";
import { memo } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Card = styled(motion.div)`
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

const cardVars = {
  start: { scale: 0, opacity: 0 },
  end: { scale: 1, opacity: 1, transition: { type: "tween" } },
};

function Cards() {
  const minute = useRecoilValue(minuteState);
  const second = useRecoilValue(secondState);

  return (
    <Wrapper>
      <Card
        key={"minute" + minute}
        variants={cardVars}
        initial="start"
        animate="end"
      >
        {minute < 10 ? "0" + minute : minute}
      </Card>
      <Dot />
      <Card
        key={"second" + second}
        variants={cardVars}
        initial="start"
        animate="end"
      >
        {second === 60 ? "00" : second < 10 ? "0" + second : second}
      </Card>
    </Wrapper>
  );
}

export default memo(Cards);
