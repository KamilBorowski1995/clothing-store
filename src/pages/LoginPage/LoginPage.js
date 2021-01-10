import React from "react";
import styled from "styled-components";

import Form from "components/organism/Form";
import Link from "components/atoms/Link";
import { theme } from "theme/mainTheme";
import Nav from "components/organism/Nav";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const WrapperForm = styled.div`
  position: absolute;
  width: 500px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border: 1px solid ${theme.colors.second};
  border-radius: 20px;
  padding: 30px 50px;
  background-color: white;
  box-shadow: 0 0 5px 4px ${theme.colors.second};
`;

const StyledSelectPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginPage = () => {
  return (
    <div>
      <Nav />
      <Wrapper>
        <WrapperForm>
          <StyledSelectPanelWrapper>
            <Link to="login">Zaloguj się</Link>
            <Link to="register">Rejestracja</Link>
          </StyledSelectPanelWrapper>
          <Form />
        </WrapperForm>
      </Wrapper>
    </div>
  );
};

export default LoginPage;
