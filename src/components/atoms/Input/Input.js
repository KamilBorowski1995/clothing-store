import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 5px;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.first};
  font-size: ${theme.fontSize.m};
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.third};
  background-color: transparent;
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.first};
  font-size: ${theme.fontSize.m};
  padding: 5px 10px;
`;

const Input = ({ title, type, value, fnEdit }) => {
  const handleInput = (e) => {
    console.log("pisze");
    fnEdit(e.target.value);
  };

  return (
    <Wrapper>
      <StyledLabel htmlFor={title}>{title}:</StyledLabel>
      <StyledInput
        type={type}
        id={title}
        value={value}
        onChange={handleInput}
        placeholder=" "
      />
    </Wrapper>
  );
};

export default Input;
