"use client";

import React from "react";

import "@xyflow/react/dist/style.css";
import Description from "./GeneralDescription/description";
import GraphicalInfo from "./GraphicalInfo/graphicalInfo";

const CVEPage = () => {

  return (
    <div className="vul-main-page flex">
        <Description />
        <GraphicalInfo />
    </div>
  );
};
export default CVEPage;
