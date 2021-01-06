import React, { useState } from "react";
import styled from "styled-components";

import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 30% 70%;
  justify-content: space-between;

  padding: 5px;
`;

const ChooseQuality = ({ title, value, fnEdit }) => {
  return (
    <Wrapper>
      <Paragraph>{title}:</Paragraph>
      <div>
        <Button
          type="clothing"
          onClick={() => {
            if (value > 0) fnEdit((prevValue) => prevValue - 1);
          }}
        >
          -
        </Button>
        <Button type="clothing" disabled="true">
          {value}
        </Button>
        <Button
          type="clothing"
          onClick={() => {
            fnEdit((prevValue) => prevValue + 1);
          }}
        >
          +
        </Button>
      </div>
    </Wrapper>
  );
};

export default ChooseQuality;
