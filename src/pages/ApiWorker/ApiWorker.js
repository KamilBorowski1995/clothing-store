import React from "react";
import { useHistory, Link } from "react-router-dom";

import MainTemplate from "templates/MainTemplate";

const ApiWorker = () => {
  const history = useHistory();

  return (
    <MainTemplate>
      <Link to="/api/worker/addItem">Dodaj nowy przedmiot</Link>
    </MainTemplate>
  );
};

export default ApiWorker;
