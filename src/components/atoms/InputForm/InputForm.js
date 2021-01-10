import React from "react";
import styled from "styled-components";
import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  position: relative;
  padding: 20px 0 30px;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  border: none;

  padding-left: 10px;
  background-color: transparent;
  font-size: ${theme.fontSize.m};
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.first};
  z-index: 1;

  :focus + label {
    top: 0px;
    font-size: ${theme.fontSize.xs};
  }

  :not(:placeholder-shown) + label {
    top: 0px;
    font-size: ${theme.fontSize.xs};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  font-size: ${theme.fontSize.m};
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.first};
  transition: 0.3s ease-in-out;
  top: 20px;
  padding-left: 10px;
`;

const StyledBar = styled.div`
  position: absolute;
  top: 45px;
  background-color: ${theme.colors.first};
  width: 100%;
  height: 1px;
`;

const InputForm = ({ title, type = "text" }) => {
  return (
    <Wrapper>
      <StyledInput type={type} placeholder=" " />
      <StyledLabel>{title}</StyledLabel>
      <StyledBar />
    </Wrapper>
  );
};

export default InputForm;
