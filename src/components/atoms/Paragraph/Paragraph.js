import React from "react";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

const StyledParagraph = styled.p`
  color: ${theme.fontColors.first};
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.regular};

  ${({ style }) =>
    style === "nBold" &&
    `
      font-weight: ${theme.fontWeight.bold};
    `}
  ${({ style }) =>
    style === "bug" &&
    `
    font-size: ${theme.fontSize.l};
    `}
  ${({ style }) =>
    style === "small" &&
    `
    font-size: ${theme.fontSize.s};
    `}
  ${({ style }) =>
    style === "eSmall" &&
    `
    font-size: ${theme.fontSize.xs};
    `}
`;

const Paragraph = ({ className, children, style }) => {
  return (
    <StyledParagraph className={className} style={style}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
