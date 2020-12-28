import React from "react";
import styled from "styled-components";

import Nav from "components/organism/Nav";
import { theme } from "theme/mainTheme";

const WrapperContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 57px;
`;

const WrapperFooter = styled.div`
  min-height: 300px;
  border-top: 1px solid ${theme.colors.second};
  margin-top: 30px;
  padding: 30px 0;
  font-size: 40px;
  text-align: center;
  color: ${theme.colors.third};
  font-family: ${theme.fontFamily.primary};
  position: relative;

  ::after {
    content: "Footer";
    position: absolute;
    z-index: -1;
    color: ${theme.colors.second};
    top: -5%;
    left: 38%;
    font-size: 100px;
  }

  ::before {
    content: "Footer";
    position: absolute;
    z-index: -1;
    color: ${theme.colors.third};
    top: -10%;
    left: 28%;
    font-size: 260px;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Nav />
      <WrapperContent>
        {children}
        <WrapperFooter>
          <p>Footer</p>
        </WrapperFooter>
      </WrapperContent>
    </div>
  );
};

export default MainTemplate;
