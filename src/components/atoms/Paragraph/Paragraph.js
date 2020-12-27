import React from "react";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

const StyledParagraph = styled.p`
  color: ${theme.fontColors.first};
  font-family: ${theme.fontFamily.primary};
  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.fontSize.m};

  ${({ size }) =>
    size === "semiBold" &&
    `
    font-weight: ${theme.fontWeight.semiBold};
    `}

${({ size }) =>
  size === "bold" &&
  `
    font-weight: ${theme.fontWeight.bold};
    `}

  ${({ size }) =>
    size === "bigReg" &&
    `      font-size: ${theme.fontSize.l}
    `}
  ${({ size }) =>
    size === "small" &&
    `
      font-size: ${theme.fontSize.s}
    `}
  ${({ size }) =>
    size === "eSmall" &&
    `
      font-size: ${theme.fontSize.hxs}
    `}
  ${({ size }) =>
    size === "l" &&
    `
      font-size: ${theme.fontSize.l}
    `}
  ${({ size }) =>
    size === "xl" &&
    `
      font-size: ${theme.fontSize.xl}
    `}

  ${({ size }) =>
    size === "xxl" &&
    `
      font-size: ${theme.fontSize.xxl}
    `}
`;

const Paragraph = ({ className, children, size, onClick }) => {
  return (
    <StyledParagraph className={className} size={size} onClick={onClick}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
