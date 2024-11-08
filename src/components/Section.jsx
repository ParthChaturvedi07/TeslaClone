import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import downArrow from "../assets/down-arrow.svg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.$bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: #ffffff;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 8vh;
  gap: 3vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2vh;
  }
`;

const LeftButton = styled.div`
  width: 17vw;
  height: 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 2vh;
  --blue: rgb(0, 193, 237);
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--blue);
  background: linear-gradient(
    to right,
    rgba(0, 191, 255, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(0, 191, 255, 0.1) 100%
  );
  color: var(--blue);
  box-shadow: inset 0 0 10px rgba(0, 191, 255, 0.4),
    0 0 9px 3px rgba(0, 191, 255, 0.1);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      rgba(0, 191, 255, 0.1) 1%,
      transparent 40%,
      transparent 60%,
      rgba(0, 191, 255, 0.1) 100%
    );
  }

  &:hover::before {
    transform: translateX(30em);
  }
`;

const RightButton = styled(LeftButton)`
  --green: #fdfefb;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(253, 254, 251, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(253, 254, 251, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
    0 0 9px 3px rgba(27, 253, 156, 0.2);

  &::before {
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(253, 254, 251, 0.1) 40%,
      rgba(253, 254, 156, 0.1) 60%,
      transparent 100%
    );
  }
`;
const DownArrow = styled.img`
  width: 7vh;
  position: absolute;
  bottom: 1vh;
  animation: animateDown infinite 1.5s;
`;

function Section({
  title,
  description,
  LeftBtnText,
  RightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap $bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>{LeftBtnText}</LeftButton>
          {RightBtnText && <RightButton>{RightBtnText}</RightButton>}
        </ButtonGroup>
      </Fade>
      <DownArrow src={downArrow} />
    </Wrap>
  );
}

export default Section;
