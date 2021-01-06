import React from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { theme } from "theme/mainTheme";

import Link from "components/atoms/Link";
import LinkIcon from "components/atoms/LinkIcon";
import Logo from "components/assets/svg/logo.svg";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-areas: "Logo NavLink NavLink NavLink NavLink NavLink NavLink IconLink";
  justify-content: space-between;
  align-items: center;
  background-color: white;
  /* padding: 13px 60px; */
  padding: 10px 60px;
  box-shadow: 0 -2px 6px 0 ${theme.colors.first};
  z-index: 99;
  @media (max-width: 950px) {
    grid-template-areas:
      "Logo IconLink"
      "NavLink NavLink";
  }
`;

const StyledLink = styled(LinkRouter)`
  grid-area: Logo;
  /* margin-right: 30px; */
  min-width: 60px;
  height: 30px;
  /* height: 45px; */
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LinkWrapper = styled.div`
  grid-area: NavLink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  @media (max-width: 950px) {
    margin-top: 20px;
    max-width: 100%;
  }
`;
const IconLinkWrapper = styled.div`
  grid-area: IconLink;
  display: flex;
  align-items: center;
`;

const Nav = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <StyledImg src={Logo} alt="logo" />
      </StyledLink>

      <LinkWrapper>
        <Link to="/shop/he">On</Link>
        <Link to="/shop/she">Ona</Link>
        <Link to="/shop/child">Dziecko</Link>
        <Link to="/shop/sale">Wyprzedaż</Link>
        {/* <Link to="/news">Nowości</Link> */}
      </LinkWrapper>
      <IconLinkWrapper>
        <Link to="/api/worker">Panel Admina</Link>
        <LinkIcon to="/shoppingList" icon="card">
          Lista zakupów
        </LinkIcon>
        <LinkIcon to="/login">Zaloguj</LinkIcon>
      </IconLinkWrapper>
    </Wrapper>
  );
};

export default Nav;
