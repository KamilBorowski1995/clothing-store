import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

const StyledLink = styled(LinkRouter)`
  color: ${theme.fontColors.first};
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  text-decoration: none;
`;

const Link = ({ className, children }) => {
  return (
    <StyledLink className={className} href="/">
      {children}
    </StyledLink>
  );
};

export default Link;
