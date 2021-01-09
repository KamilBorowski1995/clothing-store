import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "components/atoms/Input";
import Paragraph from "components/atoms/Paragraph";

import MainTemplate from "templates/MainTemplate";
import UploadImage from "components/molecules/UploadImage";

import ChooseQuality from "components/molecules/ChooseQuality";
import { server } from "config";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
`;

const AddItemPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputType, setInputType] = useState("");
  const [imageID, setImageID] = useState("");
  const [sizeS, setSizeS] = useState(0);
  const [sizeXS, setSizeXS] = useState(0);
  const [sizeM, setSizeM] = useState(0);
  const [sizeL, setSizeL] = useState(0);
  const [sizeXL, setSizeXL] = useState(0);

  const handleSend = () => {
    const item = {
      name: inputName,
      cash: inputNumber,
      image: imageID,
      type: inputType,
      category: "spodnie",
      pictures: [
        imageID,
        "5fe9c9ba94b0524b34e2155c",
        "5ff57e839d281943fc1dab08",
      ],
      size: [
        { name: "S", amount: sizeS },
        { name: "XS", amount: sizeXS },
        { name: "M", amount: sizeM },
        { name: "L", amount: sizeL },
        { name: "XL", amount: sizeXL },
      ],
    };

    axios
      .post(`${server}/products/add`, {
        params: {
          item,
        },
      })
      .then(function (response) {
        setTimeout(() => {
          console.log(response);
        }, 1000 * 1);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    console.log(item);
  };

  return (
    <MainTemplate>
      <Paragraph size="l">Dodaj nowy przedmiot</Paragraph>
      <Wrapper>
        <div>
          <Input
            type="text"
            title="Nazwa"
            value={inputName}
            fnEdit={setInputName}
          />
          <Input
            type="number"
            title="Cena PLN"
            value={inputNumber}
            fnEdit={setInputNumber}
          />
          <Input
            type="text"
            title="Typ"
            value={inputType}
            fnEdit={setInputType}
          />
          <UploadImage fnEdit={setImageID} title="Zdjęcie główne" />
          <Paragraph>Rozmiary</Paragraph>
          <ChooseQuality title="S" value={sizeS} fnEdit={setSizeS} />
          <ChooseQuality title="XS" value={sizeXS} fnEdit={setSizeXS} />
          <ChooseQuality title="M" value={sizeM} fnEdit={setSizeM} />
          <ChooseQuality title="L" value={sizeL} fnEdit={setSizeL} />
          <ChooseQuality title="XL" value={sizeXL} fnEdit={setSizeXL} />
          <button onClick={handleSend}>Dodaj</button>
        </div>

        <div>
          <p>Treść opisu</p>
        </div>
      </Wrapper>
    </MainTemplate>
  );
};

export default AddItemPage;
