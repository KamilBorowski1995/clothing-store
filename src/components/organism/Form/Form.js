import React from "react";
import styled from "styled-components";

import InputForm from "components/atoms/InputForm";
import Link from "components/atoms/Link";
import Button from "components/atoms/Button";
import { theme } from "theme/mainTheme";

const StyledForm = styled.form`
  position: relative;
`;

const WrapperLink = styled.div`
  margin: 10px 0;
  text-align: right;
`;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.fontSize.s};
`;

const Form = () => {
  return (
    <StyledForm>
      <InputForm title="Login" />
      <InputForm title="Hasło" type="password" />
      <WrapperLink>
        <StyledLink to="/login">Nie pamiętasz hasła?</StyledLink>
      </WrapperLink>
      <Button>Zaloguj się</Button>
    </StyledForm>
  );
};

export default Form;
