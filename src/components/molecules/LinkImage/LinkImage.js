import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Paragraph from "components/atoms/Paragraph";
import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  width: 315px;
  height: 381px;

  position: relative;
  overflow: hidden;
  cursor: pointer;

  :hover::before {
    transform: translateY(0%);
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 315px;
    height: 381px;
    left: 0;
    transform: translateY(100%);
    z-index: 1;
    background-color: ${theme.colors.first};
    opacity: 0.2;
    transition: 0.6s ease-in-out;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
`;

const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px 55px;
`;

const LinkImage = ({ children, image, link }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
  };
  return (
    <Wrapper onClick={handleClick}>
      <StyledImg src={image} alt="postać" />
      <StyledParagraph size="bigReg">{children}</StyledParagraph>
    </Wrapper>
  );
};

export default LinkImage;
