import { server } from "config";
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "theme/mainTheme";

const Wrapper = styled.div`
  display: flex;
`;

const WrapperSelectImages = styled.div`
  /* max-width: 150px; */
  flex-basis: 30%;
  display: grid;
`;

const WrapperImageSmall = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImgSmall = styled.img`
  width: 100%;
  transition: 0.6s linear;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

const WrapperActiveImage = styled.div`
  max-width: 800px;
  margin-left: 20px;
`;

const StyledActiveImage = styled.img`
  width: 100%;
  /* max-height: 80vh; */
`;

const SliderImageSinglePage = ({ product }) => {
  const [images, setImages] = useState(product);
  const [activeImage, setActiveImage] = useState(0);

  const handleClick = (e, index) => {
    setActiveImage(index);
  };

  const imagesMap = images.map((img, index) => (
    <WrapperImageSmall key={img} onClick={(e) => handleClick(e, index)}>
      <StyledImgSmall
        index={index}
        src={`${server}/products/${img}/image`}
        alt=""
      />
    </WrapperImageSmall>
  ));

  return (
    <Wrapper>
      <WrapperSelectImages>{imagesMap}</WrapperSelectImages>
      <WrapperActiveImage>
        <StyledActiveImage
          src={`${server}/products/${images[activeImage]}/image`}
          alt=""
        />
      </WrapperActiveImage>
    </Wrapper>
  );
};

export default SliderImageSinglePage;
