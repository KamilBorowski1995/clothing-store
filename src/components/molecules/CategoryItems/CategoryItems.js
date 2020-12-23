import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

import Paragraph from "components/atoms/Paragraph";
import arrow from "components/assets/svg/arrow-bottom.svg";
import { theme } from "theme/mainTheme";

const open = (height) => keyframes`
  from {
      height: 0;
    transform: scaleY(0)  ;
      }

  to {
    height: ${height}px;
    transform: scaleY(1) ;
  }
`;

const rotate = keyframes`
  from {
          transform: rotate(0)  ;
      }

  to {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const WrapperTitleCategory = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 6px;
  border-top: 1px solid ${theme.colors.second};
  border-bottom: 1px solid ${theme.colors.second};
  cursor: pointer;
`;

const StyledArrow = styled.img`
  animation: ${(props) =>
    props.active
      ? css`
          ${rotate} .6s ease-in-out forwards;
        `
      : ""};
`;

const StyledItems = styled.div`
  transform-origin: top left;
  animation: ${({ height }) => open(height)} 0.6s ease-in-out;
`;

const CategoryItems = ({ itemsProps = [], title = "", activeCat = false }) => {
  const [active, setActive] = useState(activeCat);
  const [items, setItems] = useState(itemsProps);
  const [heightItems, setHeightItems] = useState(0);

  useEffect(() => {
    setHeightItems(items.length * 18);
  }, [items]);

  const itemsMap = items.map((item) => (
    <Paragraph key={item} size="eSmall">
      {item}
    </Paragraph>
  ));

  return (
    <Wrapper>
      <WrapperTitleCategory active={active} onClick={() => setActive(!active)}>
        <Paragraph>{title}</Paragraph>
        <StyledArrow active={active} src={arrow} alt="Strzałka nawigacji" />
      </WrapperTitleCategory>
      {active && <StyledItems height={heightItems}>{itemsMap}</StyledItems>}
    </Wrapper>
  );
};

export default CategoryItems;
