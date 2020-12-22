import React from "react";
import MainTemplate from "templates/MainTemplate";
import styled from "styled-components";

import Slider from "components/organism/Slider";

import LinkImage from "components/molecules/LinkImage";

import man from "components/assets/img/man.jpg";
import woman from "components/assets/img/woman.jpg";
import child from "components/assets/img/child.jpg";

import { theme } from "theme/mainTheme";

const WrapperLinkImage = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${theme.colors.second};
  border-bottom: 2px solid ${theme.colors.second};
`;

const HomePage = () => {
  return (
    <MainTemplate>
      <Slider />
      <WrapperLinkImage>
        <LinkImage link="he" image={man}>
          On
        </LinkImage>
        <LinkImage link="she" image={woman}>
          Ona
        </LinkImage>
        <LinkImage link="child" image={child}>
          Dziecko
        </LinkImage>
      </WrapperLinkImage>
    </MainTemplate>
  );
};

export default HomePage;
