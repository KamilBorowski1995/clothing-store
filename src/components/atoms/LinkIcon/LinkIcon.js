import React from "react";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

import Link from "../Link";
import IconCard from "../../assets/svg/icon-card.svg";
import IconPerson from "../../assets/svg/icon-person.svg";

const Wrapper = styled.div`
  margin-left: 30px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: ${theme.fontWeight.regular};
`;

const StyledImage = styled.img`
  height: 27px;
  margin-right: 13px;
`;

const LinkIcon = ({ children, to, icon = "person" }) => {
  const selectIcon = icon === "card" ? IconCard : IconPerson;

  return (
    <Wrapper>
      <StyledLink to={to}>
        <StyledImage src={selectIcon} />
        {children}
      </StyledLink>
    </Wrapper>
  );
};

export default LinkIcon;
