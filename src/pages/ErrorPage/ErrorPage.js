import React from "react";
import MainTemplate from "templates/MainTemplate";

const ErrorPage = (props) => {
  console.log(props);

  return (
    <MainTemplate>
      <h2>Error #404</h2>
    </MainTemplate>
  );
};

export default ErrorPage;
