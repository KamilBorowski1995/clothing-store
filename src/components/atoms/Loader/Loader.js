import React from "react";
import styled, { keyframes } from "styled-components";

import { theme } from "theme/mainTheme";

const rotate = keyframes`
  from {
          transform: rotate( 0deg)  ;
      }

      90% {
          transform: rotate(360deg)  ;
      }


  to {
    transform: rotate(360deg)
  }
`;
const Wrapper = styled.div``;

const WrapperLoader = styled.div`
  width: 100px;
  height: 100px;
  margin: 10% auto;
  background-color: ${theme.colors.second};
  border-radius: 50%;
  position: relative;
  opacity: 0.5;
`;

const LoaderBall = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform-origin: 0 -30px;
  animation: ${rotate} 2s ease-in-out infinite;
  background-color: ${theme.colors.third};
`;

const One = styled(LoaderBall)``;
const Two = styled(LoaderBall)`
  animation-delay: 0.15s;
`;
const Tree = styled(LoaderBall)`
  animation-delay: 0.3s;
`;

const Loader = () => {
  return (
    <Wrapper>
      <WrapperLoader>
        <One />
        <Two />
        <Tree />
      </WrapperLoader>
    </Wrapper>
  );
};

export default Loader;
