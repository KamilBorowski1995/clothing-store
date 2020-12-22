import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import slider from "components/assets/img/slider-1-1300.jpg";
import slider2 from "components/assets/img/slider-2-1300.jpg";

import arrowRight from "components/assets/svg/arrow-right.svg";
import arrowLeft from "components/assets/svg/arrow-left.svg";

import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  height: 539px;
  width: 1300px;

  overflow: hidden;
`;
const WrapperSection = styled.div`
  position: relative;
`;

const WrapperSliderElements = styled.div`
  height: 539px;
  display: flex;
  transition: 1s cubic-bezier(.67,.61,.38,.96);

  ${({ activeSlide }) => activeSlide === 1 && "transform: translateX(0%)"}
  ${({ activeSlide }) => activeSlide === 2 && "transform: translateX(-100%)"}
  ${({ activeSlide }) => activeSlide === 3 && "transform: translateX(-200%)"}
`;

const WrapperRings = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Ring = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  background-color: ${({ activeSlide, id }) =>
    activeSlide === id ? `${theme.colors.first}` : `${theme.colors.second}`};
  cursor: pointer;
`;

const StyledArrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 35px;
  cursor: pointer;
`;

const StyledRight = styled(StyledArrow)`
  right: -25px;
`;

const StyledLeft = styled(StyledArrow)`
  left: -25px;
`;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlider = (e) => {
    const active = e.target.id * 1;
    setActiveSlide(active);
  };

  const handleArrow = (e) => {
    switch (e.target.id) {
      case "arrow-left":
        if (activeSlide === 1) setActiveSlide(3);
        else setActiveSlide((prev) => prev * 1 - 1);
        break;
      case "arrow-right":
        if (activeSlide === 3) setActiveSlide(1);
        else setActiveSlide((prev) => prev * 1 + 1);
        break;

      default:
        break;
    }
  };

  return (
    <WrapperSection>
      <Wrapper>
        <WrapperSliderElements activeSlide={activeSlide}>
          <img src={slider} alt="" />
          <img src={slider2} alt="" />
          <img src={slider} alt="" />
        </WrapperSliderElements>
        <WrapperRings>
          <Ring onClick={handleSlider} id={1} activeSlide={activeSlide} />
          <Ring onClick={handleSlider} id={2} activeSlide={activeSlide} />
          <Ring onClick={handleSlider} id={3} activeSlide={activeSlide} />
        </WrapperRings>
      </Wrapper>
      <StyledLeft
        onClick={handleArrow}
        src={arrowLeft}
        alt="strzałka w lewo"
        id="arrow-left"
      />
      <StyledRight
        onClick={handleArrow}
        src={arrowRight}
        alt="strzałka w prawo"
        id="arrow-right"
      />
    </WrapperSection>
  );
};

export default Slider;
