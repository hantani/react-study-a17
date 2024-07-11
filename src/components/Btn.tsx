import styled from "styled-components";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, memo, useCallback } from "react";
import { secondState, minuteState, roundState, goalState } from "../atoms";
import { useRecoilState } from "recoil";

const Wrapper = styled(motion.button)`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  .play-icon {
    position: relative;
    left: 3px;
  }
`;

const btnVariants = {
  hover: { scale: 1.2 },
};

function Btn() {
  const isMounted = useRef(false);
  const secondIntervalRef = useRef<NodeJS.Timer>();
  const [second, setSecond] = useRecoilState(secondState);
  const [minute, setMinute] = useRecoilState(minuteState);
  const [round, setRound] = useRecoilState(roundState);
  const [goal, setGoal] = useRecoilState(goalState);
  const secondRef = useRef(second);
  const [play, setPlay] = useState(false);

  const increaseSecond = useCallback(() => {
    const currentCount = secondRef.current;
    if (currentCount > 1) {
      setSecond(currentCount - 1);
    } else {
      setSecond(60);
    }
  }, [setSecond]);

  const startTimer = () => {
    secondIntervalRef.current = setInterval(increaseSecond, 1000);
  };

  const stopTimer = useCallback(() => {
    clearInterval(secondIntervalRef.current);
  }, []);

  const onClick = () => {
    setPlay((prevState) => !prevState);
    if (play === false) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  useEffect(() => {
    secondRef.current = second;
    if (second === 59) {
      setMinute((prevState) => prevState - 1);
    }
  }, [second, setMinute]);

  useEffect(() => {
    if (isMounted.current && minute === 0 && second === 60) {
      setPlay((prevState) => !prevState);
      stopTimer();
      setMinute(25);
      setSecond(60);
      setRound((prevState) => {
        if (prevState === 4) {
          return 0;
        }
        return prevState + 1;
      });
      if (round === 4) {
        setGoal((prevState) => prevState + 1);
      }
      if (goal === 11) {
        alert("종료 되었습니다");
        setRound(0);
        setGoal(0);
      }
    } else {
      isMounted.current = true;
    }
  }, [
    minute,
    second,
    round,
    goal,
    setRound,
    setGoal,
    setMinute,
    setSecond,
    stopTimer,
  ]);

  return (
    <Wrapper variants={btnVariants} whileHover="hover" onClick={onClick}>
      {!play ? (
        <BsFillPlayFill color="white" size={50} className="play-icon" />
      ) : (
        <BsFillPauseFill color="white" size={50} />
      )}
    </Wrapper>
  );
}

export default memo(Btn);
