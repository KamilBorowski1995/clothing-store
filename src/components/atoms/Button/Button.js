import React from "react";
import styled from "styled-components";
import { theme } from "theme/mainTheme";

const StyledButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.semiBold};
  font-family: ${theme.fontFamily.primary};
`;

const StyledButtonText = styled(StyledButton)`
  width: 100%;
  padding: 9px 0;
  color: white;
  background-color: ${theme.colors.first};
  border: none;
`;

const StyledButtonSize = styled(StyledButton)`
  width: 36px;
  height: 31px;
  /* padding: 9px 0; */
  margin-right: 10px;
  color: ${theme.colors.first};
  background-color: white;
  border: 1px solid ${theme.colors.first};

  ${({ active }) =>
    active &&
    `
    color: white ;
    background-color: ${theme.colors.first};
    border: 1px solid ${theme.colors.first};
    `}
  ${({ disabled }) =>
    disabled &&
    `
    color: ${theme.colors.third};
    background-color: ${theme.colors.fourth};
    border: none;
    cursor: auto;
    `}
`;

const Button = ({
  children,
  className,
  type,
  active = false,
  disabled = false,
  onClick,
}) => {
  return (
    <>
      {type === "clothing" ? (
        <StyledButtonSize
          active={active}
          disabled={disabled}
          className={className}
          onClick={onClick}
        >
          {children}
        </StyledButtonSize>
      ) : (
        <StyledButtonText
          onClick={onClick}
          disabled={disabled}
          className={className}
        >
          {children}
        </StyledButtonText>
      )}
    </>
  );
};

export default Button;
