import React, { useState, useEffect, useReducer } from "react";
import styled, { keyframes, css } from "styled-components";
import { useHistory } from "react-router-dom";

import Paragraph from "components/atoms/Paragraph";
import arrow from "components/assets/svg/arrow-bottom.svg";
import { theme } from "theme/mainTheme";
import { NavReducer } from "reducers/NavReducer";

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

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledSquare = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid ${theme.colors.first};
  margin: 5px;
  background-color: ${({ selected }) => selected && theme.colors.first};
`;

const CategoryItems = ({
  itemsProps = [],
  title = "",
  activeCat = false,
  onClick,
}) => {
  const [active, setActive] = useState(activeCat);
  const [items, setItems] = useState(itemsProps);
  const [heightItems, setHeightItems] = useState(0);
  const [state, dispatch] = useReducer(NavReducer, {});

  const history = useHistory();

  useEffect(() => {
    setHeightItems(items.length * 18);
    itemsProps.forEach((item) => {
      dispatch({
        type: "ADD_SELECT",
        name: item,
        selected: false,
      });
    });
  }, [items, history.location.pathname]);

  const handleClick = (e) => {
    dispatch({
      type: "ADD_SELECT",
      name: e.target.id,
      selected: !e.target.selected,
    });
  };

  const itemsMap = items.map((item) => (
    <ItemsWrapper>
      <StyledSquare
        onClick={handleClick}
        id={item}
        selected={state[item] ? true : false}
      />
      <Paragraph key={item} size="eSmall">
        {item}
      </Paragraph>
    </ItemsWrapper>
  ));

  return (
    <Wrapper>
      <WrapperTitleCategory active={active} onClick={() => setActive(!active)}>
        <Paragraph>{title}</Paragraph>

        <StyledArrow active={active} src={arrow} alt="Strzałka nawigacji" />
      </WrapperTitleCategory>
      {active && <StyledItems height={heightItems}>{itemsMap}</StyledItems>}
      <p onClick={(e) => onClick(e, state, title)}>Zapissz</p>
    </Wrapper>
  );
};

export default CategoryItems;
