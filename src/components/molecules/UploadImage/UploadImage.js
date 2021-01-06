import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import FormData from "form-data";

import { server } from "config";
import { theme } from "theme/mainTheme";
import Loader from "components/atoms/Loader/Loader";
import Paragraph from "components/atoms/Paragraph";

const StyledInputFile = styled.input`
  display: none;
`;

const StyledLabelInputfile = styled.label`
  border-bottom: 1px solid ${theme.colors.first};
  color: ${theme.colors.first};
  padding: 6px 12px;
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  padding: 5px;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 5px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  color: ${theme.colors.first};
  cursor: pointer;
`;

const UploadImage = ({ title, fnEdit }) => {
  const fileInput = useRef();

  const [uploadImage, setUploadImage] = useState(null);
  const [uploadImageName, setUploadImageName] = useState("");
  const [uploadImageLoaderActive, setUploadImageLoaderActive] = useState(false);
  const [successUploadImage, setSuccessUploadImage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUploadImageLoaderActive(true);

    const formdata = new FormData();
    formdata.append("upload", uploadImage);

    const profileData = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${server}/products/upload`, formdata, profileData)
      .then(function (response) {
        setTimeout(() => {
          console.log(response);
          setUploadImageName(response.data.name);
          setUploadImageLoaderActive(false);
          setSuccessUploadImage(true);
          fnEdit(response.data._id);
        }, 1000 * 2);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const editImageName = (name) => {
    if (name.length > 20) {
      const editName = name.slice(0, 20);
      return `${editName}...`;
    } else {
      return name;
    }
  };

  const handleSelectUploadImage = (e) => {
    setUploadImageName(e.target.files[0].name);
    setUploadImage(e.target.files[0]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Paragraph>{title}:</Paragraph>
      <StyledLabelInputfile>
        <StyledInputFile
          type="file"
          ref={fileInput}
          onChange={handleSelectUploadImage}
          disabled={successUploadImage}
          accept="image/png, image/jpeg"
        />
        {uploadImageName === ""
          ? "Wybierz obraz z dysku"
          : editImageName(uploadImageName)}
      </StyledLabelInputfile>
      {uploadImageLoaderActive && <Loader />}
      {successUploadImage === false && (
        <StyledButton type="submit">Dodaj</StyledButton>
      )}
    </StyledForm>
  );
};

export default UploadImage;
