import React from "react";
import styled from "styled-components";

import Nav from "components/organism/Nav";

const WrapperContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 57px;
`;

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Nav />
      <WrapperContent>
        {children}
        <p>Footer</p>
      </WrapperContent>
    </div>
  );
};

export default MainTemplate;
