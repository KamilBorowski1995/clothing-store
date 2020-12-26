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

const close = (height) => keyframes`
  from {
    height: ${height}px;
    transform: scaleY(1) ;
      }

  to {
    height: 0;
    transform: scaleY(0)  ;
  }
`;

const rotate = keyframes`
  from {
          transform: rotate(0deg)  ;
      }

  to {
    transform: rotate(180deg);
  }
`;

const rotateRevers = keyframes`
  from {
          transform: rotate(180deg)  ;
      }

  to {
    transform: rotate(0deg);
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
  transform: rotate(180deg);
  animation: ${({ active }) =>
    active
      ? css`
          ${rotate} .6s ease-in-out forwards
        `
      : css`
          ${rotateRevers} .6s ease-in-out forwards
        `};
`;

const StyledItems = styled.div`
  transform-origin: top left;

  animation: ${({ height, active }) =>
    active
      ? css`
          ${open(height)} .6s ease-in-out forwards
        `
      : css`
          ${close(height)} .6s ease-in-out forwards
        `};
`;

const StyledParagtaph = styled(Paragraph)`
  text-align: right;
  padding: 5px 20px;
  cursor: pointer;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSquare = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid ${theme.colors.first};
  margin: 5px;
  background-color: ${({ selected }) => selected && theme.colors.first};
  cursor: pointer;
`;

const CategoryItems = ({
  itemsProps = [],
  title = "",
  activeCat = true,
  onClick,
}) => {
  const [active, setActive] = useState(activeCat);
  const [items, setItems] = useState(itemsProps);
  const [heightItems, setHeightItems] = useState(0);
  const [state, dispatch] = useReducer(NavReducer, {});

  const history = useHistory();

  useEffect(() => {
    setHeightItems(items.length * 24 + 24 + 10);
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
      <StyledItems active={active} height={heightItems}>
        {itemsMap}
        <StyledParagtaph
          size="eSmall"
          onClick={(e) => onClick(e, state, title)}
        >
          Zapisz
        </StyledParagtaph>
      </StyledItems>
    </Wrapper>
  );
};

export default CategoryItems;
