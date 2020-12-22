import React from "react";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

import Link from "../Link";
import IconCard from "../../assets/svg/icon-card.svg";
import IconPerson from "../../assets/svg/icon-person.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 27px;
`;

const StyledLink = styled(Link)`
  margin-left: 13px;
  font-weight: ${theme.fontWeight.regular};
`;

const LinkIcon = ({ children, icon = "person" }) => {
  const selectIcon = icon === "card" ? IconCard : IconPerson;

  return (
    <Wrapper>
      <StyledImage src={selectIcon} />
      <StyledLink href="/">{children}</StyledLink>
    </Wrapper>
  );
};

export default LinkIcon;
