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
  padding: 5px 10px;
`;

const Link = ({ className, children, to }) => {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
};

export default Link;
