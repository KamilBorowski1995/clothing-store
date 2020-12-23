import React from "react";
import styled, { keyframes } from "styled-components";

import { theme } from "theme/mainTheme";

const rotate = keyframes`
  from {
          transform: rotate(75deg)  ;
      }

      50% {
          transform: rotate(-75deg)  ;
      }


  to {
    transform: rotate(75deg);
  }
`;
const WrapperLoader = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.second};
  border-radius: 50%;
  position: relative;
  opacity: 0.5;
  transform: rotate(90deg);
  animation: ${rotate} 1.5s ease-in-out infinite;
`;

const LoaderBall = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${theme.colors.third};
`;

const Loader = () => {
  return (
    <WrapperLoader>
      <LoaderBall></LoaderBall>
    </WrapperLoader>
  );
};

export default Loader;
