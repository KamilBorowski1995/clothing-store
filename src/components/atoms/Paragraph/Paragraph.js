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
`;

const Paragraph = ({ className, children, size }) => {
  return (
    <StyledParagraph className={className} size={size}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
