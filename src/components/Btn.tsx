import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";

const Wrapper = styled.button`
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

function Btn() {
  return (
    <Wrapper>
      <BsFillPlayFill color="white" size={50} className="play-icon" />
    </Wrapper>
  );
}

export default Btn;
